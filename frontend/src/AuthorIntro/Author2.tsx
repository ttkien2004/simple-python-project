import React from "react";
import AuthorLayout from "../assets/AuthorIntro/background2.png";
import Author from "../assets/AuthorIntro/author2.png";

export default function Author2() {
  return (
    <div className="Author2-intro">
      <div className="absolute top-0 left-0 mt-16 ml-10">
        <div className="AuthorLayout2">
          <img src={AuthorLayout}></img>
        </div>
        <div className="Author2">
          <img src={Author}></img>
        </div>
      </div>

      <div className="absolute top-[30%] right-0 pr-10">
        <h1 className="text-[#999999] text-sm">AUTOBIOGRAPHY</h1>
        <h1 className="text-3xl mt-1 mb-5">Travelogue of the year</h1>
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
    </div>
  );
}
