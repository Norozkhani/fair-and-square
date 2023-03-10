/** @format */

"use client";

import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./globals.css";
import { useEffect } from "react";
import BarChart from "./components/BarChart";
import Sidebar from "./components/Sidebar";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <BarChart />
    </>
  );
}
