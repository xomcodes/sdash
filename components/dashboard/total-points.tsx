import React from "react";
import Link from "next/link";
import { Coins } from "../icons";
import { TotalPointsTable } from "./total-points-table";

import { useIntl } from "react-intl";

export const TotalPoints = () => {
  const intl = useIntl();
  const totalPoints = intl.messages["page.home.hero.total.points"] as string;
  return (
    <section className=" py-[clamp(14px,1.9vw,28px)] px-[clamp(12px,1.6vw,24px)] bg-white dark:bg-my-blue flex-1 rounded-xl flex-col overflow-auto max-[1370px]:w-full">
      <div className=" flex justify-between  pb-[14px] border-b border-b-[#E3E3E3] dark:border-b-grey">
        <article className=" flex gap-2">
          <Coins />
          <h2 className=" text-my-black dark:text-white text-[clamp(13px,1vw,16px)] font-medium">
            {totalPoints}
          </h2>
        </article>

        <Link href="#" className=" text-purple text-[12px] font-medium ">
          View All
        </Link>
      </div>

      <div className="flex-1 overflow-auto pt-[14px]">
        <TotalPointsTable />
      </div>
    </section>
  );
};
