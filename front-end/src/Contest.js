import React from "react"
import "./Contest.css"


const Contest = (props) => {
  // contest has the following attributes:
  // contest name
  // contest platform (logo pull from images dir)
  // contest start_date
  // contest end_date
  // contest description
  return (
    <div>
      <meta className="viewport" content="width=device-width, initial-scale=1">
      </meta>
      <div className="contestlist-cards">
        <div className={"contestlist-card contestlist-card-0"}>
          <div className="contestlist-card__icon">
            <img alt="logo" src={props.logo} ></img>
          </div>
          <p className="contestlist-card__exit"><i className="fas fa-times">
          </i></p>
          <h2 className="contestlist-card__title">{props.name}</h2>
          <div className="contestlist-card__content">
            <p>Time: {props.start_date} - {props.end_date}</p>
            <p>Details: {props.description}</p>
          </div>
          <p className="contestlist-card__apply">
            <a className="contestlist-card__link" target="_blank"
              rel="noopener noreferrer" href={props.link}>
              Go to Website <i className="fas fa-arrow-right"></i></a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contest
