import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    await axios
      .get("http://localhost:8080/api/v1/employee/all-employees")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((e) => {
        console.log("error here : " + e);
      });
  };

  const deleteEmployee = async (id) => {
    await axios
      .delete(`http://localhost:8080/api/v1/employee/delete-employee/${id}`)
      .then(() => {
        loadEmployees();
      });
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Lastname</th>
              <th scope="col">Firstname</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <th scope="row"> {index + 1} </th>
                <td>{employee.lastname}</td>
                <td>{employee.firstname}</td>
                <td>@{employee.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/view-employee/${employee.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edit-employee/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
