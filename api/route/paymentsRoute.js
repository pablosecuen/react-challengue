// routes.js
const express = require("express");
const { createPreferenceHandler, webHookHandler } = require("../handler/paymentHandler");

const router = express.Router();

router.post("/create-preference", createPreferenceHandler);

router.post("/webhook", webHookHandler);

module.exports = router;
