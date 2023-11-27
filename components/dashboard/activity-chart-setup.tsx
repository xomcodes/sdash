import React from "react";
import { Coins } from "../icons";

import dynamic from "next/dynamic";
import { ArrowDown2 } from "iconsax-react";
import { useTheme } from "next-themes";

const TopBarChart = dynamic(() => import("../charts/top-bar-chart"), {
  ssr: false,
});
export const ActivityChart = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section className=" flex flex-col py-[clamp(14px,1.9vw,28px)] px-[clamp(12px,1.6vw,24px)] bg-white dark:bg-my-blue  w-[19%] rounded-xl min-w-[230px] max-[850px]:min-w-full ">
      <article className=" flex gap-2 items-center pb-4 border-b border-b-[#E3E3E3] dark:border-b-grey">
        <Coins />

        <h2 className=" text-[#121212] dark:text-white text-[clamp(13px,1vw,16px)] font-medium">
          Activity Charts
        </h2>
      </article>

      <section className=" flex flex-col    max-[882px]:flex-col">
        <figure className=" flex flex-col gap-[10px] pt-4">
          <h4 className=" text-grey text-[14px] font-medium">Per Week</h4>
          <TopBarChart
            barData={[25, 20, 60, 30, 35, 10, 47]}
            color={[
              "#876AFE",
              "#FFBC02",
              "#876AFE",
              "#FFBC02",
              "#876AFE",
              "#FFBC02",
              "#876AFE",
            ]}
            empty={["", "", "", "", "", "", ""]}
          />
        </figure>

        <section className=" flex-col flex ">
          <figure className=" flex flex-col gap-[10px] ">
            <h4 className=" text-grey text-[14px] font-medium  ">Per Week</h4>
            <TopBarChart
              barData={[25, 20, 60, 30, 35, 10, 47, 20, 50, 70]}
              color={[
                "#876AFE",
                "#FFBC02",
                "#876AFE",
                "#FFBC02",
                "#876AFE",
                "#FFBC02",
                "#876AFE",
                "#FFBC02",
                "#876AFE",
                "#FFBC02",
              ]}
              empty={["", "", "", "", "", "", "", "", "", ""]}
            />
          </figure>

          <article className=" flex flex-col gap-[14px]  ">
            <div className=" justify-between flex">
              <p className=" text-[#A8A8A8] text-[14px] font-normal ">
                View Per Quarter
              </p>
              <ArrowDown2
                color={resolvedTheme === "light" ? "#121212" : "white"}
                size={20}
                className=" cursor-pointer"
              />
            </div>

            <div className=" justify-between flex">
              <p className="text-[#A8A8A8] text-[14px] font-normal">
                View Per Quarter
              </p>
              <ArrowDown2
                color={resolvedTheme === "light" ? "#121212" : "white"}
                size={20}
                className=" cursor-pointer"
              />
            </div>
          </article>
        </section>
      </section>
    </section>
  );
};
