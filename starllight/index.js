const fs = require("fs");

const arr = [
  {star: "紫微星", light: [-1, 3, 3, 2, 1, 2, 3, 3, 2, 2, 1]},
  {star: "天机星", light: [3, -3, 1, 2, 0, -1, 3, -3, 1, 2, 0]},
  {star: "太阳星", light: [-3, -2, 2, 3, 2, 2, 3, 1, 0, -1, -3]},
  {star: "武曲星", light: [2, 3, 1, 0, 3, -1, 2, 3, 1, 0, 3]},
  {star: "天同星", light: [2, -2, 0, 3, -1, 3, -3, -2, 2, -1, -1]},
  {star: "廉贞星", light: [-1, 0, 3, -1, 0, -3, -1, 0, 3, -1, 0]},
  {star: "天府星", light: [3, 3, 3, 1, 2, 1, 2, 3, 1, 2, 2]},
  {star: "太阴星", light: [3, 3, -2, -3, -3, -3, -3, -1, 0, 2, 2]},
  {star: "贪狼星", light: [2, 3, -1, 1, 3, -3, 2, 3, -1, 0, 3]},
  {star: "巨门星", light: [2, -2, 3, 3, -1, -1, 2, -1, 3, 3, -1]},
  {star: "天相星", light: [3, 3, 3, -3, -1, 1, 1, 1, 3, -3, 1]},
  {star: "天梁星", light: [3, 2, 3, 2, 3, -3, 3, 2, -3, 1, 3]},
  {star: "七杀星", light: [2, 3, 3, 2, 1, -1, 2, 3, 3, 2, 3]},
  {star: "破军星", light: [3, 2, 1, -3, 2, -1, 3, 2, 1, -3, 2]},
  {star: "火星", light: ["", -3, 1, 3, 0, -3, 1, 3, 0, -3, 1, 3]},
  {star: "铃星", light: ["", -3, 1, 3, 0, -3, 1, 3, 0, -3, 1, 3]},
  {star: "擎羊星", light: [2, 3, "", -3, 3, "", -3, 3, "", 2, 3]},
  {star: "陀螺星", light: ["", 3, -3, "", 3, -3, "", 3, -3, "", 3]},
  {star: "文昌星", light: [1, 3, -3, 2, 1, 3, -3, 0, 1, 3, -3]},
];
let StarLightEnum = {
    MIAO: "3",
    WANG: "2",
    DI: "1",
    LI: "0",
    PING: "-1",
    BU: "-2",
    XIAN: "-3",
    NONE: "",
  },
  starList = {
    ZiWeiStarEnum: {
      ZIWEI: "紫微",
      TIANJI: "天机",
      TAIYANG: "太阳",
      WUQU: "武曲",
      TIANTONG: "天同",
      LIANZHEN: "廉贞",
    },
    TianFuStarEnum: {
      TIANFU: "天府",
      TAIYIN: "太阴",
      TANLANG: "贪狼",
      JVMEN: "巨门",
      TIANLIANG: "天梁",
      TIANXIANG: "天相",
      QISHA: "七杀",
      POJUN: "破军",
    },
    YearGanStarEnum: {
      QINGYANG: "擎羊",
      TUOLUO: "陀螺",
      TIANYUE: "天钺",
      TIANKUI: "天魁",
      LUCUN: "禄存",
      TIANFU: "天福",
      TIANGUAN: "天官",
      ZHENGKONG: "正空",
      FUKONG: "副空",
    },
    HourStarEnum: {
      WENCHANG: "文昌",
      WENQU: "文曲",
      HUOXING: "火星",
      LINGXING: "铃星",
      DIJIE: "地劫",
      TIANKONG: "天空",
      TAIFU: "台辅",
      FENGGAO: "封诰",
    },
  };
let filePath = "./starlight.js";
const cb = (e) => {
  if (e) console.log(e);
};

const getStar = (starEnum, star) => {
  keyList = Object.keys(starList[starEnum]);
  index = keyList.findIndex((e) => starList[starEnum][e] == star);
  if (index > -1) return `${starEnum}.${keyList[index]}`;
  return "";
};

const getStarMap = (star) => {
  const ziWeiListStar = getStar("ZiWeiStarEnum", star);
  if (ziWeiListStar) return ziWeiListStar;
  const tianFuStar = getStar("TianFuStarEnum", star);
  if (tianFuStar) return tianFuStar;
  const yearGanStar = getStar("YearGanStarEnum", star);
  if (yearGanStar) return yearGanStar;
  const HourStar = getStar("HourStarEnum", star);
  if (HourStar) return HourStar;
  return star;
};

const append = (content) => fs.appendFileSync(filePath, content, cb);

Object.keys(starList).forEach((item) =>
  append(`let ${item} = ${JSON.stringify(starList[item])}\n`)
);

append("arr=[\n");
arr.forEach((e) => {
  let star = e.star.substring(0, 2);
  // console.log(star);
  star = getStarMap(star);
  // console.log(star);
  append(`{star:${star},\nlight:[`);
  e.light.forEach((item) => {
    item += "";
    let list = Object.keys(StarLightEnum);
    let index = list.findIndex((key) => item == StarLightEnum[key]);
    if (index > -1) {
      append(`StarLightEnum.${list[index]},\n`);
    } else {
      append("StarLightEnum.none,\n");
    }
  });
  append(`]},\n`);
});
append("]");
