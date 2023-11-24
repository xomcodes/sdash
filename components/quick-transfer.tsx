import { Divider } from "@mantine/core";
import { EmptyWallet } from "iconsax-react";
import React from "react";
import { MasterCard, Visa } from "./icons";

const transferList = [
  {
    id: 1,
    cards: <Visa />,
    debits: "3419 ",
  },
  {
    id: 2,
    cards: <MasterCard />,
    debits: "3419 ",
  },
  {
    id: 3,
    cards: <Visa />,
    debits: "3419 ",
  },
  {
    id: 4,
    cards: <MasterCard />,
    debits: "3419 ",
  },

  {
    id: 5,
    cards: <Visa />,
    debits: "3419 ",
  },
];

export const QuickTransfer = () => {
  return (
    <section className=" p-[20px] flex flex-col bg-white rounded-xl overflow-auto">
      <article className=" flex gap-2 pb-[12PX]">
        <EmptyWallet size="20" color="#121212" />
        <h2 className=" text-[#121212] dark:text-white text-[clamp(13px,1vw,16px)] font-medium">
          Quick Transfer
        </h2>
      </article>
      <Divider bg="#E3E3E3" />

      <section className=" pt-[12px] overflow-x-auto scroll-bar-hidden">
        <div className=" flex gap-[clamp(7px,1.4vw,14px)]">
          {transferList?.map(({ id, cards, debits }) => (
            <div
              key={id}
              className=" px-[clamp(10px,0.8vw,12px)] py-[clamp(6px,0.6vw,9px)] border border-[#DFDFDF] gap-[12px] flex rounded-[6px] items-center"
            >
              {cards}
              <article className=" flex flex-col">
                <p className=" text-[#121212] dark:text-white text-[clamp(7px,0.9vw,12px)] font-medium  whitespace-nowrap">
                  {debits}Debit
                </p>
                <p className="text-[#121212] dark:text-white text-[clamp(7px,0.9vw,12px)] font-medium">
                  Cards
                </p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
