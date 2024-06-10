import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [student,changeStudent]=useState([])
    const fetchStudent=()=>{
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response)=>{
                changeStudent(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{
        (fetchStudent())
    },[])
       
    return (
        <div>
            <Navbar/>
            <h2 align="center"><b>Student Details</b></h2>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Sl No</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Course</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Mobile</th>
                    </tr>
                </thead>
               {
                student.map(
                    (value,index)=>{
                        return  <tbody>
                        <tr>
                            <td scope="row">{index}</td>
                            <td>{value.firstname}</td>
                            <td>{value.lastname}</td>
                            <td>{value.course}</td>
                            <td>{value.email}</td>
                            <td>{value.mobile}</td>
                            
                        </tr>
                        
                    </tbody>
                    }
                )
               }
            </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default View