const {time} = require("console");
const fs = require("fs");
const WUXING = {
  JIN: "金",
  MU: "木",
  SHUI: "水",
  HUO: "火",
  TU: "土",
};
const Zhi = {
  ZI: "子",
  CHOU: "丑",
  YIN: "寅",
  MAO: "卯",
  CHEN: "辰",
  SI: "巳",
  WUZ: "午",
  WEI: "未",
  SHEN: "申",
  YOU: "酉",
  XU: "戍",
  HAI: "亥",
};
const text = `
水 丑	寅	寅	卯	卯	辰	辰	巳	巳	午	午	未	未	申	申 酉	酉	戍	戍	亥	亥	子	子	丑	丑	寅	寅	卯	卯	辰
木 辰	丑	寅	巳	寅	卯	午	卯	辰	未	辰	巳	申	巳	午 酉	午	未	戍	未	申	亥	申	酉	子	酉	戍	丑	戍	亥
金 亥	辰	丑	寅	子	巳	寅	卯	丑	午	卯	辰	寅	未	辰 巳	卯	申	巳	午	辰	酉	午	未	巳	戍	未	申	午	亥
土 午	亥	辰	丑	寅	未	子	巳	寅	卯	申	丑	午	卯	辰 酉	寅	未	辰	巳	戍	卯	申	巳	午	亥	辰	酉	午	未
火 酉	午	亥	辰	丑	寅	戍	未	子	巳	寅	卯	亥	申	丑 午	卯	辰	子	酉	寅	未	辰	巳	丑	戍	卯	申	巳	午
`;

arr = [
  {
    wuXing: WUXING.HUO,
    zhi: [],
  },
];
let filePath = "./ziweiposition.js";
const cb = (e) => {
  if (e) console.log(e);
};
const append = (content) => fs.appendFileSync(filePath, content, cb);

append("let arr=[\n");
const testNextLine = /\/n/;

const keysWuxing = Object.keys(WUXING);
const valuesWuxing = Object.values(WUXING);
const keysZhi = Object.keys(Zhi);
const valuesZhi = Object.values(Zhi);
let times = 0;
for (let i = 0, len = text.length; i < len; i++) {
  if (valuesWuxing.indexOf(text[i]) > -1) {
    for (let key in WUXING) {
      if (WUXING[key] === text[i]) {
        ++times;
        append(
          `
          {
            wuXing: WUXING.${key},
            zhi: [
          `
        );
      }
    }
  }
  if (valuesZhi.includes(text[i])) {
    for (let key in Zhi) {
      if (Zhi[key] == text[i]) {
        append(`Zhi.${key},\n`);
      }
    }
  }
  if (/\n/.test(text[i]) && times > 0) {
    append(
      `],
      },
      `
    );
  }
}
append("]");
