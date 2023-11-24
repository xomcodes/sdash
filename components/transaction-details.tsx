import React from "react";
import { Adobe, Cloud, Sportify, TransactionArrow, Upwork } from "./icons";
import { Divider } from "@mantine/core";

const transactionList = [
  {
    id: 1,
    icon: <Sportify />,
    header: "Spotify App",
    date: "June 19 2023 at 16.42",
  },

  {
    id: 2,
    icon: <Adobe />,
    header: "Adobe XD 2023",
    date: "June 12 2023 at 10.18",
  },
  {
    id: 3,
    icon: <Upwork />,
    header: "Upwork",
    date: "June 08 2023 at 23.05",
  },
  {
    id: 4,
    icon: <Cloud />,
    header: "Google Cloud",
    date: "June 02 2023 at 09.15",
  },
];

export const TransactionDetails = () => {
  return (
    <section className=" p-[20px] flex flex-col bg-white rounded-xl">
      <article className=" flex gap-2 pb-4">
        <TransactionArrow />
        <h2 className=" text-[#121212] text-[clamp(13px,1vw,16px)] font-medium">
          Transaction Details
        </h2>
      </article>
      <Divider bg="#E3E3E3" />

      {transactionList?.map(({ id, icon, header, date }) => (
        <section
          key={id}
          className=" flex flex-col gap-[clamp(15px,1.3vw,20px)] pt-4"
        >
          <div className=" flex justify-between">
            <section className=" flex gap-[12px]">
              {icon}
              <article className=" flex flex-col gap-[2px]">
                <h3 className=" text-[#121212] dark:text-white font-medium text-[12px] ">
                  {header}
                </h3>
                <p className=" text-[9px] text-grey font-normal ">{date}</p>
              </article>
            </section>
          </div>
        </section>
      ))}
    </section>
  );
};
