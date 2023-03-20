/** @format */

"use client";
import DATA from "../../../TraitsData.json";
import styles from "./TraitsCard.module.css";

function TraitsCard({ toggleTrait }) {
	const catagoryText = DATA[toggleTrait].catagoryText;
	const catagoryLink = DATA[toggleTrait].catagoryLink;

	return (
		<div className={`${styles.traitsCard} col-xs-1 text-center p-4 `}>
			{catagoryText}
			<span>
				<a className={styles.link} href={catagoryLink}>Click here</a>
			</span>
		</div>
	);
}

export default TraitsCard;
