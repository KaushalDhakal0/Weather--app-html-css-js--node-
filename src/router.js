const express = require("express");

const router = express.Router();

const controller = require("../controllers/controller.js")




router.get("/" , controller.renderHomepage);

router.post("/" , controller.getWeather);

router.get( "/about" , controller.renderAboutpage);  

 module.exports = router;

 

