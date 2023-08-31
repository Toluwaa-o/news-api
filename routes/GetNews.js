const express = require("express");
const { getNews, getCountryHeadlines } = require("../controllers/GetNews");
const router = express.Router();

router.route("/").get(getNews);
router.route("/country").get(getCountryHeadlines);

module.exports = router;
