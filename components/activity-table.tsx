import React from "react";
import { Coins } from "./icons";
import { Divider } from "@mantine/core";
import Link from "next/link";

export const ActivityTable = () => {
  return (
    <section className=" py-[clamp(14px,1.9vw,28px)] px-[clamp(12px,1.6vw,24px)] bg-white flex-1 rounded-xl flex-col">
      <div className=" flex justify-between  pb-[12PX]">
        <article className=" flex gap-2">
          <Coins />
          <h2 className=" text-[#121212] dark:text-white text-[clamp(13px,1vw,16px)] font-medium">
            Total Points
          </h2>
        </article>

        <Link href="./" className=" text-purple text-[12px] font-medium ">
          View All
        </Link>
      </div>

      <Divider bg="#E3E3E3" />
      {/* ActivityChart */}
    </section>
  );
};
