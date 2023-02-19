import { FC, useCallback, useState } from "react";
import BELO1 from "@/assets/belo-1.webp";
import BELO2 from "@/assets/belo-2.webp";
import { Project, projectsData } from "@/utils";

const HighlightedProject: FC = () => (
  <div className="flex flex-wrap md:flex-nowrap">
    <div className="w-screen md:w-[50%] flex flex-row">
      <img
        src={BELO1}
        alt="/"
        className="rounded-l-lg object-contain w-[50%]"
      />
      <img
        src={BELO2}
        alt="/"
        className="rounded-r-lg object-contain w-[50%]"
      />
    </div>
    <div className="mt-8 md:mt-0 md:ml-8 md:w-[50%]">
      <div className="mb-2 flex items-center flex flex-wrap">
        <p className="mr-2 text-xl text-primary">const</p>
        <h2 className="text-center md:text-left text-2xl font-bold text-secondary">
          beloApp
        </h2>
        <p className="ml-2 text-lg text-primary">{"= () =>"}</p>
        <a
          href="https://belo.app"
          target="_blank"
          rel="noreferrer"
          className="md:ml-2 text-xl font-bold text-secondary hover:text-accent hover:underline cursor-pointer"
        >
          https://belo.app/
        </a>
      </div>
      <p className="text-base font-normal text-secondary/70">
        Belo is a project that I am currently working on. It is a crypto wallet
        that aims to facilitate people's finances. As frontend leadear of the
        application I am involved from the beginning in the development of it.
      </p>
      <p className="mt-2 text-base font-normal text-secondary/70">
        The application is made in React Native, it uses mobx for state
        management, axios for data fetch and jest for testing. It is currently a
        productive application with more than 700k users and is available for
        Android and iOS.
      </p>
      <p className="mt-2 text-base font-normal text-secondary/70">
        With this development I learned a lot about optimizing code and taking
        advantage of the resources of the devices. I also learned how to lead a
        team and take an application to production in the PlayStore and AppStore
        environments
      </p>
    </div>
  </div>
);

const ProjectItem: FC<Project> = ({ name, description, link }) => {
  return (
    <div className="my-8  md:ml-4 ">
      <div className="mb-2 flex items-center flex flex-wrap">
        <p className="mr-2 text-primary text-sm">const</p>
        <h2 className="text-center md:text-left text-md font-bold text-secondary">
          {name}
        </h2>
        <p className="ml-2 text-sm text-primary">{"= () =>"}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="md:ml-2 text-sm font-bold text-secondary hover:text-accent hover:underline cursor-pointer"
        >
          {link}
        </a>
      </div>
      {description ? (
        <p className="text-xs font-normal text-secondary/70">{description}</p>
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
              name={project.name}
              description={project.description}
              link={project.link}
            />
          ))
        : null}
    </div>
  );
};
