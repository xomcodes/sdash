import { ArrowDown2, Profile2User } from "iconsax-react";
import React from "react";
import { IssuedCard, TransactionIcon } from "../icons";
import clsx from "clsx";
import { RiArrowUpSFill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";

import { amountFormatter } from "@/utils";

const iconList = [
  <Profile2User color="#2F70F2" />,

  <TransactionIcon />,

  <IssuedCard />,
];

const textColor = ["#2F70F2", "#876AFE ", "#FFBC02"];

export const CardsStatiscs = () => {
  const { data: cardData } = useQuery({
    queryFn: () => builder.use().transactions.overview(),
    queryKey: builder.transactions.overview.get(),
    select: ({ data }) => data?.data,
  });

  return (
    <main className="grid grid-cols-[repeat(3,1fr)] gap-[clamp(10px,1.7vw,24px)] overflow-x-auto ">
      {cardData?.map(({ name, current, last_month }, idx) => (
        <section
          key={idx}
          className="p-[clamp(16px,1.3vw,20px)] flex flex-col gap-[clamp(10px,0.9vw,14px)] bg-white dark:bg-my-blue rounded-lg  w-full min-w-[232px] "
        >
          <article className=" flex gap-2">
            <span key={idx}>{iconList[idx]}</span>

            <h4
              style={{
                color: textColor[idx],
              }}
              className="text-[clamp(10px,1vw,16px)] font-medium"
            >
              {name?.replace("_", " ")}
            </h4>
          </article>

          <div className=" flex gap-[6px] items-center">
            <h3 className="text-my-black dark:text-white  font-semibold text-[clamp(12px,1.9vw,28px)] whitespace-nowrap">
              ${amountFormatter(current)}
            </h3>
            <article className="flex gap-[2px] items-center">
              <ArrowDown2
                variant="Bold"
                color={
                  (current - (last_month / last_month) * 100)?.toString() < "50"
                    ? "#D62C2C"
                    : "#4EEA7A"
                }
                size="24"
                className={clsx(
                  (current - (last_month / last_month) * 100)?.toString() > "50"
                    ? "rotate-180"
                    : null
                )}
              />
              <p
                className=" text-[clamp(13px,1vw,16px)] font-normal"
                style={{
                  color:
                    (current - (last_month / last_month) * 100)?.toString() <
                    "50"
                      ? "#D62C2C"
                      : "#4EEA7",
                }}
              >
                {(current - (last_month / last_month) * 100)
                  ?.toString()
                  ?.slice(0, 2) + "%"}
              </p>
            </article>
          </div>
        </section>
      ))}
    </main>
  );
};
