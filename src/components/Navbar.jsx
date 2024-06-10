import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar bg-primary">
                <div class="container-fluid">

                    <Link class="navbar-brand" to="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/FISAT_LOGO.png" alt="Logo" width="90" height="80" class="d-inline-block align-text-center"></img>
                        <b style={{ fontSize: '30px' }}>FISAT</b>
                    </Link>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><b>Home</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/"><b>Add Student</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/search"><b>Search Student</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/view"><b>Student Details</b></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar