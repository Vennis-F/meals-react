import React from "react";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from "./Header.module.css";
import mealImg from "../../../assets/meals.jpg";

interface HeaderProps {
  onShowCart: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCartModal={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="A table full of food!" />
      </div>
    </>
  );
};

export default Header;
