import {BrowserRouter as Router, Routes, Route } from "react-browser-dom"
import "./Contest.css"



const Contest = props => {
    // contest has the following attributes:
    // contest name
    // contest platform (logo)
    // contest start - end date
    // contest description

    return (
        <article className = "Contest">
            <Link to = {props.link}>
                <img className="PlatformLogo" src="./images/${props.platform}" />
                <h1 className="ContestName">{props.name}</h1>
                <div className="ContestDetails">
                    <p>{props.date}</p>
                    <p>{props.description}</p>
                </div>
            </Link>
        </article>

    )


}




export default Contest