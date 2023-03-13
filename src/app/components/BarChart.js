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
function ChartBar() {
	const [toggleTrait, setToggleTrait] = useState("gender");
	const catagoryLabel = DATA[toggleTrait].map((elem) => {
import TraitsCard from "./TraitsCard";
import { useState } from "react";
function Example() {
	const [toggleTrait, setToggleTrait] =
		useState("gender");
	console.log(toggleTrait);
	const catagory = DATA[
		toggleTrait
	].map((elem) => {
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
	return (
		<>
			<div className="w-50 mx-auto my-auto">
				<div>
					<h1>Bar Chart</h1>
				</div>

				<Toggle toggleTrait={toggleTrait} setToggleTrait={setToggleTrait} />
				<div>
					<Bar
						className={`${styles.Chart}`}
						data={chartData}
						options={options}
					/>
					<canvas
						className={styles.Chart}
						id="myChart"></canvas>

					<TraitsCard
						xyz={toggleTrait}
					/>
				</div>
			</div>
		</>
	);
}

export default ChartBar;
