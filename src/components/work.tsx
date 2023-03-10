import { Works, workData } from "@/utils";
import { FC } from "react";

const Work: FC<Works> = ({
  name,
  year,
  duration,
  description,
  description2,
  description3,

  link,
}) => {
  return (
    <ol className="flex flex-col md:flex-row">
      <li className="mb-8">
        <p className="flex flex-wrap gap-4 items-center text-sm md-tex-sm">
          <span className="bg-accent py-2 px-4 rounded-lg font-semibold text-secondary">
            {year}
          </span>
          <a
            href={link}
            target="_blank"
            className="text-lg font-semibold text-primary hover:transition-all hover:text-accent cursor-pointer"
            rel="noreferrer"
          >
            {name}
          </a>
          <span className="font-normal leading-none text-secondary/75">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-secondary/80">
          {description}
        </p>
        {description2 ? (
          <p className="my-2 text-base font-normal text-secondary/80">
            {description2}
          </p>
        ) : null}
        {description3 ? (
          <p className="my-2 text-base font-normal text-secondary/80">
            {description3}
          </p>
        ) : null}
      </li>
    </ol>
  );
};
export const WorkSection: FC = () => {
  return (
    <div
      id="works"
      className="max-w-[1040px] m-auto p-4 md:pl-14 lg:pl-8 py-16"
    >
      <h1 className="mb-12 text-4xl font-bold text-center text-primary">
        Work
      </h1>
      {workData.map((work) => (
        <Work
          key={work.name}
          name={work.name}
          year={work.year}
          duration={work.duration}
          description={work.description}
          description2={work.description2}
          description3={work.description3}
          link={work.link}
        />
      ))}
    </div>
  );
};
