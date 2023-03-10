const options = {
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Trait",
		},
	},
	elements: {
		bar: {
			backgroundColor: [
				"#3A1078",
				"#4E31AA",
				"#2F58CD",
				"#3795BD",
				"#307383",
				"#4DB892",
			],

		},
	},
	scales: {
		y: {
			beginAtZero: true,
		},
	},
};

export default options;
