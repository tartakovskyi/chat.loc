import React, { Component }  from 'react';


const Navigation = () => {


  return(  
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="/">Chat</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <a class="nav-link" href="/login">Log in</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/register">Registration</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navigation ;