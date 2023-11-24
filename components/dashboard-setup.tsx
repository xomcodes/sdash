import React from "react";
import { TransactionCards } from "./transaction-cards";

export const DashboardSetup = () => {
  return (
    <main className=" flex bg-[#F6F6F6]   dark:bg-[#111C44] p-[32px] flex-col">
      <section className=" flex gap-[clamp(18px,2.5vw,36px)]">
        <div className=" flex flex-col gap-[clamp(19px,2.6vw,38px)] ">
          <TransactionCards />
        </div>
      </section>
    </main>
  );
};
