import React,{useEffect, useState} from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import {Link} from 'react-router-dom'


const UserTable = () => {

    const [userData, setUserData] = useState([])
    const [deleteData, useDeleteData] = useState(false)

    const handleDelete = async(id)=>{
        const res = await axios.delete(`http://localhost:8080/api/user-delete/${id}`)
        if(res.status===200){
            useDeleteData(true)
        }
    }

    const getUserList = async()=>{
        const res = await axios.get('http://localhost:8080/api/user-list')
        if(res.status===200){
            setUserData(res?.data)
        }
    }

    useEffect(()=>{
        getUserList()
    },[deleteData])

  return (
    <>
      <div className="main-table">
        <h1 className="form-heading">User Details</h1>
        <table className="table">
          <thead >
            <tr>
            <th scope="col">Id</th>
              <th scope="col">Firs tName</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">User Name</th>
              <th scope="col">Age</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {                
                userData && userData?.map((item,i)=>(
                    <tr>
              <th scope="row">{i+1}</th>
              <td>{item?.fname}</td>
              <td>{item?.lname}</td>
              <td>{item?.email}</td>
              <td>{item?.username}</td>
              <td>{item?.age}</td>
              <td>{item?.salary}</td>
              <td>
                <Link to={`/edit-form/${item?._id}`}>
                <MdEdit size={22}/>
                </Link>
              </td>
              <td><MdDelete onClick={()=>handleDelete(item?._id)} size={22}/></td>
            </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
