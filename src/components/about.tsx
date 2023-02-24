import { aboutMe1, aboutMe2, aboutMe3, aboutMe4 } from "@/utils";
import { FC } from "react";

import RESUME from "@/assets/Resume_Franco_ortiz.pdf";

export const AboutSection: FC = () => {
  return (
    <div
      id="me"
      className="flex flex-col max-w-[1040px] m-auto p-4 md:pl-14 lg:pl-8 py-16"
    >
      <h1 className="mb-12 text-4xl font-bold text-center text-primary">Me</h1>
      <div>
        <p className="my-2 text-base font-normal text-secondary/80">
          {aboutMe1}
        </p>
        <p className="my-2 text-base font-normal text-secondary/80">
          {aboutMe2}
        </p>
        <p className="mt-2 text-base font-normal text-secondary/80">
          {aboutMe3}
          <a
            href="#contact"
            className="text-primary font-semibold cursor-pointer hover:text-accent hover:underline hover:transition-all"
          >
            {aboutMe4}
          </a>
        </p>
      </div>
      <a
        aria-label="resume"
        href={RESUME}
        target="_blank"
        rel="noreferrer"
        className="text-lg ml-auto pt-4 font-semibold text-primary hover:text-accent hover:underline cursor-pointer"
      >
        Download resume 📩
      </a>
    </div>
  );
};
