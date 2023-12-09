import React from "react";

import { Line } from "react-chartjs-2";
import { Chart as chartjs, scales } from "chart.js/auto";

function LineChart({ userData }) {
  const options = {
    // indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount Sold",
        //   color: "191919",
        },
        ticks: {
          color: "#969696",
        },
      },

      x: {
        title: {
          display: true,
          text: "(Initial Quanity) Products", // Y-axis label
        //   color: "191919",
          font: {
            // weight: "bold",
            size: 14,
          },
        },
        ticks: {
          color: "#969696",
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      tooltip: {
        bodyFont: { weight: "bold" }, // Set the font weight for tooltip labels if needed
      },
      legend: {
        display: false,
      },
    },
  };

  return <Line data={userData} options={options} />;
}

export default LineChart;
