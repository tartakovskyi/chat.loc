import React, { Component, useContext }  from 'react';
import { AppContext } from './App.js';

const EditBtn = (props) => {

	const {loggedUser} = useContext(AppContext);

  return(
    <a href={props.url} className="btn btn-primary">
        <svg><use xlinkHref="/storage/img/icons.svg#pen"></use></svg>
    </a>       
    );
}

export default EditBtn;