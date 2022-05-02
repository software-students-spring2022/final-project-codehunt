const puppeteer = require("puppeteer")

// leetcode
async function getLeetcodeContent() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://www.codechef.com/contests?itm_medium=navmenu&itm_campaign=allcontests", {waitUntil: "networkidle0"})

  // const websiteContent = await page.content();
  const contestName = await page.$$eval(
      "div.contest-upcoming > div.card-title",
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
      platform: "Leetcode",
      name: value,
      timeStart: `${s.match(/.+@/)[0]} ${t[0]} ${tz}`,
      timeEnd: `${s.match(/.+@/)[0]} ${t[1]} ${tz}`,
      url: "https://leetcode.com/contest/",
      logo: "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg",
    }
  })
}

module.exports.getLeetcodeContent = getLeetcodeContent
