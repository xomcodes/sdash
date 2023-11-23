import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/layout/header";
import { DashboardSetup } from "@/dashboard-setup";
import { Wrapper } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Wrapper>
      <DashboardSetup />
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
