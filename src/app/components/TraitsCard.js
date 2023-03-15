/** @format */

"use client"
import Card from "react-bootstrap/Card";
import DATA from "../../../TraitsData.json";
import styles from "./TraitsCard.module.css";

function TraitsCard({ toggleTrait }) {
	console.log(toggleTrait)
	const catagoryText =
		DATA[toggleTrait].catagoryText;
	const catagoryLink =
		DATA[toggleTrait].catagoryLink;

	return (
		<Card
			className={styles.traitsCard}>
			<Card.Body>
				<Card.Text>
					{catagoryText}
					<span>
						<Card.Link>
							{catagoryLink}
						</Card.Link>
					</span>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default TraitsCard;
