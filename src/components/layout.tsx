import { FC, ReactNode } from "react";

interface Properties {
  children: ReactNode;
}

export const Layout: FC<Properties> = ({ children }) => {
  return <div className="bg-background text-text">{children}</div>;
};
