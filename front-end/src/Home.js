import {BrowserRouter as Router, Routes, Route } from "react-browser-dom"
import Contest from './Contest'
import './Home.css'



const Home = props => {



  const pullContests = await axios("https://mockaroo.com/datasets/183454")


  FeaturedContests = pullContests.data

  return (
    <main className = "ContestsHome">
      <h1>Featured Contests</h1>
      <section className = "ContestsBlock">
        {featuredContests.map((contest, c, featuredContestsArray) => (
          <Contest
            name = {contest.name}
            platform = {contest.platform}
            startDate = {contest.start_date}
            endDate = {contest.end_date}
            description = {contest.description}
            link = {contest.link}
          />
        ))}
      </section>
    </main>
  )
}



export default Home
