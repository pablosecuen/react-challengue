import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import Navbar from "../../components/navbar";
import { useProductContext } from "../../../provider/Context";
import { useLocation } from "react-router-dom";
import "./success.css";

const Success = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paymentId = searchParams.get("payment_id");

  const { fetchPaymentInfoById, paymentInfo } = useProductContext();
  const headerRef = useRef(null);

  useEffect(() => {
    if (paymentId) {
      fetchPaymentInfoById(paymentId);
    }
  }, []);

  const handleContinueShopping = () => {
    window.location.href = "/";
  };

  const handleSaveSnapshot = () => {
    if (headerRef.current) {
      html2canvas(headerRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = `Comprobante Neo Tech ${paymentInfo.id}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };
  console.log(paymentInfo);
  return (
    <div className="success-container">
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col">
            <p className="text-md">Beer e-Commerce</p>
            <a href="https://react-challengue.vercel.app/" className="text-small text-default-500">
              react-challengue.vercel.app
            </a>
          </div>
          {paymentInfo ? (
            <div className="min-w-96 max-w-screen-xl" ref={headerRef}>
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-md">Beer e-Commerce</p>
                  <a
                    href="https://react-challengue.vercel.app/"
                    className="text-small text-default-500"
                  >
                    react-challengue.vercel.app
                  </a>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex flex-col gap-4 ">
                  <h1>Purchase was Succesfull!</h1>
                  <p>Payment details:</p>
                  <ul>
                    <li>Payment ID: {paymentInfo.id}</li>
                    <li>Date of Approval: {paymentInfo.date_approved}</li>
                    <li>Status: {paymentInfo.status}</li>
                  </ul>
                  <p>Purchase details:</p>
                  <ul className="flex  gap-4 flex-wrap">
                    {paymentInfo.additional_info.items.map((product, index) => (
                      <li key={index} className="border  rounded-md p-4">
                        <strong>Product #{index + 1}</strong>
                        <ul>
                          <li>Brand: {product.title}</li>
                          <li>id: {product.id}</li>
                          <li>Cantidad: {product.quantity}</li>
                          <li>Precio Unitario:$ {product.price}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                  <p>Total Pagado: $ {paymentInfo.transaction_amount}</p>
                </div>
              </div>
              <hr />
              <div className="flex gap-3 mx-auto justify-center">
                <button onClick={handleContinueShopping}>Continuar Comprando</button>
                <button onClick={handleSaveSnapshot}>Guardar Comprobantes</button>
              </div>
            </div>
          ) : (
            <p>Cargando información del pago...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Success;
