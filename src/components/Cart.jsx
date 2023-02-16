import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

const CartProduct = ({ addToCart, thumbnail, id, title, quantity, price }) =>
  (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={() => { addToCart({ id }) }}>+</button>
      </footer>
    </li>
  )

export default function Cart () {
  const cartChekboxId = useId()
  const { addToCart, cart, clearCart } = useCart()

  return (
    <>
      <label htmlFor={cartChekboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartChekboxId} hidden />
      <h2>cart</h2>

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartProduct {...product} addToCart={() => addToCart(product)} key={product.id} />
          ))}
        </ul>
        {cart.length === 0
          ? 'Empty Cart'
          : <button onClick={() => clearCart()}><ClearCartIcon /></button>}
      </aside>
    </>
  )
}
