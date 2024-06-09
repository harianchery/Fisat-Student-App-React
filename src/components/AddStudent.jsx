import React, { useState } from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
    const[student,changeStudent]=useState(
        {
            "fname":"",
            "lname":"",
            "college":"",
            "dob":"",
            "mobile":"",
            "course":"",
            "email":"",
            "address":""
            
        }
    )
    const InputHandler=(event)=>{
        changeStudent({...student,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(student)
    }
    
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h2 align="center" ><b>WELCOME TO FISAT</b></h2>
                    <br></br>
                    <h3 align="center"><b>Please Enter your Details</b></h3>
                    <br></br>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">First Name</label>
                            <input type="text" className="form-control" name='fname' value={student.fname} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Last Name</label>
                            <input type="text" className="form-control" name='lname' value={student.lname} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control" name='college' value={student.college} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Date Of Birth</label>
                            <input type="date" name="dob" id="" className="form-control" value={student.dob} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Mobile</label>
                            <input type="text" className="form-control" name='mobile' value={student.mobile} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course</label>
                            <select name="course" id="" className="form-control" value={student.course} onChange={InputHandler}>
                                <option value="B-TECH">B-TECH</option>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                                <option value="M-TECH">M-TECH</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" id="" className="form-control" value={student.email} onChange={InputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea name="address" id="" className="form-control" value={student.address} onChange={InputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent