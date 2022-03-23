import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Contest.css';


const Contest = (props) => {
  // contest has the following attributes:
  // contest name
  // contest platform (logo pull from images dir)
  // contest start_date
  // contest end_date
  // contest description

  return (
    <div className="card">
      <div className="card__icon">
        <img alt="logo" src="./../images/${props.details.platform}.png" ></img>
      </div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">{props.details.name}</h2>
      <div className="card__content">
        <p>Date: {props.details.start_date} - {props.details.end_date}</p>
        <p>Host: {props.details.platform}</p>
        <p>Details: {props.details.description}</p>
      </div>

      <p className="card__apply">
        <a className="card__link" target="_blank" rel="noopener noreferrer" href={props.details.link}>Go to Website<i className="fas fa-arrow-right"></i></a>
      </p>
    </div>


  );
};


export default Contest;
