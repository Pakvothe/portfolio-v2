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
    name: "Belo",
    duration: "Feb 2022 - Present",
    description:
      "As Mobile Engineering Lead at Belo, a Crypto/Fiat wallet in Argentina, I lead the frontend and mobile development areas. A key achievement was spearheading the migration of our app from Flutter to React Native, completing the project from scratch in just 5 months. The app, the company’s main feature, now serves over 1.5M active users.",
    description2:
      "Beyond the app, I’ve been deeply involved in all of Belo’s web development initiatives. This includes ongoing SEO improvements and feature enhancements for the company’s landing page, the PJ (business) platform, the BeloPay transaction web app, and a secondary project, 'Baldr', an internal dashboard for managing user documentation.",
    description3:
      "During these projects, I mentored and guided a team of three frontend developers, gaining invaluable experience in leadership, hiring, and managing cross-functional teams. I continue to focus on enhancing Belo’s ecosystem, ensuring high-quality performance and user experience across all platforms.",
    link: "https://www.belo.app",
  },

  {
    name: "Navent",
    duration: "May 2021 - Jan 2022",
    description:
      "As a frontend developer at Navent Group, I contributed to a network of real estate platforms like Zonaprop, Imovelweb, Inmuebles24, and more. Using React, I worked to maintain and improve user experiences across these high-traffic websites.",
    description2:
      "Collaborating with a team of five developers, I gained valuable experience in teamwork, agile methodologies, and managing large-scale codebases. The role sharpened my problem-solving skills and deepened my passion for frontend development.",
    link: "https://www.navent.com/",
  },
  {
    name: "Aconpy",
    duration: "Feb 2021 - May 2021",
    description:
      "At Aconpy, I worked as the sole frontend developer on 'Paiddly,' a virtual wallet project built with React. I took full ownership of the project, handling both development and design decisions.",
    description2:
      "This role gave me the chance to work independently, sharpening my decision-making skills and taking on responsibilities beyond coding. It was a formative experience that prepared me for more complex challenges ahead.",
    link: "https://www.aconpy.com/",
  },
];
