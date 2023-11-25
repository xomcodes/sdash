import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const WeekBarChart = () => {
  var options = {
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43, 10],
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27, 21],
      },
      // {
      //   name: "PRODUCT C",
      //   data: [11, 17, 15, 15, 21, 14, 44, 5, 10],
      // },
      // {
      //   name: "PRODUCT D",
      //   data: [21, 7, 25, 13, 22, 8],
      // },
    ],

    chart: {
      type: "bar",

      height: "100%",
      stacked: true,

      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
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

    plotOptions: {
      bar: {
        columnWidth: "50%",
        barHeight: "50%",
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      type: "number",
      categories: ["00", "04", "08", 12, 14, 16, 18],
      borderRadius: 10,

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      show: false,
      showAlways: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    legend: {
      position: "right",
      offsetY: 40,
      show: false,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,

      colors: ["#775FFC"],
    },
  };

  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    var chart = new ApexCharts(chartRef.current, options);
    chart.render();
  }, []);

  return <div ref={chartRef} />;
};

export default WeekBarChart;
