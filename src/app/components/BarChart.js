import { useEffect } from "react";
import { Chart } from "chart.js";
import DATA from "../../../DiagramData.json";
import styles from "./chart.module.css";
function Example({ toggleHandler }) {
  const catagory = DATA[toggleHandler].map((elem) => {
    return elem.catagory;
  });
  const amount = DATA[toggleHandler].map((elem) => {
    return elem.amount;
  });

  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: catagory,
        datasets: [
          {
            data: amount,
            label: catagory,
            backgroundColor: [
              "#3A1078",
              "#4E31AA",
              "#2F58CD",
              "#3795BD",
              "#307383",
              "#4DB892",
            ],
            borderWidth: 1,
            barThickness: 35,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, [toggleHandler]);

  return (
    <>
      {/* Bar chart */}
      <div className=" w-50 mx-auto my-auto">
        <h1 className="">Bar Chart</h1>
        <div>
          <canvas className={styles.Chart} id="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default Example;
