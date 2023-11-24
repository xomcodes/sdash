import React from "react";
import { CardsStatiscs } from "./cards-statiscs";
import { TransactionDetails } from "./transaction-details";
import { QuickTransfer } from "./quick-transfer";
import { ActivityChart } from "./activity-chart";
import { ActivityTable } from "./activity-table";

export const DashboardMain = () => {
  return (
    <main className=" flex bg-[#F6F6F6] p-[32px] gap-[clamp(8px,0.8vw,12px)] flex-col  flex-1 ">
      <section className=" flex gap-[clamp(13px,2.5vw,36px)]">
        <div className=" flex flex-col flex-1">
          <CardsStatiscs />
        </div>

        <div className=" flex  flex-col w-[40%] gap-[clamp(12px,1.7vw,24px)] ">
          <TransactionDetails />
          <QuickTransfer />
        </div>
      </section>
      {/* dark:bg-[#111C44] Dashboardmain */}

      <div className=" flex gap-[clamp(12px,1.6vw,24px)] ">
        <ActivityChart />
        <ActivityTable />
      </div>
    </main>
  );
};
