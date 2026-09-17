export type Variant = "hybrid" | "product" | "engineering";

export const contact = {
  name: "Franco Ortiz",
  email: "fr.dv.ortiz@gmail.com",
  site: "franco-ortiz.com",
  linkedin: "linkedin.com/in/franco-david-ortiz",
  github: "github.com/Pakvothe",
  location: "Buenos Aires, Argentina",
};

const ptm = {
  takeRate:
    "Found a ~50% drop in the take rate of a payment rail with six-figure monthly revenue that nobody had flagged; the analysis triggered the pricing review.",
  metric96:
    "Caught a revenue metric off by 96% (wrong source table), found the right source and documented it company-wide.",
  analytics:
    "Stopped a four-year analytics contract priced at twice the incumbent tool; led the evaluation of alternatives with six-figure annual savings.",
  crossBorder:
    "Ran the first quantitative analysis of the cross-border user segment (48% of active users, 74% of volume, 97% of value); it redefined the squad's focus.",
  pricing:
    "Defined the deposit pricing principle the company adopted as a guideline, including in decisions taken without me in the room.",
  okr: "My OKR format was adopted by the CPO as the standard for every squad.",
  routing:
    "Designed the multi-provider routing strategy that became a company-level quality KR.",
  integration:
    "Took a new-country payment integration from kickoff to internal release in 11 days, with account opening in about 4 seconds.",
  i18n: "Turned a one-off regulatory requirement into a reusable localization capability, in production the same day.",
  usLaunch:
    "Stopped an unlicensed US app-store launch under executive pressure, quantified the regulatory exposure and proposed a viable state-by-state path.",
  fraud:
    "Reframed fraud and card fail-rate metrics by separating distribution from average, avoiding a rail shutdown based on the wrong number.",
  planning:
    "Run planning and architecture decisions for a squad without a tech lead.",
};

const lead = {
  rewrite:
    "Led the rewrite of the belo app from Flutter to React Native: 3.5M users, five months.",
  team: "Built and managed the frontend and mobile teams: hiring, 1:1s, performance reviews, mentoring.",
  architecture:
    "Owned mobile architecture and performance on iOS and Android for a regulated fintech operating in several countries.",
  web: "Shipped the web side too: SEO, the BeloPay transaction web app and an internal compliance dashboard.",
};

export interface Role {
  company: string;
  title: string;
  period: string;
  intro?: string;
  bullets: string[];
}

export interface CvVariant {
  slug: Variant;
  fileName: string;
  headline: string;
  summary: string;
  roles: Role[];
  skills: { label: string; items: string[] }[];
}

const i1n: Role = {
  company: "i1n (side project)",
  title: "Founder",
  period: "Feb 2026 - Present",
  bullets: [
    "Localization infrastructure for React and React Native stacks that decouples translation management from deploy cycles. Product, backend, frontend, CLI and npm package.",
  ],
};
const navent: Role = {
  company: "Navent",
  title: "Frontend Developer",
  period: "May 2021 - Jan 2022",
  bullets: [
    "Zonaprop and Imovelweb, high-traffic real estate platforms built with React.",
  ],
};
const aconpy: Role = {
  company: "Aconpy",
  title: "Frontend Developer",
  period: "Feb 2021 - May 2021",
  bullets: [
    "Sole frontend developer of Paiddly, a virtual wallet, from first commit to deployment.",
  ],
};

const ptmRole = (intro: string, bullets: string[]): Role => ({
  company: "belo",
  title: "Technical Product Manager",
  period: "Feb 2026 - Present",
  intro,
  bullets,
});
const leadRole = (bullets: string[]): Role => ({
  company: "belo",
  title: "Frontend & Mobile Lead",
  period: "Feb 2022 - Feb 2026",
  bullets,
});

export const education = [
  { name: "Henry Full Stack Bootcamp", period: "Oct 2020 - Jan 2021" },
];
export const languages = "Spanish (native), English (professional working proficiency)";

