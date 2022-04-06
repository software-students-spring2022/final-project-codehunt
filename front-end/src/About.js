import "./About.css"


const About = (props) => {
  return (
    <main className = "Home">
      <h1 className="header">About CodeHunt</h1>
      <div className="primary"><a className="titlelink" href="https://github.com/software-assignments-spring2022/final-project-codehunt">CodeHunt</a> is a platform that assembles and organizes various coding contests’ information and details. Compatible with popular websites (including LeetCode, CodeForces, and Kaggle), CodeHunt eliminates the need to visit each individually to stay updated.</div>
      <div className="primary">
        Our goal? By simplifying how students search for coding contests,
        we want them to easily and efficiently approach their goal of going
        to their dream company and landing their dream job. All they would
        need to do is subscribe to the websites whose contests they are
        interested in participating in. That’s it! No more inconvenient
        jumping from site to site. No more hectic scheduling.
        Keeping track of competitions has never been easier.
      </div>
      <div className="primary">
        This platform is dedicated to CS students at NYU so far due to
        limited resources. We hope to expand this demographic through
        further developments and improvements.
      </div>
      <h3 className="break">• • •</h3>
      <div className="credits">
        <h4 className="littleheader">CodeHunt was created by:</h4>
        <div className="contributors">
          <a className="nameButton" href="https://github.com/charliecai00">
            <img className="profilepic" src="https://avatars.githubusercontent.com/u/90638467?v=4"/>
            <div className="name">Charlie Cai</div>
          </a>
          <a className="nameButton" href="https://github.com/dinanz">
            <img className="profilepic" src="https://avatars.githubusercontent.com/u/60189142?v=4"/>
            <div className="name">Diana Zhao</div>
          </a>
          <a className="nameButton" href="https://github.com/b0ub0">
            <img className="profilepic" src="https://avatars.githubusercontent.com/u/90593125?v=4"/>
            <div className="name">Chengyang Song</div>
          </a>
          <a className="nameButton" href="https://github.com/kopokopok">
            <img className="profilepic" src="https://avatars.githubusercontent.com/u/59316474?v=4"/>
            <div className="name">Michael Zhou</div>
          </a>
          <a className="nameButton" href="https://github.com/dana-sun">
            <img className="profilepic" src="https://avatars.githubusercontent.com/u/60711992?v=4"/>
            <div className="name">Dana Sun</div>
          </a>
          <a className="nameButton" href="https://github.com/andrewshin02">
            <img className="profilepic" src="https://avatars.githubusercontent.com/u/59899452?v=4"/>
            <div className="name">Andrew Shin</div>
          </a>
        </div>
        <div className="copyright">© 2022 CodeHunt</div>
      </div>
    </main>
  )
}


export default About
