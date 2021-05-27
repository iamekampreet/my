import React from "react";

import FormInput from "../../Shared/Components/UIElements/FormInput";
import {
  validatorMinLength,
  validatorRequire,
} from "../../Shared/utils/validators";
import useFormHook from "../../Shared/hooks/form-hook";
import "./PostsPages.css";

const NewPost = () => {
  const { formState, inputHandler } = useFormHook(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    console.log(formState.values);
  };

  return (
    <form className="container myUpdatePostWidth mb-5" onSubmit={submitHandler}>
      <FormInput
        label="Title"
        element="input"
        id="title"
        type="text"
        invalidText="Please enter a correct Title"
        onChange={inputHandler}
        validatorsArray={[validatorRequire()]}
      />
      <FormInput
        label="Description"
        id="description"
        rows="12"
        invalidText="Please enter a valid description. (atleast 6 characters)"
        onChange={inputHandler}
        validatorsArray={[validatorMinLength(6)]}
      />
      <FormInput
        label="Where this photo was taken (It is advised to enter the exact address to get the most precise location on the map):"
        element="input"
        id="address"
        type="text"
        invalidText="Please enter a correct Address"
        onChange={inputHandler}
        validatorsArray={[validatorRequire()]}
      />
      <button
        type="submit"
        className={`btn btn-primary ${!formState.isValid && "disabled"}`}
      >
        ADD POST
      </button>
    </form>
  );
};

export default NewPost;
