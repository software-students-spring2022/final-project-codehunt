import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./About.css"


const About = props => {
    return (
        <main className = "Home">
            <h1>About CodeHunt</h1>
            <p>CodeHunt is a platform that assembles and organizes various coding contests’ information and details. Compatible with popular websites (including LeetCode, CodeForces, and Kaggle), CodeHunt eliminates the need to visit each individually to stay updated. Keeping track of competitions has never been easier.</p>
            <p>© 2022 CodeHunt</p>
        </main>
    )
}


export default About