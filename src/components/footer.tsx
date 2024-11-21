let year = new Date().getFullYear();

export const Footer = () => {
  return (
    <p className="pb-10 text-center text-md text-secondary/80">
      📅 {year} - Crafted with passion and precision by{" "}
      <a
        href="https://github.com/Pakvothe/"
        target="_blank"
        rel="noreferrer"
        className="font-semibold hover:transition-all hover:text-accent hover:underline"
      >
        Franco Ortiz
      </a>{" "}
      ✨
    </p>
  );
};
