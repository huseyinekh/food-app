import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber)
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      {!amountIsValid && <p>please enter correct amount (1-5)</p>}
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
