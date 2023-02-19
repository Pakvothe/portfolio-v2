import { colorMap } from "@/utils";
import {
  Bag,
  EnvelopeOpen,
  Flask,
  House,
  List,
  UserCircle,
} from "phosphor-react";
import { FC, ReactNode, useCallback, useState } from "react";

interface NavigationMapProperties {
  icon: ReactNode;
  name: string;
  href: string;
}
const navigationMap: NavigationMapProperties[] = [
  {
    icon: <House size={24} weight="bold" />,
    name: "Home",
    href: "#main",
  },
  {
    icon: <UserCircle size={24} weight="bold" />,
    name: "About me",
    href: "#me",
  },
  {
    icon: <Bag size={24} weight="bold" />,
    name: "Experience",
    href: "#experience",
  },
  {
    icon: <Flask size={24} weight="bold" />,
    name: "Works",
    href: "#works",
  },
  {
    icon: <EnvelopeOpen size={24} weight="bold" />,
    name: "Contact",
    href: "#contact",
  },
];
export const Sidebar: FC = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = useCallback(() => {
    setShowNav((previous) => !previous);
  }, []);

  const MobileNavigationMenu: FC = () => (
    <div className="md:hidden block fixed pr-7 w-[100%] h-screen bg-background/80 flex flex-col justify-center items-center z-20">
      {navigationMap.map((navigation) => (
        <a
          onClick={toggleNav}
          key={navigation.name}
          href={navigation.href}
          className="flex items-center w-[75%] my-2 p-4 bg-background rounded-lg shadow-md shadow-primary/50 cursor-pointer hover:scale-105 ease-in duration-100"
        >
          {navigation.icon}
          <span className="ml-2 text-secondary">{navigation.name}</span>
        </a>
      ))}
    </div>
  );

  const DesktopNavigationSidebar: FC = () => (
    <div className="md:block hidden fixed top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="flex flex-col">
        {navigationMap.map((navigation) => (
          <a
            key={navigation.name}
            href={navigation.href}
            className="my-3 bg-background shadow-md shadow-primary/50 p-3 rounded-full ml-4 cursor-pointer hover:scale-105 ease-in duration-100 text-primary  hover:text-accent"
          >
            {navigation.icon}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <List
        size={32}
        onClick={toggleNav}
        weight="bold"
        className="fixed top-4 right-4 z-[99] md:hidden text-secondary hover:text-accent cursor-pointer"
      />
      {showNav ? <MobileNavigationMenu /> : null}

      <DesktopNavigationSidebar />
    </>
  );
};
