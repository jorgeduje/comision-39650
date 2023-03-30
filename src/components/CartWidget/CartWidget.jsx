import { BsFillCartCheckFill } from "react-icons/bs"

const CartWidget = () => {
  return (
    <div>
        <BsFillCartCheckFill size={30} />
        <span>0</span>
    </div>
  )
}

export default CartWidget