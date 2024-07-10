import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const [student, setStudent] = useState<any>({
    name: "",
    gender: "",
    faculty: "",
  });
  const navigate = useNavigate();
  const { userID } = useParams();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    //Update information of student or PUT
    axios
      .put("http://localhost:3000/update/" + userID, {
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
            Update student
          </h1>
          <div>
            <label className="label-element">ID</label>
            <div className="ml-5">{userID}</div>
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
          <button className="btn btn-submit">Update</button>
        </form>
      </div>
    </div>
  );
}
