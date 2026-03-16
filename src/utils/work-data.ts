export interface Works {
  name: string;
  duration: string;
  description: string;
  description2?: string;
  description3?: string;
  link: string;
}

export const workData: Works[] = [
  {
    name: "i1n",
    duration: "Feb 2026 - Present",
    description:
      "As CEO & Founder of i1n, I'm solely leading the end-to-end initiative to bring this product to market, managing everything from strategic vision and product-led growth to technical execution.",
    description2:
      "Architecting a high-performance localization infrastructure that decouples translation management from deployment cycles, enabling engineering teams to scale global products faster. Driving market positioning and user acquisition by identifying critical friction points in internationalization (i18n) for modern development stacks.",
    description3:
      "Defining the core value proposition of an 'infrastructure-first' approach to localization, moving beyond traditional translation tools into developer-centric automation.",
    link: "https://i1n.ai",
  },
  {
    name: "Belo - Technical Product Manager",
    duration: "Feb 2026 - Present",
    description:
      "Bridging the gap between business goals and engineering execution, defining clear roadmaps and technical priorities for Belo's cross-border payment infrastructure.",
    description2:
      "Managing end-to-end product lifecycles and unblocking development workflows to ensure high-quality delivery. Streamlining internal processes and technical documentation to support scalable fintech operations.",
    link: "https://www.belo.app",
  },
  {
    name: "Belo - Frontend & Mobile Lead",
    duration: "Feb 2022 - Feb 2026",
    description:
      "Led the migration of the belo app (+3.5M users) from Flutter to React Native in 5 months. The app, the company's main product, became one of the most used crypto wallets in Argentina.",
    description2:
      "Managed engineering teams, providing mentorship and optimizing mobile performance across platforms. Was deeply involved in all of Belo's web development initiatives, including SEO improvements, the BeloPay transaction web app, and 'Baldr', an internal compliance dashboard.",
    link: "https://www.belo.app",
  },
  {
    name: "Navent",
    duration: "May 2021 - Jan 2022",
    description:
      "Contributed to major real estate platforms (e.g., Zonaprop, Imovelweb) using React. Collaborated with agile teams to enhance user experience and optimize performance for high-traffic sites.",
    link: "https://www.navent.com/",
  },
  {
    name: "Aconpy",
    duration: "Feb 2021 - May 2021",
    description:
      "Led the development of the 'Paiddly' virtual wallet project as the sole frontend developer. Owned the project lifecycle from initial coding to design decisions and deployment.",
    link: "https://www.aconpy.com/",
  },
];
