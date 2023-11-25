import React, { ReactNode } from "react";
import { SideBar } from "./side-bar";
import { Header } from ".";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex items-center h-screen overflow-auto">
      <SideBar />
      <div className=" flex-1 flex flex-col h-full overflow-auto">
        <Header />
        {children}
      </div>
    </main>
  );
};
