import {useState, useEffect} from "react"
import "./ContestList.css"
import axios from "axios"


function msToDHM(v) {
  const days = v / 8.64e7 | 0
  const hrs = (v % 8.64e7) / 3.6e6 | 0
  const mins = Math.round((v % 3.6e6) / 6e4)
  const seconds = Math.round((v / 1e3) % 60)
  const z = (n) => (n < 10 ? "0" : "") + n
  return `${days}d  ${z(hrs)}h ${z(mins)}min ${seconds}s`
}

// input should be the data above
function ContestList(props) {
  // const { data } = props
  const [data, setData] = useState([])
  const [currentTime, setCurrentTime] = useState(Date.now())

  const getContestData = () => {
    axios.get("https://my.api.mockaroo.com/contests.json?key=e9f1c620")
        .then((data) => {
          console.log(data.data)
          data.data.sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
          setData(data.data)
        })
        .catch((error) => console.log(error))
  }

  useEffect(() => {
    getContestData()
    setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)
  }, [])


  return (
    <div>
      <meta className="viewport" content="width=device-width, initial-scale=1"></meta>
      <div className="contestlist-cards">
        {data.map((value, index) => {
          return (
            <div className={`contestlist-card contestlist-card-${index % 5}`}>
              <div className="contestlist-card__icon">
                <img alt="logo" src={value.logo} ></img>
              </div>
              <p className="contestlist-card__exit"><i className="fas fa-times"></i></p>
              <h2 className="contestlist-card__title">{value.name}</h2>
              <div className="contestlist-card__content">
                <p>Time: {value.time}</p>
                <p>{msToDHM(Date.parse(value.time) - currentTime)}</p>
              </div>

              <p className="contestlist-card__apply">
                <a className="contestlist-card__link" target="_blank" rel="noopener noreferrer" href={value.url}>Goto Website<i className="fas fa-arrow-right"></i></a>
              </p>
            </div>)
        })}
      </div>
    </div>
  )
}

export default ContestList
