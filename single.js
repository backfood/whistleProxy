const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * 功能 
 * 首先调用get方法 获取一次数据
 * 接着调用post方法 并设置定时器
 * 接着再调get方法 获取改变后的activity.data.acts
 * 
 * 等待一会后再次调用get方法 可是isGetCoupn仍然是true????
 */
let isGetCoupon = false;
let acitvity = {
  data: {
    acts: [
      {
        act_desc: "总价值不是很高的优惠券",
        act_id: 659908,
        act_name: "满减优惠券",
        act_type: 5,
        coupon_pack: {
          coupon_get_url:
            "get_coupon_param=060000849e342bcaa753da6f35e879dae0e77a",
          expired_time: 1628063020,
          stocks: [
            {
              discount: 3000,
              status: 0,
              stock_id: 8634358,
              threshold: 1000,
            },
            {
              discount: 100,
              status: 0,
              stock_id: 8634359,
              threshold: 6000,
            },
          ],
        },
      },
    ],
    is_friend: true,
    saved_amount: 2200,
    add_friend_url: "https://u.wechat.com/EE2pjhfkU_p_QVhS89C1OQI",
    head_img:
      "https://wxpaylogo.qpic.cn/wxpaylogo/PiajxSqBRaELcSRqecBN21pdbic6dUWWPBuuFFRpib2RHw3bBOtnawbiag/132",
    add_friend_time: 1560030023,
    wechat_number: "wxid_rp1d7y770rzq22",
    friend_cnt: 85,
  },
  env: "idc",
  errcode: 0,
  graphid: 33556544,
};
app.get("/friendactivity/list", (req, res) => {
  if (isGetCoupon) {
    acitvity.data.acts = [
      {
        act_desc: "总价值不是很高的优惠券",
        act_id: 659908,
        act_name: "满减优惠券",
        act_type: 5,
        coupon_pack: {
          coupon_get_url:
            "get_coupon_param=060000849e342bcaa753da6f35e879dae0e77a",
          expired_time: 1628063020,
          stocks: [
            {
              discount: 3000,
              status: 1,
              stock_id: 8634358,
              threshold: 1000,
            },
            {
              discount: 100,
              status: 1,
              stock_id: 8634359,
              threshold: 6000,
            },
          ],
        },
      },
    ];
  }
  res.send(acitvity);
});

app.post("/friendactivity/getcoupon", (req, res) => {
  isGetCoupon = true;
  setTimeout(() => {
    isGetCoupon = false;
  }, 5000);
  res.send({
    data: {
      code: 0,
      msg: "succ",
    },
    env: "idc",
    errcode: 0,
    graphid: 33556544,
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("已启动监控 端口", port);
});


