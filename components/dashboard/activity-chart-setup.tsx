import React from "react";
import { Coins } from "../icons";

import { Divider } from "@mantine/core";
import dynamic from "next/dynamic";
import { ArrowDown2 } from "iconsax-react";

const TopBarChart = dynamic(() => import("../charts/top-bar-chart"), {
  ssr: false,
});
export const ActivityChart = () => {
  return (
    <section className=" flex flex-col py-[clamp(14px,1.9vw,28px)] px-[clamp(12px,1.6vw,24px)] bg-white dark:bg-my-blue  w-[19%] rounded-xl min-w-[230px] max-[850px]:min-w-ful ">
      <article className=" flex gap-2 items-center pb-4">
        <Coins />

        <h2 className=" text-[#121212] dark:text-white text-[clamp(13px,1vw,16px)] font-medium">
          Activity Charts
        </h2>
      </article>
      <Divider />
      <section className=" flex flex-col  max-[1370px]:flex-row max-[1370px]:justify-between  max-[882px]:flex-col">
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

        {/* <span className=" hidden  border-l max-[1370px]:flex"></span> */}

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
                color="#121212"
                size={20}
                className=" cursor-pointer"
              />
            </div>

            <div className=" justify-between flex">
              <p className="text-[#A8A8A8] text-[14px] font-normal">
                View Per Quarter
              </p>
              <ArrowDown2
                color="#121212"
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
