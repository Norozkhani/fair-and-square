/** @format */

import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import DATA from "../../../TraitsData.json";

function TraitsCard({ clickedTrait }) {
	const someText =
		DATA[clickedTrait].someText;
	const moreInfo =
		DATA[clickedTrait].moreInfo;
	console.log(someText);

	return (
		<Card style={{ width: "43rem" }}>
			<Card.Body>
				<Card.Text>
					{someText}
					<span>
						<Card.Link>
							{moreInfo}
						</Card.Link>
					</span>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default TraitsCard;
