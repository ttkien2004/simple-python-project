import React from "react";
import library from "../assets/library.jpg";
import bodyLayout from "../assets/body_layout.png";
import Services from "../BookSelfLayout/Services1";
import Services2 from "../BookSelfLayout/Services2";
import Author1 from "../AuthorIntro/Author1";
import Author2 from "../AuthorIntro/Author2";
import Branches from "../BookLogo/BookBrand";

export default function Body() {
  return (
    <div className="body-part">
      <img src={bodyLayout}></img>
      <div className="body-content">
        <div className="text-[#999999]">IT'S CHAPTER ONE</div>
        <div className="text-[64px]">We Love Literature</div>
        <p className="text-[#5b5956] mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="bg-[#c24b3a] text-white pl-12 pr-12 pt-3 pb-3">
          READ MORE
        </button>
      </div>
    </div>
  );
}
