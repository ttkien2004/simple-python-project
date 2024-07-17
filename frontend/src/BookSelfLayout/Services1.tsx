import React from "react";
import Bookshelf from "../assets/BookShelf.jpg";

export default function Services() {
  return (
    <div className="service1">
      <h1 className="service1-absolute">OUR SERVICES</h1>
      <img src={Bookshelf}></img>
      <div className="service1-absolute service1-p">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis,
        </p>
        <p>
          pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut elit tellus, luctus nec
        </p>
        <p>ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <div className="service1-absolute service1-button">
        <button>READ MORE</button>
      </div>
    </div>
  );
}
