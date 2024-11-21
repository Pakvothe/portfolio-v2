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

      <form
        action={import.meta.env.VITE_FORM_URL}
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label
              id="name-label"
              className="text-sm mb-2 font-semibold text-primary"
            >
              Name
            </label>
            <input
              aria-labelledby="name-label"
              className="border-2 rounded-lg p-3 flex border-primary focus:border-accent focus:outline-none"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label
              id="email-label"
              className="text-sm mb-2 font-semibold text-primary"
            >
              Email
            </label>
            <input
              aria-labelledby="email-label"
              className="border-2 rounded-lg p-3 flex border-primary focus:border-accent focus:outline-none"
              type="email"
              name="email"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label
            id="subject-label"
            className="text-sm mb-2 font-semibold text-primary"
          >
            Subject
          </label>
          <input
            aria-labelledby="subject-label"
            className="border-2 rounded-lg p-3 flex border-primary focus:border-accent focus:outline-none"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label
            id="message-label"
            className="text-sm mb-2 font-semibold text-primary"
          >
            Message
          </label>
          <textarea
            aria-labelledby="message-label"
            className="w-[100%] border-2 rounded-lg p-3 flex border-primary focus:border-accent focus:outline-none"
            name="message"
            rows={10}
          />
        </div>
        <button className="mt-2 bg-secondary w-full p-3 rounded-lg text-background hover:bg-primary">
          Send message
        </button>
      </form>
    </div>
  );
};
