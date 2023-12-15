import React, { useState } from "react";
import "../App.css";
import axios from "axios"
import UserTable from "./UserTable";

const Form = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    age: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preventData) => ({
      ...preventData,
      [name]: value,
    }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const res = await axios.post('http://localhost:8080/api/create-user',data)
    if(res.status === (200)){
        setData({
            fname: "",
            lname: "",
            email: "",
            username: "",
            age: "",
            salary: ""
        })
    }
  };

  return (
    <>
      <div className="main-form">
        <div className="main-form-list">
        <h1 className="form-heading">Please Fill Up Form</h1>
        <form className="form">
        <div className="mb-3">
          </div>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input
              value={data?.fname}
              name="fname"
              onChange={handleChange}
              type="text"
              className="form-control"
              id="fname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              value={data?.lname}
              name="lname"
              onChange={handleChange}
              type="text"
              className="form-control"
              id="lname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              value={data?.email}
              type="email"
              onChange={handleChange}
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              User Name
            </label>
            <input
              value={data?.username}
              name="username"
              onChange={handleChange}
              type="text"
              className="form-control"
              id="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              value={data?.age}
              name="age"
              onChange={handleChange}
              type="number"
              className="form-control"
              id="age"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Salary
            </label>
            <input
              value={data?.salary}
              name="salary"
              onChange={handleChange}
              type="number"
              className="form-control"
              id="salary"
            />
          </div>
          <button type="type" onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
        <UserTable/>
      </div>
    </>
  );


};

export default Form;
