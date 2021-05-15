import React from "react";

import "./Input.css";

const Input = (props) => {
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        isValid={props.isValid}
      />
    ) : (
      <textarea id={props.id}></textarea>
    );

  return (
    <React.Fragment>
      <label htmlFor={props.id}>First name:</label>
      {element}
      {}
    </React.Fragment>
  );
};

export default Input;
