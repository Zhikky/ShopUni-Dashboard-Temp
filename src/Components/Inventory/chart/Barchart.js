import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart as chartjs, scales } from "chart.js/auto";

function BarChart({ userData }) {
  const options = {
    // indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount Sold",
        },
      },

      x: {
        title: {
          display: true,
          text: "(Initial Quanity) Products", // Y-axis label
          //   color: "white",
          font: {
            weight: "bold",
            size: 16
          },
        },
        ticks: {
            font: {
                size: 14
            }
        }
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

  return <Bar data={userData} options={options} />;
}

export default BarChart;