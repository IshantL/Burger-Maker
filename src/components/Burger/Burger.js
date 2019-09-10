import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  // const transformedIngredients = Object.keys(props.ingredients)
  // .map(igKey =>{

  // });
  const ingredients = (a,b) =>{
    let ingredientList =[];
    for (let i =0; i<=b; i++){
      ingredientList.push(<BurgerIngredient type={a} />) 
    }
    return ingredientList;
  }
  const transformedIngredients = Object.entries(props.ingredients)
        .map(item => ingredients(...item));

 
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
