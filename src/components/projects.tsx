import { FC, useCallback, useState } from "react";
import BELO1 from "@/assets/belo-1.webp";
import BELO2 from "@/assets/belo-2.webp";
import { Project, projectsData } from "@/utils";

const highlightedProject = {
  name: "beloApp",
  description:
    "I lead the frontend and mobile development for Belo, a widely successful crypto wallet designed to make financial management accessible to everyone. The app, built with React Native, is available on both Android and iOS and has a growing user base of over 1.5M.",
  description2:
    "My responsibilities include implementing MobX for efficient state management, Axios for seamless data fetching, and Jest for robust testing. I also focus on optimizing code and device resource usage to ensure a smooth and responsive user experience.",
  description3:
    "In addition to technical development, I have gained significant experience in leading and mentoring a team, and managing the end-to-end process of taking the app from development to production on the Play Store and App Store. Belo has become a reliable financial tool, reflecting the impact of our collaborative efforts.",
  link: "https://belo.app",
};
const HighlightedProject: FC = () => (
  <div className="flex flex-wrap md:flex-nowrap">
    <div className="w-screen md:w-[50%] h-[100%] md:mt-2 flex flex-row">
      <img
        src={BELO1}
        alt="Belo App Screenshot 1 - Crypto Wallet Interface"
        className="rounded-l-lg object-contain w-[50%]"
        loading="lazy"
      />
      <img
        src={BELO2}
        alt="Belo App Screenshot 2 - Transaction Dashboard"
        className="rounded-r-lg object-contain w-[50%]"
        loading="lazy"
      />
    </div>
    <div className="mt-8 md:mt-0 md:ml-8 md:w-[50%]">
      <div className="mb-2 items-center flex flex-wrap">
        <p className="mr-2 text-xl text-primary">const</p>
        <h2 className="text-center md:text-left text-2xl font-bold text-secondary">
          {highlightedProject.name}
        </h2>
        <p className="ml-2 text-lg text-primary">{"= () =>"}</p>
        <a
          href="https://belo.app"
          target="_blank"
          rel="noreferrer"
          className="truncate text-ellipsis md:ml-2 text-xl font-bold text-secondary hover:transition-all hover:text-accent hover:underline cursor-pointer"
        >
          {highlightedProject.link}
        </a>
      </div>
      <p className="text-base font-normal text-secondary/80">
        {highlightedProject.description}
      </p>
      <p className="mt-2 text-base font-normal text-secondary/80">
        {highlightedProject.description2}
      </p>
      <p className="mt-2 text-base font-normal text-secondary/80">
        {highlightedProject.description3}
      </p>
    </div>
  </div>
);

const ProjectItem: FC<Project> = ({ name, description, link }) => {
  return (
    <div className="my-8  md:ml-4 ">
      <div className="w-full mb-2 items-center flex flex-wrap">
        <p className="mr-2 text-primary text-md">const</p>
        <h2 className="text-center md:text-left text-md font-bold text-secondary">
          {name}
        </h2>
        <p className="ml-2 text-md text-primary">{"= () =>"}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="truncate text-ellipsis md:ml-2 text-md font-bold text-secondary hover:transition-all hover:text-accent hover:underline cursor-pointer"
        >
          {link}
        </a>
      </div>
      {description ? (
        <p className="text-sm font-normal text-secondary/80">{description}</p>
      ) : null}
    </div>
  );
};
export const ProjectsSection: FC = () => {
  const [showProject, setShowProject] = useState(false);

  const toggleProjects = useCallback(() => {
    setShowProject((prev) => !prev);
  }, []);

  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto p-4 md:pl-14 lg:pl-8 py-16"
    >
      <h1 className="mb-12 text-4xl font-bold text-center text-primary">
        Projects
      </h1>
      <HighlightedProject />
      <div className="mt-6 flex items-center">
        <p
          onClick={toggleProjects}
          className="text-lg ml-auto font-semibold text-primary hover:text-accent hover:underline cursor-pointer"
        >
          {showProject ? "Hide projects ☝️" : "View more projects 👇"}
        </p>
      </div>
      {showProject
        ? projectsData.map((project) => (
            <ProjectItem
              key={project.name}
              name={project.name}
              description={project.description}
              link={project.link}
            />
          ))
        : null}
    </div>
  );
};
