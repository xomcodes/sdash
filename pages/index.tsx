import { Inter } from "next/font/google";
import { Wrapper } from "@/layout";
import { DashboardSetup } from "@/dashboard-setup";
import { DashboardMain } from "@/dashboard-main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Wrapper>
      {/* <DashboardSetup /> */}
      <DashboardMain />
    </Wrapper>
    // <main className="grid grid-cols-[220px,1fr] h-screen overflow-auto">
    //   <SideBar />
    //   <div className=" flex flex-col">
    //     <Header />
    //     <DashboardSetup />
    //   </div>
    // </main>
  );
}
