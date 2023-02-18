import { FC, ReactNode } from "react";

interface Properties {
  children: ReactNode;
}

export const Layout: FC<Properties> = ({ children }) => {
  return (
    <div className="flex flex-1 h-[100vh] w-[100vw] p-4 sm:p-6 bg-background text-text">
      {children}
    </div>
  );
};
