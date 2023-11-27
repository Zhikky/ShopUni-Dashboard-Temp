import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart as chartjs, scales } from "chart.js/auto";

function BarChart({ userData }) {
  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount Sold",
        },
      },

      y: {
        title: {
          display: true,
          text: "(Initial Quanity) Products", // Y-axis label
          //   color: "white",
          font: {
            // weight: "bold",
            size: 14
          },
        },
        ticks: {
            font: {
                size: 12
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
