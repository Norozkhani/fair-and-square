/** @format */

"use client";
import { useState } from "react";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./globals.css";
import { useEffect } from "react";
import BarChart from "./components/BarChart";
import TraitsCard from "./components/TraitsCard";
import Toggle from "./components/Toggle";

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export default function Home() {
	const [toggleTrait, setToggleTrait] =
		useState("gender");
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	return (
		<>
		<div className="d-flex justify-content-center row">
			<BarChart
				toggleTrait={toggleTrait}
				setToggleTrait={setToggleTrait}
			/>
			<div className="">
			<TraitsCard
				toggleTrait={toggleTrait}
			/>
			</div>
			</div>
		</>
	);
}
