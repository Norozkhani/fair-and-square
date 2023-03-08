import { useEffect } from "react";
import { Chart } from "chart.js";
import DATA from "../../../DiagramData.json";
function Example({toggleHandler}) {
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
						backgroundColor: ["rgb(109, 253, 181,0.5)","rgb(200, 253, 181,0.5)","rgb(150, 253, 181,0.5)","rgb(109, 300, 100,0.5)"],
						borderWidth: 1,
					},
				],
			},
		});
	}, [toggleHandler]);

	return (
		<>
			{/* Bar chart */}
			<h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">
				Bar Chart
			</h1>
			<div className="w-[1100px] h-screen flex mx-auto my-auto">
				<div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl">
					<canvas id="myChart"></canvas>
				</div>
			</div>
		</>
	);
}

export default Example;
