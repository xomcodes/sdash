import React from "react";
import { CardsStatiscs } from "./cards-statiscs";
import { TransactionDetails } from "./transaction-details";
import { QuickTransfer } from "./quick-transfer";
import { ActivityChart } from "./activity-chart-setup";
import { TotalPoints } from "./total-points";
import { DashboardChartSetup } from "./dashboard-chart-setup";

export const DashboardMain = () => {
  return (
    <main className=" flex bg-[#F6F6F6] dark:bg-[#0B1437] p-[32px] gap-[clamp(19px,2.6vw,38px)] flex-col h-full overflow-auto scroll-bar-hidden">
      <section className=" flex gap-[clamp(13px,2.5vw,36px)] max-[1450px]:flex-col ">
        <div className=" flex flex-col flex-1 gap-[clamp(19px,2.6vw,38px)]">
          <CardsStatiscs />
          <DashboardChartSetup />
        </div>

        <div className=" flex  flex-col w-[35%] gap-[clamp(12px,1.7vw,24px)]  max-[1450px]:w-full max-[1450px]:flex  max-[1450px]:flex-row  ">
          <TransactionDetails />
          <QuickTransfer />
        </div>
      </section>
      {/* dark:bg-[#111C44] Dashboardmain */}

      <div className=" flex gap-[clamp(12px,1.6vw,24px)] max-[1370px]:flex-col ">
        <ActivityChart />
        <TotalPoints />
      </div>
    </main>
  );
};
