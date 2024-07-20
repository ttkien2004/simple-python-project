import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DisplayBooks() {
  const [shelfBook, setShelfBook] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setShelfBook(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <div className="border border-yellow-500 mb-10 grid grid-cols-4">
        {/* <div>All</div>
      <div>Best Seller</div>
      <div>Fantasy</div>       */}
        {shelfBook.map((book, index) => (
          <div key={index} className="border border-pink-900">
            {book.title}
          </div>
        ))}
      </div>
    </div>
  );
}
