import React from "react";
import { Logo } from "../icons";
import { SideBarList } from "./side-bar-list";
import { ThemeControl } from "../theme-control";
import { useTheme } from "next-themes";

export const SideBar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <main className=" border-r-[#E3E3E3] border-r-[3px] w-[13.75rem]  h-screen justify-between flex flex-col gap-[clamp(1.2rem,3.4vw,3.375rem)] p-[clamp(16px,2.2vw,32px)] bg-white dark:bg-[#111C44]">
      <div className="min-w-[92px]">
        <Logo />
      </div>
      <SideBarList />
      <ThemeControl />
    </main>
  );
};
