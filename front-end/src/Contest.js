import React, { useState, useEffect } from "react";
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
            <a href = {props.details.link}>
                <img className="PlatformLogo" src="./../images/${props.platform}.png" />
                <h1 className="ContestName">{props.details.name}</h1>
                <div className="ContestDetails">
                    <p>Date: {props.details.start_date} - {props.details.end_date}</p>
                    <p>Host: {props.details.platform}</p>
                    <p>Details: {props.details.description}</p>
                </div>
            </a>
        </article>

    )


}




export default Contest