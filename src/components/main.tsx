import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import { TypeAnimation } from "react-type-animation";
import MAIN_IMAGE from "@/assets/main-image.webp";

export const MainSection = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-fit object-left scale-x-[- 1]"
        src={MAIN_IMAGE}
        alt="https://cdnb.artstation.com/p/assets/images/images/032/655/025/medium/olya-kolosha-3.jpg?1607070929"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-background/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-primary">
            I'm Franco Ortiz
          </h1>
          <h2 className="flex sm:text-3xl text-2xl my-4 text-secondary">
            <TypeAnimation
              sequence={[
                "🧙‍♂️ Frontend developer...",
                2000,
                "📱 Mobile developer...",
                2000,
                "💻 Tech enthusiast...",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em" }}
            />
          </h2>
          <div className="flex justify-between max-w-[250px] w-full mt-2">
            <GithubLogo
              size={32}
              className="cursor-pointer text-primary hover:text-accent"
            />
            <LinkedinLogo
              size={32}
              className="cursor-pointer text-primary hover:text-accent"
            />
            <TwitterLogo
              size={32}
              className="cursor-pointer text-primary hover:text-accent"
            />
            <Envelope
              size={32}
              className="cursor-pointer text-primary hover:text-accent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
