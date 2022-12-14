enum SkyItem {
  JIA = '甲',
  YI = '乙',
  BING = "丙",
  DING = '丁',
  WU4 = '戊',
  JI = '己',
  GENG = '庚',
  XING = '辛',
  REN = '壬',
  GUI = '癸'
}
enum LandItem {
  ZI = '子',
  CHOU = '丑',
  YIN = '寅',
  MAO = '卯',
  CHEN = '辰',
  SI = '巳',
  WU3 = '午',
  WEI = '未',
  SHEN = '申',
  YOU = '酉',
  XU = '戌',
  HAI = '亥',
}
/**二进制日历数据 */
const dayInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,//1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,//1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,//1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x16a95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,//1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,//1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,//1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,//1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,//1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,//1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,//1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,//2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,//2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,//2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,//2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,//2040-2049
  /**Add By JJonline@JJonline.Cn**/
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,//2050-2059
  0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,//2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,//2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,//2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,//2090-2099
  0x0d520]//2100
/**
 * 1890 - 2100 年的农历数据
 * 数据格式：[0,2,9,21936]
 * [闰月所在月，0为没有闰月; *正月初一对应公历月; *正月初一对应公历日; *农历每月的天数的数组（需转换为二进制,得到每月大小，0=小月(29日),1=大月(30日)）;]
 */
