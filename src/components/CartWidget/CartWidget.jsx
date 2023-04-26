import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {

  const { getTotalQuantity } = useContext(CartContext)

  let total = getTotalQuantity()

  return (
    <Link to="/cart">
      <div className="container-cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "beige",
          }}
        />
        <div className="bubble-counter">
          <span>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
