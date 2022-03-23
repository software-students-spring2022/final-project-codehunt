import {useState, useEffect} from 'react';
import './ContestList.css';
import axios from 'axios';

// use some manully set data as demostrating the template
// const data = [
//     {
//         name: 'Leetcode weekly',
//         time: '29 Mar 2022 04:00:00 GMT',
//         url: 'https://leetcode.com/contest/',
//         logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png'
//     },
//     {
//         name: 'Leetcode Biweekly',
//         time: '19 Apr 2022 04:00:00 GMT',
//         url: 'https://leetcode.com/contest/',
//         logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png'
//     },
//     {
//         name: 'Kaggle',
//         time: '25 Mar 2022 04:00:00 GMT',
//         url: 'https://www.kaggle.com/competitions',
//         logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png'
//     },
//     {
//         name: 'Codeforces Round #779 (Div. 2)',
//         time: '27 Mar 2022 10:35:00 UTC-4',
//         url: 'https://www.kaggle.com/competitions',
//         logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Codeforces_logo.svg'
//     },
// ];


function msToDHM(v) {
  const days = v / 8.64e7 | 0;
  const hrs = (v % 8.64e7)/ 3.6e6 | 0;
  const mins = Math.round((v % 3.6e6) / 6e4);
  const seconds = Math.round((v / 1e3) % 60);
  const z = (n) => (n < 10? '0': '') + n;
  return `${days}d  ${z(hrs)}h ${z(mins)}min ${seconds}s`;
}

// input should be the data above
function ContestList(props) {
  // const { data } = props
  const [data, setData] = useState([]);

  const getContestData = () => {
    axios
        .get('https://my.api.mockaroo.com/contests.json?key=e9f1c620')
        .then((data) => {
          console.log(data.data);
          setData(data.data);
        })
        .catch((error) => console.log(error));
  };

  useEffect(() => {
    getContestData();
  }, []);

  const [currentTime, setCurrentTime] = useState(Date.now());
  setInterval(() => {
    setCurrentTime(Date.now());
  }, 1000);

  data.sort((a, b) => Date.parse(a.time) - Date.parse(b.time));

  return (
    <div>
      <h1>contests</h1>
      <div className="ContestList">
        {data.map((value, index) => {
          return (
            <div className={`card card-${index % 5}`}>
              <div className="card__icon">
                <img alt="logo" src={value.logo} ></img>
              </div>
              <p className="card__exit"><i className="fas fa-times"></i></p>
              <h2 className="card__title">{value.name}</h2>
              <div className="card__content">
                <p>Time: {value.time}</p>
                <p>CountDown: {msToDHM(Date.parse(value.time) - currentTime)}</p>
              </div>

              <p className="card__apply">
                <a className="card__link" target="_blank" rel="noopener noreferrer" href={value.url}>Goto Website<i className="fas fa-arrow-right"></i></a>
              </p>
            </div>);
        })}
      </div>
    </div>
  );
}

export default ContestList;
