import React, { useState } from "react";

import FormInput from "../../Shared/Components/UIElements/FormInput";
import {
  validatorMinLength,
  validatorRequire,
  validatorEmail,
} from "../../Shared/utils/validators";
import useFormHook from "../../Shared/hooks/form-hook";
import "./UsersPages.css";

const Authenticate = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const { formState, inputHandler, updateFormState } = useFormHook(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (isLoginMode) {
      updateFormState(
        {
          ...formState.values,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    } else {
      updateFormState(
        {
          ...formState.values,
          name: null,
        },
        formState.values.email.isValid && formState.values.password.isValid
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    console.log(formState.values);
  };

  return (
    <form className="container myUpdatePostWidth mb-5" onSubmit={submitHandler}>
      {!isLoginMode && (
        <FormInput
          label="Name"
          element="input"
          id="name"
          type="text"
          invalidText="Please enter a correct Name"
          onChange={inputHandler}
          validatorsArray={[validatorRequire()]}
        />
      )}
      <FormInput
        label="E-mail"
        element="input"
        id="email"
        type="text"
        invalidText="Please enter a correct E-mail address"
        onChange={inputHandler}
        validatorsArray={[validatorEmail()]}
      />
      <FormInput
        label="Password"
        element="input"
        id="password"
        type="text"
        invalidText="Please enter a correct Password (atleast 6 characters)."
        onChange={inputHandler}
        validatorsArray={[validatorMinLength(6)]}
      />
      <button
        type="submit"
        className={`my-2 btn btn-primary ${!formState.isValid && "disabled"}`}
      >
        {isLoginMode ? "LOGIN" : "SIGNUP"}
      </button>
      <button
        type="button"
        className={`btn btn-info my-2 float-end`}
        onClick={switchModeHandler}
      >
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"} MODE
      </button>
    </form>
  );
};

export default Authenticate;
