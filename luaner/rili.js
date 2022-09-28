const axios = require("axios");
const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");

const forLoopRequest = () => {
  for (let start = 1900, end = 2020; start < end; start++) {
    setTimeout(() => {
      for (let i = 0, length = 12; i < length; i++) {
        setTimeout(() => {
          const now = new Date().getTime();
          const dir = start + "年";
          const filePath = i + "月";
          const params = {
            tn: "wisetpl",
            format: "json",
            resource_id: "39043",
            query: `${start}年${i}月`,
            t: now,
            cb: `op_aladdin_callback${now}`,
          };
          axios({
            url: "https://sp1.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php",
            responseType: "arraybuffer",
            params,
          })
            .then((res) => {
              let data = iconv.decode(res.data, "gbk");
              data = fixDataStyle(data);
              fs.mkdir(`/year${dir}`, (err) => {
                if (err) {
                  console.log(err);
                } else {
                  fs.writeFile(`${dir}/${filePath}.json`, data, (err) => {
                    if (err) console.log(err);
                  });
                }
              });
            })
            .catch((e) => {
              console.log(e);
              return;
            });
        }, Math.ceil(Math.random() * 20 + 16) * 1000);
      }
    }, Math.ceil(Math.random() * 20 + 16) * 1000);
  }
};

const randomTime = () => {
  const padding = () => Math.random() * 20;
  return Math.ceil(Math.random() * padding() + padding()) * 1000;
};
const request = (year, month) => {
  const params = {
    tn: "wisetpl",
    format: "json",
    resource_id: "39043",
    query: `${year}年${month}月`,
    t: now,
    cb: `op_aladdin_callback${now}`,
  };
  axios({
    url: "https://sp1.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php",
    responseType: "arraybuffer",
    params,
  })
    .then((res) => {
      let data = iconv.decode(res.data, "gbk");
      data = fixDataStyle(data);
      fs.writeFile(`./${year}年/${month}month.json`, data, (err) => {
        if (err) console.log(err);
      });
    })
    .catch((e) => {
      console.log(e);
      throw Error(`请求报错${e}`);
    });
};
const recursionRequestMonth = (year, month) => {
  if (month > 0) {
    // console.log(year, month);
    request(year, month);
    setTimeout(() => {
      recursionRequestMonth(year, --month);
    }, randomTime());
  }
};

const recursionRequestYear = (year = 2020) => {
  if (year > 1900) {
    fs.mkdir(`./${year}年`, (err) => {
      if (err) return console.log(err);
    });
    recursionRequestMonth(year, 12);
    // console.log(year);
    setTimeout(() => {
      recursionRequestYear(--year);
    }, randomTime());
  }
};

