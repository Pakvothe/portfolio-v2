import { FC } from "react";

export const ContactSection: FC = () => {
  return (
    <div
      id="contact"
      className="max-w-[1040px] m-auto p-4 md:pl-14 lg:pl-8 py-16"
    >
      <h1 className="mb-12 text-4xl font-bold text-center text-primary">
        Contact
      </h1>
      <p className="mt-2 mb-4 text-base font-normal text-secondary/80">
        I’d love to hear from you! Whether you have a project in mind, a job
        opportunity, or just want to connect, feel free to reach out. You can
        fill out the contact form on my website, connect with me through my{" "}
        <a
          href="#main"
          className="underline font-semibold text-primary hover:transition-all hover:text-accent"
        >
          social media
        </a>{" "}
        accounts, or send me an email directly at{" "}
        <a
          href="mailto:fr.dv.ortiz@gmail.com?Subject=Job%20Offer"
          target="_blank"
          rel="noreferrer"
          className="underline font-semibold text-primary hover:transition-all hover:text-accent"
        >
          fr.dv.ortiz@gmail.com
        </a>
        . I’ll make sure to get back to you as soon as possible.
      </p>
    </div>
  );
};
