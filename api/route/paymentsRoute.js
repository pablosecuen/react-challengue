// routes.js
import express from "express";
import { createPreferenceHandler, webHookHandler } from "../handler/paymentHandler";

const router = express.Router();

router.post("/create-preference", createPreferenceHandler);
router.post("/webhook", webHookHandler);

export default router;
