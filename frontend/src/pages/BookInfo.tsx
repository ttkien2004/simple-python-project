import React, { FormEvent } from "react";
import BookApi from "../services/book";
import { useNavigate } from "react-router-dom";

const BookForm = () => {
  const [title, setTitle] = React.useState<string>("");
  const [author, setAuthor] = React.useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await BookApi.create(title, author);
      if (response) {
        console.log("Add a new book successfully");
        // alert("Add a new book successfully");
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
      <h1>Add a new book</h1>

      <div className="mt-10 mb-10">
        <label>Book title: </label>
        <input
          type="text"
          required
          placeholder="type title of book"
          className="border-2 border-black pl-2 pt-1 pb-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Book author: </label>
        <input
          type="text"
          required
          placeholder="type author of book"
          className="border-2 border-black pl-2 pt-1 pb-1"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
      </div>

      <button className="bg-green-400 rounded pt-2 pb-2 pl-4 pr-4 font-bold mt-10">
        Add book
      </button>
    </form>
  );
};

export default BookForm;
