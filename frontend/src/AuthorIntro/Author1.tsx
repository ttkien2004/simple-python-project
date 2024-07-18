import React from "react";
import Author from "../assets/AuthorIntro/author1.png";
import Layout from "../assets/AuthorIntro/background1.png";
import AuthorLayout from "../assets/AuthorIntro/AuthorLayout1.png";
import MainBackground from "../assets/AuthorIntro/MainBackground.jpg";

export default function Author1() {
  return (
    <div className="Author1-intro">
      <img src={MainBackground}></img>
      <div className="absolute top-[30%] pl-10">
        <h1 className="text-[#999999] text-sm">AUTOBIOGRAPHY</h1>
        <h1 className="text-3xl mt-1 mb-5">This month's guest host</h1>
        <div className="text-[#5b5956] text-[14px] mb-14">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper
          </p>
          <p>mattis, pulvinar dapibus leo.</p>
        </div>
        <button className="border border-black pt-3 pb-3 pr-9 pl-9">
          READ MORE
        </button>
      </div>
      <div className="absolute top-0 right-0 mt-16">
        <div className="AuthorLayout1">
          <img src={AuthorLayout}></img>
        </div>
        <div className="Author1">
          <img src={Author}></img>
        </div>
      </div>
    </div>
  );
}
