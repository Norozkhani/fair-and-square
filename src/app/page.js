/** @format */

"use client";

import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./globals.css";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <></>;
}
