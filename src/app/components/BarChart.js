/** @format */

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Legend,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  BarElement,
  PointElement,
  LinearScale,
  Title,
  Legend,
  CategoryScale
);

import { Bar } from "react-chartjs-2";
import { useState } from "react";
import DATA from "../../../DiagramData.json";
import options from "./Options";
import styles from "./chart.module.css";
import Toggle from "./Toggle";
import TraitsCard from "./TraitsCard";
function ChartBar() {
  const [toggleTrait, setToggleTrait] = useState("gender");
  const catagoryLabel = DATA[toggleTrait].map((elem) => {
    return elem.catagory;
  });
  const catagoryData = DATA[toggleTrait].map((elem) => {
    return elem.amount;
  });
  const chartData = {
    labels: catagoryLabel,
    datasets: [
      {
        data: catagoryData,
        borderWidth: 1,
        barThickness: 35,
        label: toggleTrait,
      },
    ],
  };
  const notEnoughData = {
    labels: catagoryLabel,
    datasets: [
      {
        data: NaN,
        borderWidth: 1,
        label: toggleTrait,
      },
    ],
  };
  return (
    <>
      <div className="w-50 mx-auto my-auto">
        <div>
          <h1>Bar Chart</h1>
        </div>

        <Toggle toggleTrait={toggleTrait} setToggleTrait={setToggleTrait} />
        {catagoryData.length >= 5 && (
          <Bar
            className={`${styles.Chart}`}
            data={chartData}
            options={options}
          />
        )}
        {catagoryData.length < 5 && (
          <div className="text-center">
            <Bar
              className={`${styles.Chart}`}
              data={notEnoughData}
              options={options}
            />
            <h4 className="">
              Not enough data was collected to display the results of{" "}
              {toggleTrait}.
            </h4>
            <p className="">
              to read more, <a href="">click here!</a>
            </p>
          </div>
        )}
        <TraitsCard xyz={toggleTrait} />
      </div>
    </>
  );
}

export default ChartBar;
