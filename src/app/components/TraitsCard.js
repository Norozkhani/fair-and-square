/** @format */

"use client"
import Card from "react-bootstrap/Card";
import DATA from "../../../TraitsData.json";
import styles from "./TraitsCard.module.css";

function TraitsCard({ toggleTrait }) {
	console.log(toggleTrait)
	const someText =
		DATA[toggleTrait].someText;
	const moreInfo =
		DATA[toggleTrait].moreInfo;

	return (
		<Card
			className={styles.traitsCard}>
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
