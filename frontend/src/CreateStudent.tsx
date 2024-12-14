import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateStudent() {
  const [student, setStudent] = useState<any>({
    id: "",
    name: "",
    gender: "",
    faculty: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //Create new student or POST
    axios
      .post("http://localhost:3000/create", {
        id: student.id,
        name: student.name,
        gender: student.gender,
        faculty: student.faculty,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="bg-blue-500 h-dvh flex justify-center items-center">
      <div className="bg-white w-80 h-80 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold text-3xl flex justify-center">
            Add student
          </h1>
          <div>
            <label className="label-element">ID</label>
            <input
              type="text"
              placeholder="Type ID"
              className="input-element"
              onChange={(e) => setStudent({ ...student, id: e.target.value })}
            ></input>
          </div>
          <div>
            <label className="label-element">Name</label>
            <input
              type="text"
              placeholder="Type name"
              className="input-element"
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
            ></input>
          </div>
          <div>
            <label className="label-element">Gender</label>
            <input
              type="text"
              placeholder="Type gender"
              className="input-element"
              onChange={(e) =>
                setStudent({ ...student, gender: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label className="label-element">Faculty</label>
            <input
              type="text"
              placeholder="Type faculty"
              className="input-element"
              onChange={(e) =>
                setStudent({ ...student, faculty: e.target.value })
              }
            ></input>
          </div>
          <button className="btn btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
