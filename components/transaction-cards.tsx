import { ArrowUp2, Profile2User } from "iconsax-react";
import React from "react";
import { IssuedCard, TransactionIcon } from ".";

const cardList = [
  {
    icon: <Profile2User />,
    header: "Active Users",
    price: "14,7 M",
    dropIcon: <ArrowUp2 />,
    percentage: "32%",
  },
  {
    icon: <TransactionIcon />,
    header: "Transactions Users",
    price: "$ 1.234.10 M",
    dropIcon: <ArrowUp2 />,
    percentage: "32%",
  },
  {
    icon: <IssuedCard />,
    header: "Cards Issued ",
    price: "3.442 ",
    dropIcon: <ArrowUp2 />,
    percentage: "32%",
  },
];

export const TransactionCards = () => {
  return (
    <main className=" flex gap-[clamp(12px,1.7vw,24px)]">
      {cardList.map(({ icon, header, dropIcon, percentage, price }) => (
        <section
          key={header}
          className=" p-[clamp(16px,1.3vw,20px)] flex flex-col gap-[clamp(10px,0.9vw,14px)] bg-white rounded-lg  w-full"
        >
          <article className=" flex gap-2">
            {icon}
            <h4 className="text-[10px,1vw,16px] font-medium">{header}</h4>
          </article>
          <div className=" flex gap-[6px] items-center">
            <h3 className="text-[#121212] font-semibold text-[clamp(14px,1.9vw,28px)]">
              {price}
            </h3>
            <article className="flex gap-[2px] items-center">
              {dropIcon}
              <p>{percentage}</p>
            </article>
          </div>
        </section>
      ))}
    </main>
  );
};
