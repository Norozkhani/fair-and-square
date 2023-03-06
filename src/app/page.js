"use client"

import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./globals.css";
import { useEffect } from "react";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
	return (
	<>
   <div onClick={() => {
     console.log('yes')
   }} className="d-flex 
justify-content-center align-items-center">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
          </div>
        </div>
      </div>
    </div></>
	);
}
