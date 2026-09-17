export interface Project {
  name: string;
  description?: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    name: "i1n landing",
    description:
      "Marketing site for i1n, built with Astro: docs, pricing and integration guides. Tuned for SEO and performance.",
    link: "https://i1n.ai",
  },
  {
    name: "i1n dashboard",
    description:
      "Web dashboard for managing i1n projects, API keys and translation analytics. Built with Preact and TypeScript.",
    link: "https://dashboard.i1n.ai",
  },
  {
    name: "i1n CLI",
    description:
      "Command-line tool for managing translations from the terminal: init, push, translate, pull and type-safe code generation.",
    link: "https://www.npmjs.com/package/i1n",
  },
  {
    name: "Aconpy landing",
    description:
      "Full website restyle for Aconpy, built in two days with vanilla HTML, CSS and JavaScript.",
    link: "https://www.aconpy.com/",
  },
  {
    name: "QuizzMe app",
    description:
      "Mobile quiz app built with React Native, GraphQL and MongoDB, with a Next.js admin dashboard. Published on Huawei AppGallery.",
    link: "https://appgallery.huawei.com/#/app/C103845919",
  },
  {
    name: "More projects",
    link: "https://github.com/Pakvothe/",
  },
];
