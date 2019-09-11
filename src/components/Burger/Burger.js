import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  debugger;
  let transformedIngredients = Object.keys(props.ingredients)
  .map( igKey => {
    return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
    } );
} )
.reduce((arr,el) =>{
    return arr.concat(el)
},[])
  //other logic
  // const ingredients = (a,b) =>{
  //   let ingredientList =[];
  //   for (let i =0; i<=b; i++){
  //     ingredientList.push(<BurgerIngredient type={a} />) 
  //   }
  //   return ingredientList;
  // }
  // const transformedIngredients = Object.entries(props.ingredients)
  //       .map(item => ingredients(...item));

  if(transformedIngredients.length ===0){
    transformedIngredients =<p>Please start adding Ingredients</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
