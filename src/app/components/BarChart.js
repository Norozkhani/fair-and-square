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

	LinearScale,
	Title,
	Legend,
	CategoryScale
);

import { Bar, Pie } from "react-chartjs-2";
import DATA from "../../../DiagramData.json";
import options from "./Options";
import {data, config} from "./PieOptions";
import styles from "./chart.module.css";
import Toggle from "./Toggle";
function ChartBar({ toggleTrait, setToggleTrait }) {
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

console.log(config)
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
							className={`${styles.Chart}`}
							data={chartData}
							options={options}
						/>
						<Pie
							className={`${styles.Chart}`}
							data={data}
							options={config}
						/>
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
