import React, { useEffect, useState } from "react";
import { book } from "../types/bookTypes";
import BookApi from "../services/book";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = React.useState<book[]>([]);
  const [del, setDel] = useState<boolean>(false);

  useEffect(() => {
    BookApi.getAll()
      .then((res) => {
        // console.log(res?.data);
        setBooks((res?.data as book[]) ?? []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [del]);

  const handleDelete = async (id: string) => {
    try {
      const response = await BookApi.delete(id);
      if (response) {
        alert("Delete successfully");
        setDel(!del);
      }
    } catch {
      alert("Can not delete");
    }
  };
  return (
    <div className="pt-10 pl-10">
      {books.map((book, index) => (
        <div
          key={index}
          className="rounded-sm bg-white font-bold shadow-sm shadow-slate-500 w-[200px] h-[140px] mb-10 pt-5"
        >
          <div>
            <span>Title: {book.title}</span>
          </div>
          <div>
            <span>Author: {book.author}</span>
          </div>
          <button
            className="bg-red-500 w-14 h-8 text-white"
            onClick={() => handleDelete(book._id)}
          >
            Xóa
          </button>
          <Link
            className="bg-green-400 pl-3 pr-3 pt-[6px] pb-[6px] ml-2 text-white"
            to={`/UpdateBook/${book._id}`}
          >
            Sửa
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
