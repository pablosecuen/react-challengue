import { ChevronLeftIcon, ChevronRightIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import DetailNav from "../../components/detailnav";
import { useCart } from "../../../provider/CartContext";
import { useState } from "react";
import { Wallet } from "@mercadopago/sdk-react";
import EditItemQuantityButton from "../../components/button/edit-quantity-button";
import "./checkout.css";
import { useProductContext } from "../../../provider/Context";

const Checkout = () => {
  const { cart, removeFromCart } = useCart();
  const { createPreferenceAsync, preferenceId } = useProductContext();
  console.log(preferenceId);
  const [showCart, setShowCart] = useState(false);
  const [activeTab, setActiveTab] = useState("information");
  const [formData, setFormData] = useState({
    area_code: "",
    number: "",
    firstname: "",
    lastname: "",
    calle: "",
    altura: "",
    provincia: "",
    ciudad: "",
    codigoPostal: "",
    mail: "",
    dni: "",
  });

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleRemoveFromCart = (productsku) => {
    removeFromCart(productsku);
  };

  const handleCreatePreference = async () => {
    // Verifica que cart esté definido y sea un array
    if (cart && Array.isArray(cart) && cart.length > 0) {
      const body = {
        items: cart.map((item) => ({
          id: item.id,
          title: item.brand,
          description: item.information,
          category_id: item.brand,
          unit_price: item.skus.price,
          quantity: item.quantity,
          size: item.skus.name,
        })),
        back_urls: {
          success: "https://react-challengue.vercel.app/success",
          failure: "https://react-challengue.vercel.app/failure",
          pending: "https://react-challengue.vercel.app/pending",
        },
        auto_return: "approved",
        notification_url: "https://react-challengue-production.up.railway.app/api/payments/webhook",
        payer: {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.mail,
          identification: {
            type: "DNI",
            number: formData.dni,
          },
          phone: {
            number: formData.number,
            area_code: formData.area_code,
          },
          address: {
            street_name: formData.calle,
            street_number: formData.altura,
            zip_code: formData.codigoPostal,
          },
        },
        shipments: {
          receiver_address: {
            zip_code: formData.codigoPostal,
            state_name: formData.provincia,
            city_name: formData.ciudad,
            street_name: formData.calle,
            street_number: formData.altura,
            country_id: "PE",
          },
        },
      };

      await createPreferenceAsync(body);
    } else {
      console.error("Error: 'cart' no está definido o no es un array");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <DetailNav />
      <div className="checkout-container">
        <div className="cart-preview">
          <div className="cart-display-header" onClick={toggleCart}>
            <span>
              {" "}
              <ShoppingCartIcon />
            </span>
            <span>Show cart</span>
          </div>
          <ul className={`cart-items ${showCart ? "show" : ""}`}>
            {cart?.map((item, i) => {
              return (
                <li key={i} className=" ">
                  <article className=" card-cart">
                    <div className=" close-but">
                      <span onClick={() => handleRemoveFromCart(item.skus.code)}>x</span>
                    </div>
                    <a
                      href={`/${item?.id}-${item?.brand?.replace(/\s+/g, "-")}`}
                      onClick={toggleCart}
                      className="link-card"
                    >
                      <div className="img-card-cont">
                        <img alt={item?.brand} src={item?.image} />
                      </div>

                      <div className="sku-cont">
                        <span>{item.brand}</span>
                        <span>Medida: {item?.skus?.name}</span>
                      </div>
                    </a>
                    <div className="price-section">
                      <div className="price-text">${item?.skus?.price}</div>
                      <div className="quantity-container">
                        <EditItemQuantityButton item={item} type="minus" />
                        <p className="">
                          <span className="">{item?.quantity}</span>
                        </p>
                        <EditItemQuantityButton item={item} type="plus" />
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ///////////////////////////////////// */}

      <div className="form-container">
        <div className="tabs-container ">
          {/* Pestañas */}
          <div className="tabs">
            <button
              onClick={() => handleTabChange("information")}
              className={`  tab-button ${
                activeTab === "information" ? "tab-button1" : "font-semibold"
              }`}
            >
              <span className="navs"> Information</span>
              {/* <AiOutlineRight /> */}
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => handleTabChange("shipping")}
              className={` tab-button ${activeTab === "shipping" ? "tab-button1" : "tab-button2"}`}
            >
              Delivery
            </button>
          </div>

          {/* Contenido del formulario */}
          {activeTab === "information" && (
            <form onSubmit={handleSubmit} className=" info-form">
              <div className=" info-container">
                <h3 className=" info-title">Contact</h3>
                <div className="info-body">
                  <label htmlFor="area_code" className="">
                    Area Code:
                  </label>
                  <input
                    type="text"
                    id="area_code"
                    name="area_code"
                    value={formData.area_code}
                    onChange={handleChange}
                    className=" "
                    required
                  />
                </div>
                <div className="info-body ">
                  <label htmlFor="number" className="">
                    Phone:
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className=""
                    required
                  />
                </div>
                <div className="info-body ">
                  <label htmlFor="telefono" className="">
                    Mail:
                  </label>
                  <input
                    type="email"
                    id="mail"
                    name="mail"
                    onChange={handleChange}
                    className=""
                    required
                  />
                </div>
                <div className="info-body ">
                  <label htmlFor="dni" className="">
                    Id:
                  </label>
                  <input
                    type="dni"
                    id="dni"
                    name="dni"
                    onChange={handleChange}
                    className=""
                    required
                  />
                </div>
              </div>
              <div>
                <h3 className=" info-title">Datos de envio</h3>
                <div className="info-container">
                  <div className="info-body">
                    <label htmlFor="firstname" className="">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      className=""
                      required
                    />
                  </div>
                  <div className="info-body ">
                    <label htmlFor="lastname" className="">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className=""
                      required
                    />
                  </div>
                </div>

                <div className="info-body">
                  <label htmlFor="calle" className="">
                    Street:
                  </label>
                  <input
                    type="text"
                    id="calle"
                    name="calle"
                    value={formData.calle}
                    onChange={handleChange}
                    className=""
                    required
                  />
                </div>
                <div className="info-body ">
                  <label htmlFor="altura" className="">
                    St Number:
                  </label>
                  <input
                    type="text"
                    id="altura"
                    name="altura"
                    value={formData.altura}
                    onChange={handleChange}
                    className=""
                    required
                  />
                </div>
                <div className="md:flex md:gap-2">
                  <div className="info-body ">
                    <label htmlFor="ciudad" className="">
                      City:
                    </label>
                    <input
                      type="text"
                      id="ciudad"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      className=""
                      required
                    />
                  </div>
                  <div className="info-body ">
                    <label htmlFor="provincia" className="">
                      State:
                    </label>
                    <input
                      type="text"
                      id="provincia"
                      name="provincia"
                      value={formData.provincia}
                      onChange={handleChange}
                      className=""
                      required
                    />
                  </div>
                  <div className="info-body ">
                    <label htmlFor="codigoPostal" className="">
                      Postal code:
                    </label>
                    <input
                      type="text"
                      id="codigoPostal"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                      className=""
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="button-form-container">
                <button
                  type="button"
                  onClick={() => handleTabChange("shipping")}
                  className="bg-blue-600 hover:bg-blue-800 md:w-1/3  py-2 px-4 rounded w-full h-16 semibold tracking-wider text-sm semibold"
                >
                  Continuae to devilery
                </button>
              </div>
            </form>
          )}

          {activeTab === "shipping" && (
            <form onSubmit={handleSubmit} className="info-form ">
              <div className=" shipping-container">
                <div className="contacto-container">
                  <div className="">
                    <span className="">Contact</span>
                    <span className="">
                      {formData.area_code} {"-"}
                      {formData.number}
                    </span>
                  </div>
                  <button onClick={() => handleTabChange("information")} className="button-change">
                    change
                  </button>
                </div>

                <div className="contacto-container">
                  <div className="">
                    <span className="">Envio</span>
                    <span className="">
                      {formData.calle}, {formData.altura}, {formData.ciudad}, {formData.provincia},{" "}
                      {formData.codigoPostal}
                    </span>
                  </div>
                  <button onClick={() => handleTabChange("information")} className="button-change">
                    change
                  </button>
                </div>
              </div>

              {preferenceId && (
                <Wallet
                  initialization={{ preferenceId: preferenceId.preferenceId }}
                  customization={{ texts: { valueProp: "smart_option" } }}
                />
              )}
              {!preferenceId && (
                <button
                  color="primary"
                  type="button"
                  onClick={() => handleCreatePreference()}
                  className="button-change payment"
                >
                  Generate payment
                </button>
              )}
              <button
                type="button"
                onClick={() => handleTabChange("information")}
                className="button-change payment"
              >
                <ChevronLeftIcon />
                <span className="">Back to information</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Checkout;
