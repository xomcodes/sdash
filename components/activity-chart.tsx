import React from "react";
import { Coins } from "./icons";

import { Divider } from "@mantine/core";
import dynamic from "next/dynamic";
import { ArrowDown2 } from "iconsax-react";

const TopBarChart = dynamic(() => import("./charts/top-bar-chart"), {
  ssr: false,
});
export const ActivityChart = () => {
  return (
    // <section className=" py-[clamp(14px,1.9vw,28px)] px-[clamp(12px,1.6vw,24px)] bg-white dark:bg-my-blue  w-[20%] rounded-xl max-[1370px]:w-full ">
    //   <article className=" flex gap-2 ">
    //     <Coins />
    //     <h2 className=" text-[#121212] dark:text-white text-[clamp(13px,1vw,16px)] font-medium">
    //       Activity Charts
    //     </h2>
    //   </article>
    //   <Divider bg="#E3E3E3" />
    //   <section className=" flex flex-col gap-4 pt-3">
    //     <div className=" flex flex-col gap-2">
    //       <p>Per Week</p>

    //       <TopBarChart />

    //       <Divider />
    //     </div>
    //     <section className=" flex flex-col gap-[17px]">
    //       <div className=" flex flex-col gap-2">
    //         <p className="">Per Week</p>

    //         <TopBarChart />

    //         <Divider />
    //       </div>
    //       <article className=" flex flex-col gap-[14px]">
    //         <div className=" justify-between flex">
    //           <p className=" text-[#A8A8A8] text-[14px] font-normal">
    //             View Per Quarter
    //           </p>
    //           <ArrowDown2 color="#121212" size={20} />
    //         </div>
    //         <div className=" justify-between flex">
    //           <p className="text-[#A8A8A8] text-[14px] font-normal">
    //             View Per Quarter
    //           </p>
    //           <ArrowDown2 color="#121212" size={20} />
    //         </div>
    //       </article>
    //     </section>
    //   </section>
    // </section>

    <section className=" flex flex-col py-[clamp(14px,1.9vw,28px)] px-[clamp(12px,1.6vw,24px)] bg-white dark:bg-my-blue  w-[20%] rounded-xl max-[1370px]:w-full">
      <article className=" flex gap-2 items-center pb-4">
        <Coins />

        <h2 className=" text-[#121212] dark:text-white text-[clamp(13px,1vw,16px)] font-medium">
          Activity Charts
        </h2>
      </article>
      <Divider />
      <figure className=" flex flex-col gap-[10px] pt-4">
        <h4 className=" text-grey text-[14px] font-medium">Per Week</h4>
        <TopBarChart />
      </figure>
      {/* <Divider /> */}

      <section className=" flex-col flex ">
        <figure className=" flex flex-col gap-[10px] ">
          <h4 className=" text-grey text-[14px] font-medium ">Per Week</h4>
          <TopBarChart />
        </figure>

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
  );
};
