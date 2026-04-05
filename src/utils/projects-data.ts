export interface Project {
  name: string;
  description?: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    name: "i1nLanding",
    description:
      "Marketing site for i1n. Built with Astro, featuring docs, pricing, and integration guides. Optimized for SEO and performance.",
    link: "https://i1n.ai",
  },
  {
    name: "i1nDashboard",
    description:
      "Web dashboard for managing i1n projects, API keys, and translation analytics. Built with Preact and TypeScript.",
    link: "https://dashboard.i1n.ai",
  },
  {
    name: "i1nCLI",
    description:
      "Command-line tool for managing translations directly from the terminal. Handles init, push, translate (182 languages via AI), pull, and type-safe code generation.",
    link: "https://www.npmjs.com/package/i1n",
  },
  {
    name: "baldrDashboard",
    description:
      "Internal compliance dashboard for Belo. Built from scratch with Vite, React, TypeScript, and MobX. Used by compliance analysts to manage fund verification requests and documentation.",
    link: "https://dashboard.baldr.app",
  },
  {
    name: "aconpyLanding",
    description:
      "Full website restyle for Aconpy, built in 2 days with vanilla HTML, CSS, and JavaScript.",
    link: "https://www.aconpy.com/",
  },
  {
    name: "quizzMeApp",
    description:
      "Mobile quiz app built with React Native, GraphQL, and MongoDB. Includes a NextJS admin dashboard. Deployed to Huawei App Gallery.",
    link: "https://appgallery.huawei.com/#/app/C103845919",
  },
  {
    name: "moreProjects",
    link: "https://github.com/Pakvothe/",
  },
];
