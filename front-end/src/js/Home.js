import React, { useState, useEffect } from "react"
import Contest from "./Contest"
import "../stylesheets/Home.css"
import axios from "axios"


const Home = () => {
  const [featuredContests, setData] = useState([])


  useEffect(() => {
    axios
        .get(`${process.env.REACT_APP_BACKEND}/featuredContests`)
        .then((response) => {
          console.log(response.data)
          setData(response.data)
        })
        .catch((response) => {
          console.log("Failed to get featured contests")
        })
  }, [])


  return (
    <div className = "ContestsHome">

      <h1>Featured Contests</h1>

      <section className = "ContestsBlock">

        {/* {featuredContests.map((contest) => (
          <Contest key={contest.id}
            name = {contest.name}
            platform={contest.platform}
            start_date={contest.timeStart}
            end_date={contest.timeEnd}
            description={contest.description}
            link={contest.url}
            logo={contest.logo}
          />
        ))} */}

      </section>
    </div>
  )
}


export default Home

