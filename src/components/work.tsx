import { Works, workData } from "@/utils";
import { FC } from "react";

const Work: FC<Works> = ({
  name,
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
          <a
            href={link}
            target="_blank"
            className="text-lg font-semibold text-primary hover:transition-all hover:text-accent cursor-pointer"
            rel="noreferrer"
          >
            {name}
          </a>
          <span className="bg-accent py-2 px-4 rounded-lg font-semibold text-secondary">
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
    <section
      id="works"
      aria-label="Work Experience"
      className="max-w-[1040px] m-auto p-4 md:pl-14 lg:pl-8 py-16"
    >
      <h1 className="mb-12 text-4xl font-bold text-center text-primary">
        Work
      </h1>
      {workData.map((work) => (
        <Work
          key={work.name}
          name={work.name}
          duration={work.duration}
          description={work.description}
          description2={work.description2}
          description3={work.description3}
          link={work.link}
        />
      ))}
    </section>
  );
};
