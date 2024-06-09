import React, { useState } from 'react'

const Search = () => {
    const[student,changeStudent]=useState(
        {
            "name":""
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
        <h3 align="center"><b>Please enter the Student name to Search</b></h3>
        <div className="container">
            <div className="row g-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={student.name} onChange={InputHandler} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary" onClick={readValue}>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search