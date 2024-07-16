import React from "react";
import TempiLogo from "../image/tempi.png";
import "../index.css";

export default function Header() {
  return (
    <div className="header">
      <div className="">
        <img src={TempiLogo} alt="Logo" className="Logo"></img>
      </div>
      <div className="border border-red-500 grid grid-cols-3">
        <div>Trang chủ</div>
        <div>About us</div>
        <div>Contact us</div>
      </div>
    </div>
  );
}
