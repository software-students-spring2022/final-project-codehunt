import {BrowserRouter as Router, Routes, Route } from "react-browser-dom"
import Contest from './Contest'
import './Home.css'



const Home = props => {


  //placeholder contests
  featuredContests = [
    {
      name: "some contest",
      platform: "leetcode",
      date: "3/21/2022 - 4/1/2022",
      description: "lorem ipsum something something",
      link: "leetcode.com"
    },
    {
      name: "some other contest",
      platform: "hackerrank",
      date: "3/21/2022 - 4/1/2022",
      description: "lorem ipsum something something",
      link: "hackerrank.com"
    },

  ]


  return (
    <>
      <h1>Featured Contests</h1>
      <section>
        {featuredContests.map((contest, c, featuredContestsArray) => (
          <Contest
            name = {contest.name}
            platform = {contest.platform}
            date = {contest.date}
            description = {contest.description}
            link = {contest.link}
          />
        ))}
      </section>
    </>
  )
}



export default Home
