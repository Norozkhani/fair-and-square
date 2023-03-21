const records = {
	datapoints: [[3, 5],[3, 5],[2, 5],[1, 5],[3, 5],[3, 5],[6, 5]],
};

const data = {
	labels: ["Pansexual", "Straight"],
	datasets: [
		{
			label: "Gender",
			data: records.datapoints[2],
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

const config = {
	type: "pie",
	data,
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
};

export { data, config };
