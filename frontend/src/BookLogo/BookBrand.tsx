import React from "react";
import logo3 from "../assets/icon/icon1.png";
import logo6 from "../assets/icon/icon2.png";
import logo2 from "../assets/icon/icon3.png";
import logo1 from "../assets/icon/icon4.png";
import logo4 from "../assets/icon/icon5.png";
import logo5 from "../assets/icon/icon6.png";

export default function Branches() {
  const book_logos = [
    {
      icon: logo1,
    },
    {
      icon: logo2,
    },
    {
      icon: logo3,
    },
    {
      icon: logo4,
    },
    {
      icon: logo5,
    },
    {
      icon: logo6,
    },
  ];
  return (
    <div className="brand-book">
      {book_logos.map((val, index) => (
        <div key={index} className="h-[100px] w-[120px] flex justify-center">
          <img src={val.icon} alt="Book-Logo"></img>
        </div>
      ))}
    </div>
  );
}
