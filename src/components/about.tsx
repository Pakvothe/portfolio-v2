import { aboutMe1, aboutMe2, aboutMe3 } from "@/utils";
import { FC } from "react";

export const AboutSection: FC = () => {
  return (
    <div id="me" className="max-w-[1040px] m-auto p-4 md:pl-14 lg:pl-8 py-16">
      <h1 className="mb-12 text-4xl font-bold text-center text-primary">Me</h1>
      <p className="ml-4 my-2 text-base font-normal text-secondary/70">
        {aboutMe1}
      </p>
      <p className="ml-4 my-2 text-base font-normal text-secondary/70">
        {aboutMe2}
      </p>
      <p className="ml-4 mt-2 text-base font-normal text-secondary/70">
        {aboutMe3}
      </p>
    </div>
  );
};