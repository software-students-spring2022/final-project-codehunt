const axios = require("axios")

async function getCodeChefContent() {
  const response = await axios("https://kontests.net/api/v1/code_chef")
  codeChefData = response.data

  // return contestName.map((value, index) => [value, contestTime[index]]);
  return codeChefData.map((value) => {
    return {
      platform: "CodeChef",
      name: value.name,
      timeStart: value.start_time,
      timeEnd: value.end_time,
      url: value.url,
      logo: "https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.svg",
    }
  })
}

module.exports.getCodeChefContent = getCodeChefContent
