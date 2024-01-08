import React, { useState, useRef } from "react";
import "./Form.css";
import ErrorModal from "./ErrorModal";
import Button from "./Button";

const Form = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid",
        message: "Please enter a valid name and age(non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter an age > 0",
      });
      return;
    }
    const personData = {
      ageEntered: enteredUserAge,
      nameEntered: enteredUserName,
    };

    props.newDataHandler(personData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" ref={nameInputRef}></input>
        <label htmlFor="age">Age(Years)</label>
        <input type="number" ref={ageInputRef}></input>
        <Button type="submit">Add User</Button>
      </form>
    </React.Fragment>
  );
};

export default Form;
