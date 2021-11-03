import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meal ordering app</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="Food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
