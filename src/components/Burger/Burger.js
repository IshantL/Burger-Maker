import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  // const transformedIngredients = Object.keys(props.ingredients)
  // .map(igKey =>{

  // });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="salad" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
