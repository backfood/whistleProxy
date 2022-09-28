const express = require(`express`);
const router = express.Router();

const resdata = {
  data: {
    authen_channel_state: 576460752303431685,
    business: "化妆品饰品",
    business_id: 14,
  },
  env: "idc",
  errcode: 0,
  msg: "succeed",
  retcode: 0,
};
router.get(`/getqrcode`, (req, res, next) => {
  res.send(resdata);
});

router.get(`/status`, (req, res, next) => {
  res.send(resdata);
});

module.exports = router;
