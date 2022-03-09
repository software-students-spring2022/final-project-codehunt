import {BrowserRouter as Router, Routes, Route } from "react-browser-dom"
import "./Contest.css"



const Contest = props => {
    // contest has the following attributes:
    // contest name
    // contest platform (logo pull from images dir)
    // contest start date
    // contest end date
    // contest description

    return (
        <article className = "Contest">
            <Link to = {props.link}>
                <img className="PlatformLogo" src="./../images/${props.platform}.png" />
                <h1 className="ContestName">{props.name}</h1>
                <div className="ContestDetails">
                    <p>Date: {props.startDate} - {props.endDate}</p>
                    <p>Host: {props.platform}</p>
                    <p>Details: {props.description}</p>
                </div>
            </Link>
        </article>

    )


}




export default Contest