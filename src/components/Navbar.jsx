import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/FISAT_LOGO.png" alt="Logo" width="90" height="80" class="d-inline-block align-text-center"></img>
                        <b style={{ fontSize: '30px' }}>FISAT</b>
                    </a>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><b>Add Student</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><b>Search Student</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><b>Student Details</b></a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar