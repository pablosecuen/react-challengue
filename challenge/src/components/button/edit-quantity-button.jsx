/* eslint-disable react/prop-types */

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import "./EditItemQuantityButton.css";
import { useCart } from "../../../provider/CartContext";

const EditItemQuantityButton = ({ item, type }) => {
  const { updateQuantity } = useCart();

  const handleQuantityChange = () => {
    if (type === "plus") {
      updateQuantity(item.skus.code, item.quantity + 1);
    } else {
      updateQuantity(item.skus.code, item.quantity - 1);
    }
  };

  return (
    <button
      aria-label={type === "plus" ? "Increase item quantity" : "Reduce item quantity"}
      onClick={handleQuantityChange}
      disabled={type === "minus" && item.quantity === 1}
      className={`${"button"} ${type === "minus" ? "minus" : ""}`}
    >
      {type === "plus" ? <PlusIcon className="icon" /> : <MinusIcon className="icon" />}
    </button>
  );
};

export default EditItemQuantityButton;
