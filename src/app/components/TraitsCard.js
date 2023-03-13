/** @format */

import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import DATA from "../../../TraitsData.json";

function TextExample({ xyz }) {
	const someText = DATA[xyz].someText;
	const moreInfo = DATA[xyz].moreInfo;
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

export default TextExample;
