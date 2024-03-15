// controllers/checkoutController.js
const { MercadoPagoConfig, Preference } = require("mercadopago");

require("dotenv").config();

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

// Controlador para crear una preferencia de Mercado Pago
const createPreference = async (req, res) => {
  console.log("log de req.body en controller", req.body);
  const body = {
    items: req.body.items.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      category_id: item.category_id,
      unit_price: item.unit_price,
      quantity: item.quantity,
    })),
    back_urls: {
      success: req.body.back_urls.success,
      failure: req.body.back_urls.failure,
      pending: req.body.back_urls.pending,
    },
    auto_return: "approved",
    notification_url: req.body.notification_url,
    payer: {
      first_name: req.body.payer.firstname,
      last_name: req.body.payer.lastname,
      email: req.body.payer.email,
      identification: {
        type: "DNI",
        number: req.body.payer.identification.number,
      },
      address: {
        street_name: req.body.payer.address.street_name,
        street_number: req.body.payer.address.street_number,
        zip_code: req.body.payer.address.zip_code,
      },
      phone: {
        area_code: req.body.payer.phone.area_code,
        number: req.body.payer.phone.number,
      },
    },
    shipments: {
      receiver_address: {
        street_name: req.body.shipments.receiver_address.street_name,
        street_number: req.body.shipments.receiver_address.street_number,
        zip_code: req.body.shipments.receiver_address.zip_code,
        state_name: req.body.shipments.receiver_address.state_name,
        city_name: req.body.shipments.receiver_address.city_name,
        country_id: "AR",
      },
    },
  };
  try {
    const preference = new Preference(client);
    console.log("log de preference", preference);
    const result = await preference.create({ body });
    console.log("log de preference id", result.id);
    res.status(200).json({ preferenceId: result.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const webHookController = async (req, res) => {
  try {
    //example on how to save tickets from payement gateway server in our own relational db.

    /*   const paymentId = req.body?.data?.id;
    const response = await axios.get(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
      },
    });

    const paymentData = {
      paymentId: paymentId,
      dateCreated: response?.data?.date_created,
      items: response?.data?.additional_info?.items,
      status: response?.data?.status,
      payer: response?.data?.payer,
      shipments: response?.data?.shipments,
      transaction_amount: response?.data?.transaction_amount,
    }; */

    res.status(200).json("webhook recieved successfully");
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createPreference,
  webHookController,
};
