import React, { useState } from "react";

import { validate } from "../../utils/validators";

const FormInput = (props) => {
  const [isValid, setIsValid] = useState(props.initialValidity || false);
  const [isTouched, setIsTouched] = useState(false);

  const onInput = (event) => {
    const value = event.target.value;
    const isValid = validate(value, props.validatorsArray);
    setIsValid(isValid);
    props.onChange(props.id, value, isValid);
  };

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        className={`form-control ${
          isTouched && `${isValid ? "is-valid" : "is-invalid"}`
        }`}
        id={props.id}
        defaultValue={props.initialValue}
        onChange={onInput}
        onBlur={() => setIsTouched(true)}
      />
    ) : (
      <textarea
        className={`form-control ${
          isTouched && `${isValid ? "is-valid" : "is-invalid"}`
        }`}
        defaultValue={props.initialValue}
        rows={props.rows || "3"}
        id={props.id}
        onChange={onInput}
        onBlur={() => setIsTouched(true)}
      />
    );

  return (
    <div className=" mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      {element}
      <div className="valid-feedback">Looks Good!</div>
      <div className="invalid-feedback">{props.invalidText}</div>
    </div>
  );
};

export default FormInput;
