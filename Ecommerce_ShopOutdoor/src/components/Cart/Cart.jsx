import React, { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import './cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, deleteProductById, totalAmount, deleteCart } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <h2 className="empty-cart-message">No hay productos en el carrito</h2>
        <Link to="/" className="empty-cart-link">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cart.map((productCart) => (
        <div key={productCart.id} className="cart-item">
          <img src={productCart.image} alt={productCart.name} />
          <div className="cart-item-info">
            <p>{productCart.name}</p>
            <p>Precio c/u: ${productCart.price.replace(/\./g, '')}</p>
            <p>Cantidad: {productCart.quantity}</p>
            <p className="price">Subtotal: ${productCart.quantity * productCart.price.replace(/\./g, '')}</p>
          </div>
          <button onClick={() => deleteProductById(productCart.id)}>
            Eliminar producto
          </button>
        </div>
      ))}
      <p className="total-price">Precio total: ${totalAmount()}</p>
      <button className="empty-cart-btn" onClick={deleteCart}>
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Cart;

