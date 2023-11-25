import React from "react";
import { Adobe, Cloud, Sportify, TransactionArrow, Upwork } from "./icons";
import { Divider } from "@mantine/core";
import { useTheme } from "next-themes";

const transactionList = [
  {
    id: 1,
    icon: <Sportify />,
    header: "Spotify App",
    date: "June 19 2023 at 16.42",
    amount: "-$12.7",
    color: "#D62C2C",
  },

  {
    id: 2,
    icon: <Adobe />,
    header: "Adobe XD 2023",
    date: "June 12 2023 at 10.18",
    amount: "-$20.74",
    color: "#D62C2C",
  },
  {
    id: 3,
    icon: <Upwork />,
    header: "Upwork",
    date: "June 08 2023 at 23.05",
    amount: "+$10.812.7",
    color: "#4EEA7A",
  },
  {
    id: 4,
    icon: <Cloud />,
    header: "Google Cloud",
    date: "June 02 2023 at 09.15",
    amount: "-$124.32",
    color: "#D62C2C",
  },
];

export const TransactionDetails = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <section className=" p-[20px] flex flex-col bg-white dark:bg-my-blue rounded-xl">
      <article className=" flex gap-2 pb-4 items-center">
        <TransactionArrow />
        <h2 className=" text-my-black dark:text-white text-[clamp(13px,1vw,16px)] font-medium">
          Transaction Details
        </h2>
      </article>
      <Divider bg="#E3E3E3" />

      {transactionList?.map(({ id, icon, header, date, amount, color }) => (
        <section
          key={id}
          className=" flex flex-col gap-[clamp(15px,1.3vw,20px)] pt-4"
        >
          <div className=" flex justify-between items-center">
            <section className=" flex gap-[12px]">
              {icon}
              <article className=" flex flex-col gap-[2px]">
                <h3 className=" text-[#121212] dark:text-white font-medium text-[12px] ">
                  {header}
                </h3>
                <p className=" text-[9px] text-grey font-normal ">{date}</p>
              </article>
            </section>
            <p
              className=" text-[10px] font-medium"
              style={{
                color: color,
              }}
            >
              {amount}
            </p>
          </div>
        </section>
      ))}
    </section>
  );
};
