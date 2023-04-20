import { BsFillCartCheckFill } from "react-icons/bs"
import "./CartWidget.css"
const CartWidget = () => {
  return (
    <div className="container-cart">
    <BsFillCartCheckFill
      style={{
        fontSize: "2rem",
        color: "beige",
      }}
    />
    <div className="bubble-counter">
      <span>0</span>
    </div>
  </div>
  )
}

export default CartWidget