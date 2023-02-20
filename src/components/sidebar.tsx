import {
  BagIcon,
  CloseIcon,
  FlaskIcon,
  HouseIcon,
  ListIcon,
  OpenEmailIcon,
  UserIcon,
} from "@/assets/icons";
import { useScrollBlock } from "@/hooks";
import { colorMap } from "@/utils";

import { FC, ReactNode, useCallback, useEffect, useState } from "react";

interface NavigationMapProperties {
  icon: ReactNode;
  name: string;
  href: string;
}
const navigationMap: NavigationMapProperties[] = [
  {
    icon: <HouseIcon color={colorMap.primary} size={24} weight={24} />,
    name: "Home",
    href: "#main",
  },
  {
    icon: <UserIcon color={colorMap.primary} size={24} weight={24} />,
    name: "About me",
    href: "#me",
  },
  {
    icon: <BagIcon color={colorMap.primary} size={24} weight={24} />,
    name: "Work",
    href: "#works",
  },
  {
    icon: <FlaskIcon color={colorMap.primary} size={24} weight={24} />,
    name: "Projects",
    href: "#projects",
  },
  {
    icon: <OpenEmailIcon color={colorMap.primary} size={24} weight={24} />,
    name: "Contact",
    href: "#contact",
  },
];
export const Sidebar: FC = () => {
  const [blockScroll, allowScroll] = useScrollBlock();
  const [showNav, setShowNav] = useState(false);

  const toggleNav = useCallback(() => {
    setShowNav((previous) => !previous);
  }, []);

  useEffect(() => {
    if (showNav) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [allowScroll, blockScroll, showNav]);

  const MobileNavigationMenu: FC = () => (
    <div
      onClick={toggleNav}
      className="md:hidden block fixed pr-7 w-[100%] h-screen bg-primary/80 flex flex-col justify-center items-center z-20"
    >
      {navigationMap.map((navigation) => (
        <a
          aria-label={`shortcut-${navigation.name}`}
          key={navigation.name}
          href={navigation.href}
          className="flex items-center justify-center w-[75%] my-2 p-4 bg-background rounded-lg shadow-md shadow-primary/50 cursor-pointer hover:scale-105 ease-in-out duration-100"
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
            aria-label={`shortcut-${navigation.name}`}
            key={navigation.name}
            href={navigation.href}
            className="flex items-center my-3 bg-background shadow-md shadow-primary/50 p-3 rounded-full ml-4 cursor-pointer hover:scale-105 ease-in-out duration-100"
          >
            {navigation.icon}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {showNav ? (
        <CloseIcon
          color={colorMap.background}
          size={32}
          onClick={toggleNav}
          weight={24}
          className="fixed cursor-pointer top-4 right-4 z-[99] hover:scale-105 ease-in duration-100 md:hidden"
        />
      ) : (
        <ListIcon
          color={colorMap.secondary}
          size={32}
          onClick={toggleNav}
          weight={24}
          className="fixed cursor-pointer top-4 right-4 z-[99] hover:scale-105 ease-in duration-100 md:hidden"
        />
      )}
      {showNav ? <MobileNavigationMenu /> : null}

      <DesktopNavigationSidebar />
    </>
  );
};
