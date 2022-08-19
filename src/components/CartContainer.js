import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";

export default function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => {
    return store.cart;
  });
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((el) => {
          return <CartItem key={el.id} {...el} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total}</span>
          </h4>
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </button>
        </div>
      </footer>
    </section>
  );
}
