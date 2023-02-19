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
      <p className="mt-2 mb-4 text-base font-normal text-secondary/70">
        You can contact me by filling out the following form or by sending me an
        email to{" "}
        <a
          href="mailto:fr.dv.ortiz@gmail.com?Subject=Job%20Offer"
          target="_blank"
          rel="noreferrer"
          className="underline font-semibold text-primary hover:text-accent"
        >
          fr.dv.ortiz@gmail.com
        </a>
        , and I will answer you as soon as possible.
      </p>
      <form
        action={import.meta.env.VITE_FORM_URL}
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="text-sm mb-2 font-semibold text-primary">
              Name
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-primary focus:border-accent focus:outline-none"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-2 font-semibold text-primary">
              Email
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-primary focus:border-accent focus:outline-none"
              type="email"
              name="email"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="text-sm mb-2 font-semibold text-primary">
            Subject
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-primary focus:border-accent focus:outline-none"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="text-sm mb-2 font-semibold text-primary">
            Message
          </label>
          <textarea
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