/** @format */

"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "/public/company-logo.svg";
import Image from "next/image";

function sideBar() {
  return (
    <>
      <div className="container-fluid position-absolute top-0 start-0">
        <div className="row">
          <div className="col-auto min-vh-100">
            <div>
              <Image
                src="/company-logo.svg"
                alt="Fair and scuare company logo"
                height="150"
                width="150"
              />
            </div>
            <a className="nav-link px-2 p-4 ">
              <i className="bi bi-grid-fill" />
              <span className="ms-1 d-none d-sm-inline">Dashboard</span>
            </a>
            <a className="nav-link px-2 p-4 ">
              <i className="bi bi-bar-chart-fill" />
              <span className="ms-1 d-none d-sm-inline">Statistics</span>
            </a>
            <a className="nav-link px-2 p-4 ">
              <i className="bi bi-people-fill" />
              <span className="ms-1 d-none d-sm-inline">Manage Team</span>
            </a>
            <a className="nav-link px-2 p-4 ">
              <i className="bi bi-envelope" />
              <span className="ms-1 d-none d-sm-inline">Inbox</span>
            </a>
            <a className="nav-link px-2 p-4 ">
              <i className="bi bi-gear-fill" />
              <span className="ms-1 d-none d-sm-inline">Settings</span>
            </a>

            <a className="nav-link px-2 p-4 bottom">
              <i className="bi bi-box-arrow-right" />
              <span className="ms-1 d-none d-sm-inline">LogOut</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default sideBar;
