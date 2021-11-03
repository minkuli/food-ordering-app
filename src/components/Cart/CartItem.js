import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const price = `$${props.price.toFixed(2)}`;
  const cartItemRemoveHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };

  const cartItemAddHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        name: props.name,
        amount: 1,
        price: props.price,
      })
    );
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={cartItemRemoveHandler}>−</button>
        <button onClick={cartItemAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
