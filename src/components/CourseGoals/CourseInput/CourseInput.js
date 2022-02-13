import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isEmptyInput, setIsEmptyInput] = useState(false);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsEmptyInput(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsEmptyInput(true);
      setTimeout(() => {
        setIsEmptyInput(false);
      }, 700);
    } else {
      props.onAddGoal(enteredValue);
      setEnteredValue("");
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
          placeholder={isEmptyInput ? "Empty input!!" : ""}
          style={isEmptyInput ? { backgroundColor: "#EE6666" } : {}}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
