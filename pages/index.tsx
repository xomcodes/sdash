import { Inter } from "next/font/google";
import { Wrapper } from "@/layout";

import { DashboardMain } from "@/dashboard/dashboard-main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Wrapper>
      <DashboardMain />
    </Wrapper>
  );
}
