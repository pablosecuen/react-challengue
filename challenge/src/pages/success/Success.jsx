import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import Navbar from "../../components/navbar";
import { useProductContext } from "../../../provider/Context";
import { Link, useLocation } from "react-router-dom";
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

  return (
    <div className="success-container">
      <Navbar />
      <div className="success-content">
        <div className="success-inner">
          <div className="brand-info">
            <p className="brand-name">Beer e-Commerce</p>
            <Link to="https://react-challengue.vercel.app/" className="brand-link">
              react-challengue.vercel.app
            </Link>
          </div>
          {paymentInfo ? (
            <div className="payment-details">
              <h1>Purchase was Succesfull!</h1>
              <p>
                <strong>Payment details:</strong>
              </p>
              <ul>
                <li>
                  <strong>Payment ID: </strong>
                  {paymentInfo.id}
                </li>

                <li>
                  <strong>Status: </strong>
                  {paymentInfo.status}
                </li>
              </ul>
              <p>
                <strong>Purchase details:</strong>
              </p>
              <ul className="product-list">
                {paymentInfo.additional_info.items.map((product, index) => (
                  <li key={index} className="product-item">
                    <p>
                      {" "}
                      <strong>Product #{index + 1}</strong>
                    </p>
                    <ul className="product-props">
                      <li>Brand: {product.title}</li>
                      <li>id: {product.id}</li>
                      <li>Quantity: {product.quantity}</li>
                      <li>Unit Price: $ {product.price}</li>
                    </ul>
                  </li>
                ))}
              </ul>
              <p>
                <strong>Total Paid: $ {paymentInfo.transaction_amount}</strong>
              </p>
              <div className="button-container">
                <button onClick={handleContinueShopping}>Continue Shopping</button>
                <button onClick={handleSaveSnapshot}>Save Receipts</button>
              </div>
            </div>
          ) : (
            <p>
              <strong>Loading payment information...</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Success;