export const variants: Record<Variant, CvVariant> = {
  hybrid: {
    slug: "hybrid",
    fileName: "Resume_Franco_ortiz.pdf",
    headline:
      "Technical Product Manager · Payments & cross-border fintech · ex Mobile Engineering Lead",
    summary:
      "Technical Product Manager at belo, a LatAm fintech with 3.5M+ users, after four years leading its mobile engineering. I run product for cross-border payments: roadmap, OKRs, payment-provider integrations in new countries and the SQL analysis behind every decision. I am most useful where regulation, payment providers and product have to fit in the same decision. I build with AI agents daily.",
    roles: [
      ptmRole(
        "Own the roadmap and OKRs for the cross-border payments squad of a regulated fintech.",
        [ptm.takeRate, ptm.metric96, ptm.analytics, ptm.integration, ptm.i18n, ptm.okr, ptm.planning, ptm.usLaunch],
      ),
      leadRole([lead.rewrite, lead.team, lead.architecture]),
      i1n,
      navent,
      aconpy,
    ],
    skills: [
      { label: "Product", items: ["Product Management", "Technical Product Management", "Payments", "Cross-border Payments", "OKRs", "Roadmaps", "Vendor Management", "Pricing"] },
      { label: "Data", items: ["SQL", "BigQuery", "Product Analytics"] },
      { label: "Engineering", items: ["React Native", "React", "TypeScript", "Mobile Architecture", "Engineering Management", "AI agents (Claude Code)"] },
    ],
  },
  product: {
    slug: "product",
    fileName: "Resume_Franco_ortiz_Product.pdf",
    headline:
      "Product Manager · Payments & cross-border fintech · engineering background",
    summary:
      "Product manager for cross-border payments at belo, a LatAm fintech with 3.5M+ users. I own the roadmap and OKRs of the squad (my format became the company standard), defined pricing principles adopted company-wide, and my analysis found revenue problems nobody was tracking. Four years leading the mobile team before this, so I write my own SQL and read the code before asking for an estimate.",
    roles: [
      ptmRole(
        "Own the roadmap and OKRs for the cross-border payments squad of a regulated fintech.",
        [ptm.takeRate, ptm.crossBorder, ptm.pricing, ptm.okr, ptm.analytics, ptm.metric96, ptm.routing, ptm.usLaunch],
      ),
      leadRole([lead.rewrite, lead.team]),
      i1n,
      navent,
      aconpy,
    ],
    skills: [
      { label: "Product", items: ["Product Management", "Product Strategy", "Payments", "Cross-border Payments", "OKRs", "Roadmaps", "Pricing", "Vendor Management", "Stakeholder Management"] },
      { label: "Data", items: ["SQL", "BigQuery", "Product Analytics", "Metrics design"] },
      { label: "Engineering", items: ["React Native", "TypeScript", "Mobile Architecture", "AI agents (Claude Code)"] },
    ],
  },
  engineering: {
    slug: "engineering",
    fileName: "Resume_Franco_ortiz_Engineering.pdf",
    headline:
      "Engineering Lead · Mobile & Frontend · Technical Product Manager",
    summary:
      "Engineering lead turned technical PM. Four years leading belo's frontend and mobile teams (3.5M+ users): led the Flutter to React Native rewrite in five months, built the team through hiring and performance reviews, owned mobile architecture. Since 2026 I run product for cross-border payments, which means I bring the business context into architecture decisions and still run planning for squads without a tech lead.",
    roles: [
      ptmRole(
        "Run product for the cross-border payments squad, still hands-on with architecture and data.",
        [ptm.integration, ptm.planning, ptm.i18n, ptm.metric96, ptm.takeRate, ptm.analytics, ptm.okr],
      ),
      leadRole([lead.rewrite, lead.team, lead.architecture, lead.web]),
      i1n,
      navent,
      aconpy,
    ],
    skills: [
      { label: "Engineering", items: ["React Native", "React", "TypeScript", "Node.js", "Mobile Architecture", "iOS & Android releases", "CI/CD", "AI agents (Claude Code)"] },
      { label: "Management", items: ["Engineering Management", "Hiring", "Performance Reviews", "Planning", "Technical Roadmaps"] },
      { label: "Product & data", items: ["Product Management", "OKRs", "Payments", "SQL", "BigQuery"] },
    ],
  },
};
