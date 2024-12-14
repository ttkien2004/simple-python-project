import React, { useEffect, useState } from "react";
import axios from "axios";
import img1 from "../assets/Books/Book1.png";
import img2 from "../assets/Books/Book2.png";
import img3 from "../assets/Books/Book3.png";
import img4 from "../assets/Books/Book4.png";
import img5 from "../assets/Books/Book5.png";
import img6 from "../assets/Books/Book6.png";
import img7 from "../assets/Books/Book7.png";
import img8 from "../assets/Books/Book8.png";
import img9 from "../assets/Books/Book8.png";

export default function DisplayBooks() {
  const [shelfBook, setShelfBook] = useState<any[]>([]);
  const [shelf, setShelf] = useState<string>("All");
  const [buttonSelected, setButtonSelected] = useState<number>(0);
  const button = [
    {
      name: "All",
      api: "All",
    },
    {
      name: "Best Seller",
      api: "BestSeller",
    },
    {
      name: "Fantasy",
      api: "Fantasy",
    },
  ];
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  useEffect(() => {
    axios
      .get("http://localhost:3000/" + shelf)
      .then((res) => {
        setShelfBook(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [shelf]);
  return (
    <div>
      <div className="button-container">
        {button.map((btn, index) => (
          <button
            key={index}
            onClick={() => {
              setShelf(btn.api), setButtonSelected(index);
            }}
            className={
              buttonSelected === index ? "button-not-hover" : "button-hover"
            }
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div className="mb-10 grid grid-cols-4">
        {shelfBook.map((book, index) => (
          <div key={index} className="cursor-pointer mt-5">
            <div className="flex justify-center">
              <img
                src={images[index]}
                className="BookImage"
                alt="BookImage"
              ></img>
            </div>
            <div className="flex justify-center font-bold text-lg mt-1">
              {book.title}
            </div>
            <div className="flex justify-center text-sm mt-1">{`$${book.cost}`}</div>
            <div className="flex justify-center text-sm mt-1">{`Review: ${book.review} stars`}</div>
            <div className="flex justify-center mt-2">
              <button className="bg-[#c24b3a] text-[12px] text-white hover:bg-gray-500 pl-4 pr-4 pt-2 pb-2 rounded-3xl">
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
