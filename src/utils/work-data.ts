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
    description: `I am currently working as a Front End developer in the Navent group. The work consists of supporting all the Real Estate websites of the Navent group (Zonaprop, Imovelweb, Wimoveis, Inmuebles24, Adondevivir, Plusvalia, Conlallave). Either with implementation of new functions or correction of errors of those already implemented.`,
    link: "https://www.belo.app",
  },
  {
    name: "Navent",
    year: 2021,
    duration: "May 2021 - Jan 2022",
    description: `I am currently working as a Front End developer in the Navent group. The work consists of supporting all the Real Estate websites of the Navent group (Zonaprop, Imovelweb, Wimoveis, Inmuebles24, Adondevivir, Plusvalia, Conlallave). Either with implementation of new functions or correction of errors of those already implemented.`,
    link: "https://www.navent.com/",
  },
  {
    name: "Aconpy",
    year: 2021,
    duration: "Feb 2021 - May 2021",
    description: `I worked for the Aconpy company, it was my first job as a developer. In it I worked as a Front End developer in the "Paiddly" project, which is a virtual bank. My tasks consisted of designing the web application from the operating side to the styles of it.`,
    link: "https://www.aconpy.com/",
  },
];
