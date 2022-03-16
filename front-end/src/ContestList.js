import { useState } from "react";

// use some manully set data as demostrating the template
const data = [
    {
        name: 'comp1',
        time: '29 Mar 2022 04:00:00 GMT',
        url: 'https://leetcode.com/contest/'
    },
    {
        name: 'comp2',
        time: '19 Apr 2022 04:00:00 GMT',
        url: 'https://leetcode.com/contest/'
    },
    {
        name: 'comp3',
        time: '25 Mar 2022 04:00:00 GMT',
        url: 'https://leetcode.com/contest/'
    }
];

function msToDHM(v) {
    let days = v / 8.64e7 | 0;
    let hrs  = (v % 8.64e7)/ 3.6e6 | 0;
    let mins = Math.round((v % 3.6e6) / 6e4);
    let seconds = Math.round((v / 1e3) % 60);
    const z = n => (n < 10? '0': '') + n;
    return `${days}d  ${z(hrs)}h ${z(mins)}min ${seconds}s`;
}

function ContestList() {
    const [currentTime, setCurrentTime] = useState(Date.now());
    const intervalId = setInterval(() => {
        setCurrentTime(Date.now());
    }, 1000)
    return (
        <div>
            <h1>contests</h1>
            <div className="contestDiv">
                {data.map(value => {
                    return (
                    <div>
                        <ul>
                            <li>Name: {value.name}</li>
                            <li>Time: {value.time}</li>
                            <li>CountDown: {msToDHM(Date.parse(value.time) - currentTime)}</li>
                        </ul>
                        <a target="_blank" rel="noopener noreferrer" href={value.url}>Visit the website</a>
                    </div>);
                })}
            </div>
        </div>        
    );
}

export default ContestList;
