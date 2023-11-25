import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import { Bar } from "react-chartjs-2";

export default function TopBarChart() {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);
  const data = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "764",
        data: [55, 20, 35, 45, 35, 48],
        backgroundColor: "#876AFE",
        // borderWidth: 1,
        barPercentage: 0.3,
        categoryPercentage: 0.5,
        borderRadius: 20,
        width: 12,
      },
    ],
  };

  const options = {
    responsiveness: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        display: false,
      },
    },
  };

  // const config = {
  //   type: "bar",
  //   data: data,
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //         Ticks: false,
  //       },
  //     },
  //   },
  // };
  return (
    <div className="bar">
      <Bar data={data} options={options} />{" "}
    </div>
  );
}
