import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } = useContext(CartContext)

  let total = getTotalPrice()

  const clearCartWithAlert = ()=>{
    Swal.fire({
      title: 'Seguro que quieres eliminar todo el carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'si, eliminar',
      denyButtonText: `no, no eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Se limpio el carrito', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('el carrito queda como estaba', '', 'error')
      }
    })
  }

  return (
    <div>
        <Cart total={total} clearCartWithAlert={clearCartWithAlert} cart={cart}  deleteProductById={deleteProductById} />
    </div>
  )
}

export default CartContainer