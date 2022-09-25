import React, { Fragment, useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealsItem.module.css";
import cartContext from "../../../store/cart-context";
const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(cartContext);
  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      amount: amount,
      name: props.name,
      price: props.price,
    });
    console.log(ctx)

  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealsItem;
