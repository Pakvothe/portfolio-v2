export interface Works {
  name: string;
  year: number;
  duration: string;
  description: string;
  description2?: string;
  description3?: string;
  link: string;
}

export const workData: Works[] = [
  {
    name: "Belo",
    year: 2022,
    duration: "Feb 2022 - Present",
    description: `As a frontend lead at Belo, I was tasked with leading the migration of the company's native application from Flutter to React Native. With my expertise in mobile app development, I was able to successfully carry out the complete migration of the application within a tight deadline of 6 months, starting from scratch.`,
    description2:
      "Throughout the migration process, I had the opportunity to lead and mentor a team of three frontend developers. As a result, I gained valuable experience in leadership and hiring, which helped me to effectively guide my team and produce high-quality results.",
    description3:
      "Currently, the Belo application has a user base of over 700k users, and I continue to work on enhancing its functionality and performance. My passion for taking on challenges, leading teams, and sharing my knowledge makes me a valuable asset to any project or organization.",
    link: "https://www.belo.app",
  },
  {
    name: "Navent",
    year: 2021,
    duration: "May 2021 - Jan 2022",
    description: `As a frontend developer at Navent Group, I played a key role in supporting a diverse network of real estate websites including Zonaprop, Imovelweb, Wimoveis, Inmuebles24, Adondevivir, Plusvalia, and Conlallave. My primary technology of choice was React, which I used to maintain and enhance the user experience across these websites.`,
    description2:
      "Working as part of a talented team of five developers, I developed essential skills in collaborative teamwork and agile methodologies. I learned to manage large codebases and handle high levels of user traffic, developing creative solutions to challenges along the way. Overall, this role gave me valuable experience and deepened my passion for frontend development.",
    link: "https://www.navent.com/",
  },
  {
    name: "Aconpy",
    year: 2021,
    duration: "Feb 2021 - May 2021",
    description: `As a frontend developer at my first job, I took on the challenging task of coding the web and a virtual wallet project called "Paiddly," with React as my primary technology. My role included taking full ownership of the project, from development to design decisions, as I was the only frontend developer in the company.`,
    description2:
      "Working independently gave me the opportunity to hone my decision-making skills and take on responsibilities beyond just coding. It was an invaluable learning experience that prepared me to take on more complex projects in the future.",
    link: "https://www.aconpy.com/",
  },
];
