import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import dayjs from "dayjs";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function SalaryAreaChart() {
  const { data: salaryData } = useQuery({
    queryFn: () => builder.use().transactions.pay_logs(),
    queryKey: builder.transactions.pay_logs.get(),
    select: ({ data }) => data?.data,
  });
  console.log({ salaryData });

  const series = [
    {
      name: "Salary",
      data: salaryData?.map((item) => item?.salary_paid),
    },
    {
      name: "Cash Bond",
      data: salaryData?.map((item) => item?.cash_bond_bought),
    },
  ];
  const options: ApexOptions = {
    chart: {
      height: 270,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#876AFE", "#FFBC02"],
    },
    xaxis: {
      type: "datetime",
      categories: salaryData?.map((item) => dayjs(item?.date).format("D MMM")),
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#eceaf5", "transparent"],
        shadeIntensity: 0,
        type: "horizontal",
        stops: [0, 100, 100, 100],
      },
    },
    tooltip: {
      theme: "transparent",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 1440,
        options: {
          legend: {
            show: false,
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      {salaryData ? (
        <ApexCharts
          options={options}
          series={series as any}
          type="area"
          height={280}
        />
      ) : null}
    </div>
  );
}
