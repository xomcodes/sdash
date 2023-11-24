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
    c: "#4EEA7A",
  },
  {
    id: 2,
    icon: <TransactionIcon />,
    header: "Transactions Users",
    price: "$ 1.234.10 M",
    dropIcon: (
      <RiArrowUpSFill color="#D62C2C" size="24" className=" rotate-180" />
    ),
    percentage: "32%",
  },
  {
    id: 3,
    icon: <IssuedCard />,
    header: "Cards Issued ",
    price: "3.442 ",
    dropIcon: <RiArrowUpSFill color="#4EEA7A" size="24" />,
    percentage: "32%",
  },
];
export const CardsStatiscs = () => {
  return (
    <main className="grid grid-cols-[repeat(3,1fr)] gap-[clamp(12px,1.7vw,24px)]">
      {cardList.map(({ icon, header, dropIcon, percentage, price, c, id }) => (
        <section
          key={id}
          className="p-[clamp(16px,1.3vw,20px)] flex flex-col gap-[clamp(10px,0.9vw,14px)] bg-white rounded-lg  w-full "
        >
          <article className=" flex gap-2">
            {icon}
            <h4 className="text-[clamp(10px,1vw,16px)] font-medium">
              {header}
            </h4>
          </article>
          <div className=" flex gap-[6px] items-center">
            <h3 className="text-[#121212] font-semibold text-[clamp(14px,1.9vw,28px)]">
              {price}
            </h3>
            <article className={clsx(c, "flex gap-[2px] items-center")}>
              {dropIcon}
              <p className=" text-[clamp(13px,1vw,16px)] font-normal">
                {percentage}
              </p>
            </article>
          </div>
        </section>
      ))}
    </main>
  );
};
