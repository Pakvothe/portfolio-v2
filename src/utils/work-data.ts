export interface Works {
  name: string;
  year: number;
  duration: string;
  description: string;
  link: string;
}

export const workData: Works[] = [
  {
    name: "Belo",
    year: 2022,
    duration: "Feb 2022 - Present",
    description: `I am working as a frontend lead at belo company. I started working as a web frontend ssr and was hired to create the web version of the company's native application. After a few months the decision was made to migrate the native application (Flutter) to React native and I was chosen to carry out this process. Being promoted to frontend lead I was in charge of carrying out the complete migration of the application in just 6 months making the application from scratch. In the process I was able to mentor and lead a team of 3 frontend developers, I learned about leadership, hiring and we sent the application to production which currently has a user base of over 700k users.`,
    link: "https://www.belo.app",
  },
  {
    name: "Navent",
    year: 2021,
    duration: "May 2021 - Jan 2022",
    description: `I worked in Navent group as a frontend developer, using React as main technology. The job consisted in supporting all the Real Estate websites of the Navent group (Zonaprop, Imovelweb, Wimoveis, Inmuebles24, Adondevivir, Plusvalia, Conlallave). Being part of a group of 5 people I learned to work in a team and support websites with a lot of user traffic and large code bases.`,
    link: "https://www.navent.com/",
  },
  {
    name: "Aconpy",
    year: 2021,
    duration: "Feb 2021 - May 2021",
    description: `This was my first job as a frontend developer. The job consisted in coding the web and a virtual wallet project called "Paiddly" using React as the main technology. As I was the only frontend developer of the company, my work led me to make both product and design decisions.`,
    link: "https://www.aconpy.com/",
  },
];
