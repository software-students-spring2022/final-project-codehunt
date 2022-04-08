const puppeteer = require("puppeteer")

// codeforce
async function getCodeForcesContent() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://codeforces.com/contests?complete=true", {waitUntil: "networkidle0"})

  const contestName = await page.$$eval(
      "div.contestList > div.datatable > div > table > tbody > tr > td.left",
      (el) => el.map((a) => a.innerHTML.trim()),
  )

  const contestTime = await page.$$eval(
      'div.contestList > div.datatable > div > table > tbody > tr > td > a[target="_blank"]',
      (el) => el.map((a) => a.text.trim()),
  )

  await browser.close()
  // return contestName.map((value, index) => [value, contestTime[index]]);
  return contestName.map((value, index) => {
    const a = contestTime[index].split("UTC")
    return {
      platform: "Codeforces",
      name: contestName[index],
      timeStart: a[0] + " UTC" + a[1],
      timeEnd: undefined,
      url: "https://codeforces.com/contests?complete=true",
      logo: "https://codeforces.org/s/0/apple-icon-114x114.png",
    }
  })
}

module.exports.getCodeForcesContent = getCodeForcesContent
