import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { cartActions } from "../../store/cart";

const HeaderCartButton = () => {
  const dispatch = useDispatch();
  const [btnIsBumped, setBtnIsBumped] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const numberOfItems = useSelector((state) => state.cart.totalQuantity);

  const showCartHandler = () => {
    dispatch(cartActions.showCart());
  };

  const btnClasses = `${classes.button} ${btnIsBumped ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsBumped(true);
    const timer = setTimeout(() => {
      setBtnIsBumped(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
