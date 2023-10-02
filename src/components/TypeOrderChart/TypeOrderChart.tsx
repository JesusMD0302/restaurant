import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ["Dine In", "To Go", "Delivery"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [29, 30, 50],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 206, 86)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 206, 86)",
      ],
      borderWidth: 1,
    },
  ],
};

export function TypeOrderChart() {
  return (
    <Doughnut
      data={data}
      options={{
        aspectRatio: 2,
        plugins: {
          legend: {
            position: "right",
            fullSize: true,
          },
        },
      }}
      style={{ maxHeight: "100%" }}
    />
  );
}
