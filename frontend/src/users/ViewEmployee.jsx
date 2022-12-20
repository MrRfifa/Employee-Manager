import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployee() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  useEffect(() => {
    loadEmployee();
  });

  const loadEmployee = () => {
    axios.get(`http://localhost:8080/api/v1/employee/get-employee/${id}`).then(
        (res)=>{
            setLastname(res.data.lastname)
            setFirstname(res.data.firstname)
            setEmail(res.data.email)
        }
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>
          <div className="card">
            <div className="card-header">
              Details of employee id : {id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Firstname : {firstname}</b>
                </li>
                <li className="list-group-item">
                  <b>Lastname : {lastname} </b>
                </li>
                <li className="list-group-item">
                  <b>Email : {email}</b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
