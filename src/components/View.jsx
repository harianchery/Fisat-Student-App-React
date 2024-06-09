import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [student,changeStudent]=useState(
        [
            {
              "_id": "66651683741a512717d92b87",
              "firstname": "Manu",
              "lastname": "R",
              "college": "FISAT",
              "dob": "02/04/1999",
              "course": "B-Tech Comp Science",
              "mobile": "+91 95266 7443",
              "email": "aa@gmail.com",
              "address": "Kochi",
              "__v": 0
            },
            {
              "_id": "666516bc741a512717d92b88",
              "firstname": "Rahul",
              "lastname": "D",
              "college": "FISAT",
              "dob": "02/01/1992",
              "course": "MCA",
              "mobile": "+91 95266 74440",
              "email": "aa@gmail.com",
              "address": "Test Address",
              "__v": 0
            }
          ]
    )
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