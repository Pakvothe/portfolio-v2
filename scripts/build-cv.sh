#!/usr/bin/env bash
# Builds the site, prints the three CV variants to PDF with headless Chrome,
# stamps PDF metadata, and leaves the files in public/ (served by the site).
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=4399
bun run build >/dev/null
bun run preview -- --port $PORT >/tmp/cv-preview.log 2>&1 &
PID=$!
trap 'kill $PID 2>/dev/null || true' EXIT
for i in $(seq 1 30); do curl -sf "http://localhost:$PORT/cv/" >/dev/null && break; sleep 0.3; done
print() { # $1 path, $2 out file
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="public/$2" "http://localhost:$PORT$1" >/dev/null 2>&1
  echo "public/$2"
}
print /cv/ Resume_Franco_ortiz.pdf
print /cv/product/ Resume_Franco_ortiz_Product.pdf
print /cv/engineering/ Resume_Franco_ortiz_Engineering.pdf
python3 - <<'PY'
from pypdf import PdfReader, PdfWriter
meta = {
 "Resume_Franco_ortiz.pdf": "Technical Product Manager, payments, cross-border fintech, engineering lead",
 "Resume_Franco_ortiz_Product.pdf": "Product Manager, payments, cross-border fintech, OKRs, pricing",
 "Resume_Franco_ortiz_Engineering.pdf": "Engineering Lead, React Native, mobile, engineering management, technical product manager",
}
for f, kw in meta.items():
    r = PdfReader(f"public/{f}"); w = PdfWriter(); w.append(r)
    w.add_metadata({"/Title": f"Franco Ortiz - Resume", "/Author": "Franco Ortiz", "/Subject": kw, "/Keywords": kw, "/Creator": "franco-ortiz.com"})
    w.write(f"public/{f}")
    print(f, "pages:", len(r.pages))
PY
