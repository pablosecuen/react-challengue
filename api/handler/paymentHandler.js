// handlers.js
const { createPreference, webHookController } = require("../controller/paymentController");

export const createPreferenceHandler = async (req, res) => {
  createPreference(req, res);
};

export const webHookHandler = async (req, res) => {

  try {
    res.status(200).json("200");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
