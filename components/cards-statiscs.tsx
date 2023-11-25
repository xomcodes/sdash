import { ArrowUp2, Profile2User } from "iconsax-react";
import React from "react";
import { IssuedCard, TransactionIcon } from "./icons";
import clsx from "clsx";
import { RiArrowUpSFill } from "react-icons/ri";

const cardList = [
  {
    id: 1,
    icon: <Profile2User color="#2F70F2" />,
    header: "Active Users",
    price: "14,7 M",
    dropIcon: <RiArrowUpSFill color="#4EEA7A" size="24" />,
    percentage: "32%",
    color: "#2F70F2",
    dropcolor: "#4EEA7A",
  },
  {
    id: 2,
    icon: <TransactionIcon />,
    header: "Transactions Users",
    price: "$ 1.234.10",
    dropIcon: (
      <RiArrowUpSFill color="#D62C2C" size="24" className=" rotate-180" />
    ),
    percentage: "32%",
    color: "#876AFE",
    dropcolor: "#D62C2C",
  },
  {
    id: 3,
    icon: <IssuedCard />,
    header: "Cards Issued ",
    price: "3.442 ",
    dropIcon: <RiArrowUpSFill color="#4EEA7A" size="24" />,
    percentage: "32%",
    color: "#FFBC02",
    dropcolor: "#4EEA7A",
  },
];
export const CardsStatiscs = () => {
  return (
    <main className="grid grid-cols-[repeat(3,1fr)] gap-[clamp(10px,1.7vw,24px)] overflow-x-auto ">
      {cardList.map(
        ({
          icon,
          header,
          dropIcon,
          percentage,
          price,
          dropcolor,
          id,
          color,
        }) => (
          <section
            key={id}
            className="p-[clamp(16px,1.3vw,20px)] flex flex-col gap-[clamp(10px,0.9vw,14px)] bg-white rounded-lg  w-full min-w-[232px] "
          >
            <article className=" flex gap-2">
              {icon}
              <h4
                style={{
                  color: color,
                }}
                className="text-[clamp(10px,1vw,16px)] font-medium"
              >
                {header}
              </h4>
            </article>
            <div className=" flex gap-[6px] items-center">
              <h3 className="text-[#121212] font-semibold text-[clamp(12px,1.9vw,28px)] whitespace-nowrap">
                {price}
              </h3>
              <article
                className="flex gap-[2px] items-center"
                style={{
                  color: dropcolor,
                }}
              >
                {dropIcon}
                <p className=" text-[clamp(13px,1vw,16px)] font-normal">
                  {percentage}
                </p>
              </article>
            </div>
          </section>
        )
      )}
    </main>
  );
};
