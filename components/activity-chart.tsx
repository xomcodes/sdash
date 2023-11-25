import { Divider } from "@mantine/core";
import React from "react";
import { Coins } from "./icons";

import { ArrowDown2 } from "iconsax-react";
import dynamic from "next/dynamic";

const TopBarChart = dynamic(() => import("./top-bar-chart"), { ssr: false });
const WeekBarChart = dynamic(() => import("./week-bar-chart"), { ssr: false });
export const ActivityChart = () => {
  return (
    <section className=" py-[clamp(14px,1.9vw,28px)] px-[clamp(12px,1.6vw,24px)] bg-white dark:bg-my-blue  w-[35%] rounded-xl max-[1370px]:w-full ">
      <article className=" flex gap-2 ">
        <Coins />
        <h2 className=" text-[#121212] dark:text-white text-[clamp(13px,1vw,16px)] font-medium">
          Activity Charts
        </h2>
      </article>
      <Divider bg="#E3E3E3" />
      <section className=" flex flex-col gap-4 pt-4">
        <div className=" flex flex-col gap-2">
          <p>Per Week</p>
          {/* <WeekBarChart /> */}

          <TopBarChart />
          <Divider />
        </div>
        <section className=" flex flex-col gap-[17px]">
          <div className=" flex flex-col gap-2">
            <p>Per Week</p>
            {/* <WeekBarChart /> */}
            <TopBarChart />
            <Divider />
          </div>
          <article className=" flex flex-col gap-[14px]">
            <div className=" justify-between flex">
              <p className=" text-[#A8A8A8] text-[14px] font-normal">
                View Per Quarter
              </p>
              <ArrowDown2 color="#121212" size={20} />
            </div>
            <div className=" justify-between flex">
              <p className="text-[#A8A8A8] text-[14px] font-normal">
                View Per Quarter
              </p>
              <ArrowDown2 color="#121212" size={20} />
            </div>
          </article>
        </section>
      </section>
    </section>
  );
};
