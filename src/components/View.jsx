import React from 'react'

const View = () => {
    return (
        <div>
            <h2 align="center"><b>Student Details</b></h2>
            <br></br>
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
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        
                    </tr>
                    <tr>
                        <td scope="row">2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        
                    </tr>
                    <tr>
                        <td scope="row">3</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td>Mark</td>
                        <td>Otto</td>
                       
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default View