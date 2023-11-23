import React from "react";
import { Logo } from "../icons";
import { SideBarList } from "./side-bar-list";
import { ThemeControl } from "../theme-control";

export const SideBar = () => {
  return (
    <main className=" border-r-[E3E3E3] border-r-[3px] flex flex-col gap-[72px] px-[clamp(16px,2.2vw,32px)]">
      <section className=" flex flex-col gap-[54.7px] pt-[clamp(15px,2.1vw,30px)]">
        <Logo />
        <SideBarList />
        <ThemeControl />
      </section>
    </main>
  );
};
