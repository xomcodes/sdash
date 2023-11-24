import { Divider } from "@mantine/core";
import React from "react";
import { Coins } from "./icons";

export const ActivityChart = () => {
  return (
    <section className=" py-[clamp(14px,1.9vw,28px)] px-[clamp(12px,1.6vw,24px)] bg-white  w-[35%] rounded-xl">
      <article className=" flex gap-2 pb-[12PX]">
        <Coins />
        <h2 className=" text-[#121212] dark:text-white text-[clamp(13px,1vw,16px)] font-medium">
          Activity Charts
        </h2>
      </article>
      <Divider bg="#E3E3E3" />
      {/* ActivityChart */}
    </section>
  );
};