type LuanerYearItem = number[]
const LunarInfo: LuanerYearItem[] = [
  [2, 1, 21, 22184],
  [0, 2, 9, 21936],
  [6, 1, 30, 9656],
  [0, 2, 17, 9584],
  [0, 2, 6, 21168],
  [5, 1, 26, 43344],
  [0, 2, 13, 59728],
  [0, 2, 2, 27296],
  [3, 1, 22, 44368],
  [0, 2, 10, 43856],
  [8, 1, 30, 19304],
  [0, 2, 19, 19168],
  [0, 2, 8, 42352],
  [5, 1, 29, 21096],
  [0, 2, 16, 53856],
  [0, 2, 4, 55632],
  [4, 1, 25, 27304],
  [0, 2, 13, 22176],
  [0, 2, 2, 39632],
  [2, 1, 22, 19176],
  [0, 2, 10, 19168],
  [6, 1, 30, 42200],
  [0, 2, 18, 42192],
  [0, 2, 6, 53840],
  [5, 1, 26, 54568],
  [0, 2, 14, 46400],
  [0, 2, 3, 54944],
  [2, 1, 23, 38608],
  [0, 2, 11, 38320],
  [7, 2, 1, 18872],
  [0, 2, 20, 18800],
  [0, 2, 8, 42160],
  [5, 1, 28, 45656],
  [0, 2, 16, 27216],
  [0, 2, 5, 27968],
  [4, 1, 24, 44456],
  [0, 2, 13, 11104],
  [0, 2, 2, 38256],
  [2, 1, 23, 18808],
  [0, 2, 10, 18800],
  [6, 1, 30, 25776],
  [0, 2, 17, 54432],
  [0, 2, 6, 59984],
  [5, 1, 26, 27976],
  [0, 2, 14, 23248],
  [0, 2, 4, 11104],
  [3, 1, 24, 37744],
  [0, 2, 11, 37600],
  [7, 1, 31, 51560],
  [0, 2, 19, 51536],
  [0, 2, 8, 54432],
  [6, 1, 27, 55888],
  [0, 2, 15, 46416],
  [0, 2, 5, 22176],
  [4, 1, 25, 43736],
  [0, 2, 13, 9680],
  [0, 2, 2, 37584],
  [2, 1, 22, 51544],
  [0, 2, 10, 43344],
  [7, 1, 29, 46248],
  [0, 2, 17, 27808],
  [0, 2, 6, 46416],
  [5, 1, 27, 21928],
  [0, 2, 14, 19872],
  [0, 2, 3, 42416],
  [3, 1, 24, 21176],
  [0, 2, 12, 21168],
  [8, 1, 31, 43344],
  [0, 2, 18, 59728],
  [0, 2, 8, 27296],
  [6, 1, 28, 44368],
  [0, 2, 15, 43856],
  [0, 2, 5, 19296],
  [4, 1, 25, 42352],
  [0, 2, 13, 42352],
  [0, 2, 2, 21088],
  [3, 1, 21, 59696],
  [0, 2, 9, 55632],
  [7, 1, 30, 23208],
  [0, 2, 17, 22176],
  [0, 2, 6, 38608],
  [5, 1, 27, 19176],
  [0, 2, 15, 19152],
  [0, 2, 3, 42192],
  [4, 1, 23, 53864],
  [0, 2, 11, 53840],
  [8, 1, 31, 54568],
  [0, 2, 18, 46400],
  [0, 2, 7, 46752],
  [6, 1, 28, 38608],
  [0, 2, 16, 38320],
  [0, 2, 5, 18864],
  [4, 1, 25, 42168],
  [0, 2, 13, 42160],
  [10, 2, 2, 45656],
  [0, 2, 20, 27216],
  [0, 2, 9, 27968],
  [6, 1, 29, 44448],
  [0, 2, 17, 43872],
  [0, 2, 6, 38256],
  [5, 1, 27, 18808],
  [0, 2, 15, 18800],
  [0, 2, 4, 25776],
  [3, 1, 23, 27216],
  [0, 2, 10, 59984],
  [8, 1, 31, 27432],
  [0, 2, 19, 23232],
  [0, 2, 7, 43872],
  [5, 1, 28, 37736],
  [0, 2, 16, 37600],
  [0, 2, 5, 51552],
  [4, 1, 24, 54440],
  [0, 2, 12, 54432],
  [0, 2, 1, 55888],
  [2, 1, 22, 23208],
  [0, 2, 9, 22176],
  [7, 1, 29, 43736],
  [0, 2, 18, 9680],
  [0, 2, 7, 37584],
  [5, 1, 26, 51544],
  [0, 2, 14, 43344],
  [0, 2, 3, 46240],
  [4, 1, 23, 46416],
  [0, 2, 10, 44368],
  [9, 1, 31, 21928],
  [0, 2, 19, 19360],
  [0, 2, 8, 42416],
  [6, 1, 28, 21176],
  [0, 2, 16, 21168],
  [0, 2, 5, 43312],
  [4, 1, 25, 29864],
  [0, 2, 12, 27296],
  [0, 2, 1, 44368],
  [2, 1, 22, 19880],
  [0, 2, 10, 19296],
  [6, 1, 29, 42352],
  [0, 2, 17, 42208],
  [0, 2, 6, 53856],
  [5, 1, 26, 59696],
  [0, 2, 13, 54576],
  [0, 2, 3, 23200],
  [3, 1, 23, 27472],
  [0, 2, 11, 38608],
  [11, 1, 31, 19176],
  [0, 2, 19, 19152],
  [0, 2, 8, 42192],
  [6, 1, 28, 53848],
  [0, 2, 15, 53840],
  [0, 2, 4, 54560],
  [5, 1, 24, 55968],
  [0, 2, 12, 46496],
  [0, 2, 1, 22224],
  [2, 1, 22, 19160],
  [0, 2, 10, 18864],
  [7, 1, 30, 42168],
  [0, 2, 17, 42160],
  [0, 2, 6, 43600],
  [5, 1, 26, 46376],
  [0, 2, 14, 27936],
  [0, 2, 2, 44448],
  [3, 1, 23, 21936],
  [0, 2, 11, 37744],
  [8, 2, 1, 18808],
  [0, 2, 19, 18800],
  [0, 2, 8, 25776],
  [6, 1, 28, 27216],
  [0, 2, 15, 59984],
  [0, 2, 4, 27424],
  [4, 1, 24, 43872],
  [0, 2, 12, 43744],
  [0, 2, 2, 37600],
  [3, 1, 21, 51568],
  [0, 2, 9, 51552],
  [7, 1, 29, 54440],
  [0, 2, 17, 54432],
  [0, 2, 5, 55888],
  [5, 1, 26, 23208],
  [0, 2, 14, 22176],
  [0, 2, 3, 42704],
  [4, 1, 23, 21224],
  [0, 2, 11, 21200],
  [8, 1, 31, 43352],
  [0, 2, 19, 43344],
  [0, 2, 7, 46240],
  [6, 1, 27, 46416],
  [0, 2, 15, 44368],
  [0, 2, 5, 21920],
  [4, 1, 24, 42448],
  [0, 2, 12, 42416],
  [0, 2, 2, 21168],
  [3, 1, 22, 43320],
  [0, 2, 9, 26928],
  [7, 1, 29, 29336],
  [0, 2, 17, 27296],
  [0, 2, 6, 44368],
  [5, 1, 26, 19880],
  [0, 2, 14, 19296],
  [0, 2, 3, 42352],
  [4, 1, 24, 21104],
  [0, 2, 10, 53856],
  [8, 1, 30, 59696],
  [0, 2, 18, 54560],
  [0, 2, 7, 55968],
  [6, 1, 27, 27472],
  [0, 2, 15, 22224],
  [0, 2, 5, 19168],
  [4, 1, 25, 42216],
  [0, 2, 12, 42192],
  [0, 2, 1, 53584],
  [2, 1, 21, 55592],
  [0, 2, 9, 54560],
];

function getLunarLeapYear() { }