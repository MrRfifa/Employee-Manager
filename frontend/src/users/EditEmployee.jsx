import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEmployee() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    loadEmployee();
  },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8080/api/v1/employee/edit-employee/${id}`, {
        firstname,
        lastname,
        email,
      })
      .then(navigate("/"))
      .catch((e) => {
        console.log("error here ", e);
      });
  };
  const loadEmployee = async () => {
    await axios
      .get(`http://localhost:8080/api/v1/employee/get-employee/${id}`)
      .then((res) => {
        setLastname(res.data.lastname);
        setFirstname(res.data.firstname);
        setEmail(res.data.email);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Lastname
              </label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                placeholder="Enter Lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required={true}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                Firstname
              </label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                placeholder="Enter Firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required={true}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </div>
            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
            <Link
              to={"/"}
              type="submit"
              className="btn btn-outline-danger mx-2"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
