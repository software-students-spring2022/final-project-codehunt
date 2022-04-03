const puppeteer = require('puppeteer');
const fs = require('fs');

// leetcode
async function getPageContent() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.leetcode.com/contest');

  //const websiteContent = await page.content();
  const contestName = await page.$$eval(
    'div.contest-upcoming > div.card-title', 
    el => el.map(a => a.innerHTML)
  );

  const contestTime = await page.$$eval(
    'div.contest-upcoming > div.time', 
    el => el.map(a => a.innerHTML)
  );
  
  await browser.close();
  return contestName.map((value, index) => [value, contestTime[index]]);
}

let promise = getPageContent();
const data = [];

promise.then(d => {
  d.forEach(element => {
    const s = element[1];
    const tz = s.split(' ').at(-1);
    const t = s.match(/\w{2}:\d{2}\s\w{2}/g);
    data.push({
      platform: 'Leetcode',
      name: element[0],
      timeStart: `${s.match(/.+@/)[0]} ${t[0]} ${tz}`,
      timeEnd: `${s.match(/.+@/)[0]} ${t[1]} ${tz}`,
      url: 'leetcode.com/contest',
      logo: 'https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg'
    })
  });
  if (data) {
    console.log(data);
   
    fs.writeFile('contests.json', JSON.stringify(data), (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
  } else {
    console.log('fetch failed, rerun')
  }
  
});

