import { useState } from "react";
import DATA from "../../../DiagramData.json";

const Filter = () => {

	const [filter, setFilter] = useState("");
	const [item, setItem] = useState(null)

	
	const handler = (e) => {
			setFilter(e.target.innerHTML)
	}

	const checker = (item) => {
		if(item.gender[0].filter.includes(filter)){setItem(filter)}
		;
	};

	checker(DATA)
	return (
		<>
			<h1 onClick={handler}>christianity</h1>
		</>
	);
};

export default Filter;
