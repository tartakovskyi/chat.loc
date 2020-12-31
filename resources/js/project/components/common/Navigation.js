import React  from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({is_auth, logout}) => {


    return(  
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <NavLink to="/" className="navbar-brand">Chat</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    {is_auth ?
                        <li className="nav-item">
                            <span onClick={logout} className="nav-link">Logout</span>
                        </li>
                        :
                        <>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Log in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">Sign Up</NavLink>
                            </li>
                        </>
                    }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;