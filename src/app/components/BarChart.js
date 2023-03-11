/** @format */

import { useEffect } from "react";
import { Chart } from "chart.js";
import DATA from "../../../DiagramData.json";
import styles from "./chart.module.css";
import Toggle from "./Toggle";
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
	const amount = DATA[toggleTrait].map(
		(elem) => {
			return elem.amount;
		}
	);

	useEffect(() => {
		var ctx = document
			.getElementById("myChart")
			.getContext("2d");
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
	}, [toggleTrait]);

	return (
		<>
			{/* Bar chart */}
			<div className=" w-50 mx-auto my-auto">
				<h1 className="">Bar Chart</h1>
				<div>
					<Toggle
						setToggleTrait={
							setToggleTrait
						}
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

export default Example;
