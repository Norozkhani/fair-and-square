/** @format */

import Card from "react-bootstrap/Card";
import DATA from "../../../TraitsData.json";
import styles from "./TraitsCard.module.css";

function TraitsCard({ clickedTrait }) {
	const someText =
		DATA[clickedTrait].someText;
	const moreInfo =
		DATA[clickedTrait].moreInfo;
	console.log(someText);

	return (
		<Card className={styles.traitsCard}>
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
