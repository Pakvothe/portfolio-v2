export interface Project {
  name: string;
  description?: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    name: "Gaming hub",
    description: `Ecommerce project of the bootcamp "soyHenry".It consists of a fully functional online video game store made from scratch, it allows you to search for products, add them to the cart, buy and receive it.In this project, all the technologies learned in the bootcamp and some self- taught were used.We worked with a group of 5 programmers using SCRUM methodology.`,
    link: "https://github.com/Pakvothe/GamingHub",
  },
  {
    name: "Logia sistemas",
    description:
      "Landing Page for the security company Logia Sistemas. It was made from 0 from logic to style. Redux was used for state management, Styled Components for styles and EmailJs for messaging. The deployment was also carried out from scratch, including the acquisition of the domain .com.ar",
    link: "https://www.logiasistemas.com.ar/",
  },
  {
    name: "QuizzMe app",
    description: `Final project of the "soyHenry" bootcamp for which I implemented self-taught technologies (React Native, GraphQL, MongoDB). In the project I am almost exclusively dedicated to the front with React Native and the UI with Styled Components. The project consists of a mobile quiz application, it allows you to create an account, upload quizzes, validate an account and much more. The project is complemented by "QuizMeWeb" which is a web dashboard for the application administrator,the same developed in TypeScript and NextJS. The application was uploaded to the "Huawei App Gallery"`,
    link: "https://appgallery.huawei.com/#/app/C103845919",
  },
  {
    name: "Aconpy landing",
    description: `Landing Page of the Aconpy company. This project was a complete restyling of the outdated website of the company I work for. It was done completely with vanilla HTML, CSS and JavaScript in just 2 days. The project was carried out by myself in its entirety.`,
    link: "https://www.aconpy.com/",
  },
  {
    name: "My first portfolio",
    description: `My first portfolio page (outdated)`,
    link: "https://franco-ortiz.com/",
  },
  {
    name: "More projects",
    link: "https://github.com/Pakvothe",
  },
];
