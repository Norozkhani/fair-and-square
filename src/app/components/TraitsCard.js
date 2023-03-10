/** @format */

"use client";
import React from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Toggle from "./Toggle";

function TextExample() {
	return (
		<Card style={{ width: "43rem" }}>
			<Card.Body>
				<Card.Title>Traits</Card.Title>
				<Card.Text>
					Some quick example text to
					build on the card title and
					make up the bulk of the card's
					content. To learn more :
					<span>
						<Card.Link href="#">
							Click Here
						</Card.Link>
					</span>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default TextExample;
