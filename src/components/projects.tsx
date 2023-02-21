import { FC, useCallback, useState } from "react";
import BELO1 from "@/assets/belo-1.webp";
import BELO2 from "@/assets/belo-2.webp";
import { Project, projectsData } from "@/utils";

const HighlightedProject: FC = () => (
  <div className="flex flex-wrap md:flex-nowrap">
    <div className="w-screen md:w-[50%] h-[100%] md:mt-2 flex flex-row">
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
          className="truncate text-ellipsis md:ml-2 text-xl font-bold text-secondary hover:transition-all hover:text-accent hover:underline cursor-pointer"
        >
          https://belo.app/
        </a>
      </div>
      <p className="text-base font-normal text-secondary/80">
        I have been leading the frontend development of Belo, a crypto wallet
        project designed to make financial management more accessible to people.
      </p>
      <p className="mt-2 text-base font-normal text-secondary/80">
        From the outset, my responsibilities have included developing the
        application in React Native, implementing MobX for state management,
        integrating Axios for data fetching, and using Jest for testing. With a
        user base of over 700k and availability on both Android and iOS, Belo
        has become a highly successful and widely used financial tool.
      </p>
      <p className="mt-2 text-base font-normal text-secondary/80">
        Throughout my work on Belo, I have gained valuable experience in
        optimizing code and utilizing device resources, enabling the application
        to deliver a smooth and seamless user experience. I have also learned to
        lead and mentor a team, including managing the process of taking an
        application from development to production in both the PlayStore and
        AppStore environments.
      </p>
    </div>
  </div>
);

const ProjectItem: FC<Project> = ({ name, description, link }) => {
  return (
    <div className="my-8  md:ml-4 ">
      <div className="w-full mb-2 flex items-center flex flex-wrap">
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
