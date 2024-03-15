// handlers.js
import { createPreference, webHookController } from "../controller/paymentController";

export const createPreferenceHandler = async (req, res) => {
  try {
    const result = await createPreference(client, req);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const webHookHandler = async (req, res) => {
  const paymentId = req.body?.data?.id;

  try {
    const result = await webHookController(paymentId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
