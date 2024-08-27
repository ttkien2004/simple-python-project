import React, { FormEvent, useEffect } from "react";
import BookApi from "../services/book";
import { useNavigate, useParams } from "react-router-dom";
import { book } from "../types/bookTypes";

const BookUpdate = () => {
  let emptyBook: book = {
    _id: "",
    title: "",
    author: "",
  };
  const { id } = useParams();
  const [book, setBook] = React.useState<book>(emptyBook);
  const [newTitle, setNewTitle] = React.useState<string>("");
  const [newAuthor, setNewAuthor] = React.useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    BookApi.getOne(id as string)
      .then((res) => {
        setBook(res.data);
        setNewTitle(book.title);
        setNewAuthor(book.author);
      })
      .catch(() => {
        console.log("Can not get book");
      });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await BookApi.update(id as string, newTitle, newAuthor);
      if (response) {
        alert("Update successfully");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded shadow-sm shadow-slate-400 w-[300px] h-[400px] pl-10 mt-10 ml-10"
    >
      <h1>Update a book</h1>

      <div className="mt-10 mb-10">
        <label>Book title: </label>
        <input
          type="text"
          required
          placeholder="type title of book"
          className="border-2 border-black pl-2 pt-1 pb-1"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Book author: </label>
        <input
          type="text"
          required
          placeholder="type author of book"
          className="border-2 border-black pl-2 pt-1 pb-1"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        ></input>
      </div>

      <button className="bg-green-400 rounded pt-2 pb-2 pl-4 pr-4 font-bold mt-10">
        Update book
      </button>
    </form>
  );
};

export default BookUpdate;
