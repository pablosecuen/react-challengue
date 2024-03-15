// handlers.js
const { createPreference, webHookController } = require("../controller/paymentController");

export const createPreferenceHandler = async (req, res) => {
  createPreference(req, res);
};

export const webHookHandler = async (req, res) => {
  /*   const paymentId = req.body?.data?.id; */

  try {
    /*    const result = await webHookController(paymentId); */
    res.status(200).json("200");
  } catch (error) {
    console.log("rerro en hanlder");
    res.status(500).json({ message: error.message });
  }
};
