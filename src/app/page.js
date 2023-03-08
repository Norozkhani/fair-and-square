/** @format */

"use client";

import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./globals.css";
import { useEffect } from "react";
import BarChart from "./components/BarChart"
import Toggle from "./components/Toggle";
import { useState } from "react";

const inter = Inter({
	subsets: ["latin"],
});


export default function Home() {
  const [toggleHandler, setToggleHandler] = useState("gender")
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	return (
		<>
    <Toggle setToggleHandler={setToggleHandler}/>
    <BarChart toggleHandler={toggleHandler}/>

		</>
	);
}