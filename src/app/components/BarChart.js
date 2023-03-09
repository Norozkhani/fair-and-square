import { useEffect } from "react";
import { Chart } from "chart.js";
import DATA from "../../../DiagramData.json";
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
            borderColor: "rgb(109, 253, 181)",
            backgroundColor: ["#3A1078", "#4E31AA", "#2F58CD", "#3795BD"],
            borderWidth: 1,
          },
        ],
      },
    });
  }, [toggleHandler]);

  return (
    <>
      {/* Bar chart */}
      <h1 className="">Bar Chart</h1>
      <div className="">
        <div className="">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default Example;
