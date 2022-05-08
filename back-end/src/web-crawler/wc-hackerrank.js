const puppeteer = require("puppeteer")

// hackerrank
async function getCodeChefContent() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://www.codechef.com/contests?itm_medium=navmenu&itm_campaign=allcontests", {waitUntil: "networkidle0", timeout: 0})

  // const websiteContent = await page.content();
  const contestName = await page.$$eval(
      "div.contests > div.active-contests active-contests-container > ul > li > div",
      (el) => el.map((a) => a.innerHTML),
  )

  const contestTime = await page.$$eval(
      "div.contest-upcoming > div.time",
      (el) => el.map((a) => a.innerHTML),
  )

  await browser.close()
  // return contestName.map((value, index) => [value, contestTime[index]]);
  return contestName.map((value, index) => {
    const s = contestTime[index]
    const tz = s.split(" ").at(-1)
    const t = s.match(/\w{2}:\d{2}\s\w{2}/g)
    return {
      platform: "HackerRank",
      name: value,
      timeStart: `${s.match(/.+@/)[0]} ${t[0]} ${tz}`,
      timeEnd: `${s.match(/.+@/)[0]} ${t[1]} ${tz}`,
      url: "https://hackerrank.com/contests/",
      logo: "https://hrcdn.net/community-frontend/assets/brand/logo-new-white-green-a5cb16e0ae.svg",
    }
  })
}

module.exports.getCodeChefContent = getCodeChefContent
