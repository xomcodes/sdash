import { Text } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import React from "react";
import { IoMdSquare } from "react-icons/io";
import { SalaryAreaChart } from "./salary-area-chart";

export const DashboardChartSetup = () => {
  return (
    <main className=" flex flex-col  gap-[18px]">
      <section className=" flex  items-center justify-between">
        <div className="flex items-center  gap-4">
          <span className="flex items-center gap-3">
            <Text className="text-[#444] dark:text-white text-[clamp(12px,1vw,16px)]">
              Salary
            </Text>
            <IoMdSquare size={24} color="#876AFE" />
          </span>
          <span className="flex  items-center gap-3">
            <Text className="text-[#444] dark:text-white text-[clamp(12px,1vw,16px)]">
              Cash bond
            </Text>
            <IoMdSquare size={24} color="#FFBC02" />
          </span>
        </div>
        <div className="flex  items-center gap-2">
          <Text className="text-[#A8A8A8]  text-xs font-normal">From:</Text>
          <span className="flex items-center gap-2">
            <Text className="text-my-black  dark:text-white font-medium text-[clamp(10px,0.9vw,14px)]">
              20 June
            </Text>
            <ArrowDown2 size={14} className="cursor-pointer" />
          </span>
          <Text className="text-[#A8A8A8] text-xs font-normal">To:</Text>
          <span className="flex  items-center gap-2">
            <Text className="text-my-black  dark:text-white  text-sm font-medium text-[clamp(10px,0.9vw,14px)]">
              20 July
            </Text>
            <ArrowDown2 size={14} className="cursor-pointer" />
          </span>
        </div>
      </section>
      <SalaryAreaChart />
    </main>
  );
};
