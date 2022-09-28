const axios = require("axios");
const request = axios.create({
  headers: {
    Authorization: "AppCode e76aebc99f5262904f8b7a1562f437e2",
  },
});

request.get("https://api.topthink.com/almanac/date?date=2022-05-1").then((res) => {
  console.log(res.data);
});

