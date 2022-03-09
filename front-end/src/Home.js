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
      link: "leetcode.com",
    },
    {
      name: "some other contest",
      platform: "hackerrank",
      date: "3/21/2022 - 4/1/2022",
      description: "lorem ipsum something something",
      link: "hackerrank.com",
    },

  ]


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
