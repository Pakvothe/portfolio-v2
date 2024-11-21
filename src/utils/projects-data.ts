export interface Project {
  name: string;
  description?: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    name: "baldrDashboard",
    description:
      "Baldr is a secondary project within Belo, designed as an internal compliance management dashboard. It enables compliance analysts to efficiently handle requests and manage supporting documentation for fund verification through an intuitive interface. I was involved in this project from the very beginning, taking part in key decisions such as technology stack selection (Vite, React, TypeScript, MobX) and product design. I also contributed to defining features and workflows to ensure the dashboard met the needs of the compliance team. In addition to shaping the product vision, I implemented the entire frontend, focusing on performance, usability, and scalability. Baldr reflects a blend of thoughtful design, robust technical implementation, and a clear focus on solving complex compliance challenges within Belo.",
    link: "https://dashboard.baldr.app",
  },
  {
    name: "logiaSistemas",
    description:
      "I designed and developed a custom Landing Page for Logia Sistemas, a security company. This end-to-end project involved crafting the logic, implementing Redux for state management, and using Styled Components for modern styling. EmailJS was integrated for seamless messaging functionality. I also handled deployment, including acquiring and configuring the .com.ar domain.",
    link: "https://www.logiasistemas.com.ar/",
  },
  {
    name: "aconpyLanding",
    description:
      "I revitalized Aconpy’s online presence by completely restyling their outdated website in just 2 days. Using only vanilla HTML, CSS, and JavaScript, I created a visually appealing and functional landing page. This project honed my ability to work independently and meet tight deadlines, delivering a modernized web experience.",
    link: "https://www.aconpy.com/",
  },
  {
    name: "quizzMeApp",
    description:
      "For my final bootcamp project, I developed 'QuizzMe,' a mobile quiz application using React Native, GraphQL, and MongoDB. The app includes features like user registration, quiz creation, and account validation. Additionally, I built a web dashboard for administrators using TypeScript and NextJS to manage quizzes and user data. Successfully deployed to the Huawei App Gallery, this project showcases my full-stack development and deployment skills.",
    link: "https://appgallery.huawei.com/#/app/C103845919",
  },
  {
    name: "gamingHub",
    description:
      "As part of the 'SoyHenry' bootcamp, I collaborated with a team to create 'Gaming Hub,' an ecommerce platform for video games. Users can search, add items to a cart, and complete purchases. Built with a mix of bootcamp-taught and self-taught technologies, we employed SCRUM methodology to deliver a functional, scalable solution from scratch.",
    link: "https://github.com/Pakvothe/GamingHub",
  },
  {
    name: "tetrisGame",
    description:
      "This fully functional Tetris game was developed using React.js and Styled Components. Players can create accounts, compete for high scores stored in a cloud database, and track site visits through a cloud-hosted counter. The game dynamically adjusts difficulty as players progress, offering an engaging experience.",
    link: "https://pakvothe.github.io/ReactTetris/",
  },
  {
    name: "portfolioV1(Deprecated)",
    description:
      "My first portfolio page, showcasing early projects and skills. While outdated, it reflects the foundation of my growth as a developer.",
    link: "https://pakvothe.github.io/portfolio/",
  },
  {
    name: "moreProjects",
    link: "https://github.com/Pakvothe/",
  },
];
