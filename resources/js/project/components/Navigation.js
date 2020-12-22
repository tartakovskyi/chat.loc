import React, { Component }  from 'react';


const Navigation = () => {


  return(  
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
            <a className="navbar-brand" href="/">Chat</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/login">Log in</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/register">Registration</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navigation ;