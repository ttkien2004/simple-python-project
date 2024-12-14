import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Student() {
  const data = [
    { name: "Anom", gender: "Male", faculty: "CS" },
    { name: "Megha", gender: "Female", faculty: "CS" },
    { name: "Subham", gender: "Male", faculty: "CS" },
  ];
  const [student, setStudent] = useState<any[]>([]);
  const handleDelete = async (id: any) => {
    try {
      await axios.delete("http://localhost:3000/student/" + id);
      window.location.reload();
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className=" border border-red-500 bg-blue-400 flex flex-col items-center">
      <div className="bg-gray-300 rounded-xl flex justify-center w-52 text-xl font-bold">
        Student Table
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Sex</th>
              <th>Faculty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((val, key) => (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.sex}</td>
                <td>{val.faculty}</td>
                <td>
                  <Link
                    to={`/component/update/${val.ID}`}
                    className="btn btn-update"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={(e) => handleDelete(val.ID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/create" className="btn">
          Add +
        </Link>
      </div>
    </div>
  );
}
