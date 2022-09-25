import React, { useContext } from "react";
import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context"
const HeaderButton = (props) => {
  
  const ctx=useContext(cartContext)
  const numberOfItems=ctx.items.reduce((number,item)=>{
    return number+item.amount
  },0)
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
     
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderButton;
