import React from "react";
import TempiLogo from "../assets/tempi.png";
import "../index.css";

export default function Header() {
  return (
    <div className="header">
      <div>
        <img src={TempiLogo} alt="Logo" className="Logo"></img>
      </div>
      <div className="right-header">
        <div className="right-content">Trang chủ</div>
        <div className="right-content">About us</div>
        <div className="right-content">Contact us</div>
      </div>
    </div>
  );
}
