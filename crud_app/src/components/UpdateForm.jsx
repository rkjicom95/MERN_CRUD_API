import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios"
import {useParams, useNavigate} from 'react-router-dom'

const UpdateForm = () => {
    const [userList, setUserList] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    const handleListData = async()=>{
        const {data} = await axios.get(`http://localhost:8080/api/user-list/${id}`)
        setUserList(data)
    }

    useEffect(()=>{
        handleListData()
    },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserList((preventData) => ({
      ...preventData,
      [name]: value,
    }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const res = await axios.put(`http://localhost:8080/api/user-update/${id}`,userList)
    if(res.status === (200)){
        navigate('/')
        setUserList({
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
      <div className="main-form1">
        <h1 className="form-heading">Please Fill Up Form</h1>
        <form className="form">
        <div className="mb-3">
          </div>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input
              value={userList?.fname}
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
              value={userList?.lname}
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
              value={userList?.email}
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
              value={userList?.username}
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
              value={userList?.age}
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
              value={userList?.salary}
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
    </>
  );


};

export default UpdateForm;
