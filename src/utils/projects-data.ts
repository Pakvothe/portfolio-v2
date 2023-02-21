export interface Project {
  name: string;
  description?: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    name: "logiaSistemas",
    description:
      "I developed a custom Landing Page for Logia Sistemas, a security company. From the ground up, I designed and implemented the project, starting with the underlying logic and finishing with the final styling. To ensure optimal performance and scalability, I utilized Redux for state management and Styled Components for styling. Additionally, I incorporated EmailJS to enable seamless messaging on the page. I was responsible for deploying the project, which included acquiring the .com.ar domain.",
    link: "https://www.logiasistemas.com.ar/",
  },
  {
    name: "aconpyLanding",
    description: `The Landing Page for the Aconpy company was a complete restyling of the company's outdated website. The project was completed in just 2 days, utilizing only vanilla HTML, CSS, and JavaScript. I was solely responsible for the project from start to finish. During the project, I gained valuable experience in working independently and completing a project within a tight timeframe. The resulting landing page was both visually appealing and functional, bringing the company's online presence up to modern standards.`,
    link: "https://www.aconpy.com/",
  },
  {
    name: "quizzMeApp",
    description: `The final project of the "soyHenry" bootcamp was a significant accomplishment for me, as I successfully implemented self-taught technologies such as React Native, GraphQL, and MongoDB. In the project, my main focus was on the frontend development using React Native and Styled Components for the UI. The project is a mobile quiz application that provides various functionalities such as creating an account, uploading quizzes, validating an account, and much more.

To complement the mobile application, I also developed "QuizMeWeb," a web dashboard for application administrators, using TypeScript and NextJS. This comprehensive solution allowed the client to manage quizzes and monitor user data on both mobile and web platforms.

I am proud to share that the application was successfully uploaded to the "Huawei App Gallery," which showcases my skills in mobile application deployment.`,
    link: "https://appgallery.huawei.com/#/app/C103845919",
  },
  {
    name: "gamingHub",
    description: `The Ecommerce project was developed as part of the "soyHenry" bootcamp, and it involved creating a fully functional online video game store from scratch. The project allowed users to search for products, add them to their cart, make purchases, and receive their orders. In order to create this project, we utilized all of the technologies that we learned in the bootcamp as well as some self-taught ones. The project was developed by a team of five programmers who worked collaboratively using the SCRUM methodology.`,
    link: "https://github.com/Pakvothe/GamingHub",
  },

  {
    name: "tetrisGame",
    description: `The "Tetris" game was created using React.js and styled with Styled Components, all in Javascript. The game is fully functional and can be controlled using the keyboard arrows. It allows the player to progress in score and difficulty. To play the game, users must create an account, and the game saves the top three high scores to a cloud database. Additionally, a visit counter is hosted in the cloud to track traffic to the site.`,
    link: "https://pakvothe.github.io/ReactTetris/",
  },
  {
    name: "OUTDATED_portfolioV1",
    description: `This is my initial portfolio page, but it is outdated and does not reflect my current skills and experience.`,
    link: "https://pakvothe.github.io/portfolio/",
  },
  {
    name: "moreProjects",
    link: "https://github.com/Pakvothe/",
  },
];
