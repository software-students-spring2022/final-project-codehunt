import React from "react"
import "../stylesheets/Contest.css"


const Contest = (props) => {
  // contest has the following attributes:
  // contest name
  // contest platform (logo pull from images dir)
  // contest start_date
  // contest end_date
  // contest description
  // <p>Details: {props.description}</p>
  return (
    <div>
      <meta className="viewport" content="width=device-width, initial-scale=1">
      </meta>
      <div className="contest-cards">
        <div className={"contest-card contest-card-0"}>
          <div className="contest-card__icon">
            <img alt="logo" src={props.logo} ></img>
          </div>
          <p className="contest-card__exit"><i className="fas fa-times">
          </i></p>
          <h2 className="contest-card__title">{props.name}</h2>
          <div className="contest-card__content">
            <p>Time: {props.start_date} - {props.end_date}</p>
          </div>
          <p className="contest-card__apply">
            <a className="contest-card__link" target="_blank"
              rel="noopener noreferrer" href={props.link}>
              Go to Website <i className="fas fa-arrow-right"></i></a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contest
