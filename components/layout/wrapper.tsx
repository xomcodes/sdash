import React, { ReactNode } from "react";
import { SideBar } from "./side-bar";
import { Header } from ".";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main className="grid grid-cols-[220px,1fr] h-screen overflow-auto">
      <SideBar />
      <div className=" flex flex-col ">
        <Header />
        {children}
      </div>
    </main>
  );
};
