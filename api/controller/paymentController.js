// controllers/checkoutController.js
import { MercadoPagoConfig, Preference } from "mercadopago";

require("dotenv").config();

const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

if (!accessToken) {
  throw new Error("El token de acceso a Mercado Pago no está definido.");
}

const client = new MercadoPagoConfig({
  accessToken: accessToken,
});

// Controlador para crear una preferencia de Mercado Pago
const createPreference = async (req, res) => {
  const body = {
    items: req.body.items.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      category_id: item.category_id,
      unit_price: item.unit_price,
      quantity: item.quantity,
      size: item.size,
    })),
    back_urls: {
      success: req.body.back_urls.success,
      failure: req.body.back_urls.failure,
      pending: req.body.back_urls.pending,
    },
    auto_return: "approved",
    notification_url: req.body.notification_url,
    payer: {
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.mail,
      identification: {
        type: "DNI",
        number: req.body.dni,
      },
      address: {
        street_name: req.body.calle,
        street_number: req.body.altura,
        zip_code: req.body.codigoPostal,
      },
      phone: {
        area_code: req.body.area_code,
        number: req.body.number,
      },
    },
    shipments: {
      receiver_address: {
        street_name: req.body.calle,
        street_number: req.body.altura,
        zip_code: req.body.codigoPostal,
        state_name: req.body.provincia,
        city_name: req.body.ciudad,
        country_id: "US",
      },
    },
  };

  try {
    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.status(200).json({ preferenceId: result.id });
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};

const webHookController = async (req, res) => {
  try {
    //example on how to save tickets from payement gateway server in our own relational db.

    const paymentId = req.body?.data?.id;
    const response = await axios.get(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
      },
    });

    const paymentData = {
      paymentId: paymentId,
      dateCreated: response.data.date_created,
      items: response.data.additional_info.items,
      status: response.data.status,
      payer: response.data.payer,
      shipments: response.data.shipments,
      transaction_amount: response.data.transaction_amount,
    };
    return paymentData;

    res.status(200).json("webhook recieved successfully", paymentData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createPreference,
  webHookController,
};
