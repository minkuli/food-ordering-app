import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";
import { cartActions } from "../../store/cart";
import { uiActions } from "../../store/ui";
import { sendOrder } from "../../store/cart-actions";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalAmount = `${useSelector((state) => state.cart.totalAmount).toFixed(
    2
  )}`;
  const hasItems = items.length > 0;
  const isCheckout = useSelector((state) => state.ui.isCheckout);
  const isSubmitting = useSelector((state) => state.ui.isSubmitting);
  const didSubmit = useSelector((state) => state.ui.didSubmit);

  const orderHandler = () => {
    dispatch(uiActions.checkOut());
  };

  const hideCartHandler = () => {
    dispatch(cartActions.hideCart());
  };

  const submitOrderHandler = (userData) => {
    dispatch(sendOrder(userData, items, didSubmit));
  };

  const closeOrderHandler = () => {
    hideCartHandler();
    dispatch(cartActions.clearCart());
    dispatch(uiActions.orderSubmitted());
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={hideCartHandler}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={hideCartHandler} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order.</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={closeOrderHandler}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={hideCartHandler}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
