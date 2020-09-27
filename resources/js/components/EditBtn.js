import React, { Component }  from 'react';


const EditBtn = (props) => {

  return(
    <a href={props.url} className="btn btn-primary">
        <svg><use xlinkHref="/storage/img/icons.svg#pen"></use></svg>
    </a>       
    );
}

export default EditBtn;