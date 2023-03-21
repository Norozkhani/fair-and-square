/** @format */

import {
	Chart as ChartJS,
	LinearScale,
	BarElement,
	ArcElement,
	Tooltip,
	Title,
	Legend,
	CategoryScale,
} from "chart.js";

ChartJS.register(
	BarElement,
	ArcElement,
	Tooltip,
	LinearScale,
	Title,
	Legend,
	CategoryScale
);

import { Bar, Pie, getElementAtEvent } from "react-chartjs-2";
import DATA from "../../../DiagramData.json";
import options from "./Options";
import { config } from "./PieOptions";
import styles from "./chart.module.css";
import Toggle from "./Toggle";
import { useRef, useState } from "react";
function ChartBar({ toggleTrait, setToggleTrait }) {
	const[dataset, setDataset] = useState(0)

	const records = {
		datapoints: [[9, 5,2,6],[1, 5,0,0,0],[2, 5,3,5,7],[10, 5,1,2,3],[3, 5,1,3,6],[3, 5],[6, 5]],
	};
	
	const data = {
		labels: ["Pansexual", "Heterosexual",'Homoosexual', 'Asexual', 'Perfer not to say'],
		datasets: [
			{
				label: "Gender",
				data: records.datapoints[dataset],
				backgroundColor: [
					"rgba(255, 26, 104, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(0, 0, 0, 0.2)",
				],
				borderColor: [
					"rgba(255, 26, 104, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
					"rgba(0, 0, 0, 1)",
				],
				borderWidth: 1,
			},
		],
	};
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

	const chartRef = useRef();
	const clickHandler = (event) => {
		if (getElementAtEvent(chartRef.current, event).length > 0) {
			const dataPoint = getElementAtEvent(chartRef.current, event)[0].index
			setDataset(dataPoint)
		}
	};
	return (
		<>
			<div className="w-50 mx-auto my-auto">
				<div className="p-3">
					<h1>Statistics for company {toggleTrait}</h1>
				</div>

				<Toggle toggleTrait={toggleTrait} setToggleTrait={setToggleTrait} />
				{catagoryData.length >= 5 && (
					<div>
						<Bar
							onClick={clickHandler}
							className={`${styles.Chart}`}
							data={chartData}
							options={options}
							ref={chartRef}
						/>
						<Pie className={`${styles.Chart}`} data={data} options={config} />
					</div>
				)}
				{catagoryData.length < 5 && (
					<div className="text-center">
						<div>
							<Bar
								className={`${styles.Chart}`}
								data={notEnoughData}
								options={options}
							/>
						</div>
						<h4 className="">
							Not enough data was collected to display the results of{" "}
							{toggleTrait}.
						</h4>
						<p className="">
							to read more, <a href="">click here!</a>
						</p>
					</div>
				)}
			</div>
		</>
	);
}

export default ChartBar;
