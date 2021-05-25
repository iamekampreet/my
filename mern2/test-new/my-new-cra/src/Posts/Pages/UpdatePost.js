import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FormInput from "../../Shared/Components/UIElements/FormInput";
import {
  validatorMinLength,
  validatorRequire,
} from "../../Shared/utils/validators";
import useFormHook from "../../Shared/hooks/form-hook";
import "./PostsPages.css";

import { DUMMY_POSTS } from "./PostsForUserId"; //Delete when connect to database

const UpdatePost = () => {
  const { formState, inputHandler, updateFormState } = useFormHook(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [isLoading, setIsLoading] = useState(true);

  const postId = useParams().pid;

  useEffect(() => {
    const post = DUMMY_POSTS.find((post) => post.id === postId);

    if (!post) {
      setIsLoading(false);
      return (
        <div className="text-center">
          <h4>
            The post you had requested cannot be found. Please check your
            inputs.
          </h4>
        </div>
      );
    }

    updateFormState(
      {
        title: {
          value: post.title,
          isValid: true,
        },
        description: {
          value: post.description,
          isValid: true,
        },
      },
      true
    );

    setIsLoading(false);
  }, [postId, updateFormState]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    console.log(formState.values);
  };

  return (
    <form className="container myUpdatePostWidth" onSubmit={submitHandler}>
      <FormInput
        label="Title"
        element="input"
        id="title"
        type="text"
        initialValue={formState.values.title.value}
        initialValidity={true}
        invalidText="Please enter a correct Title"
        onChange={inputHandler}
        validatorsArray={[validatorRequire()]}
      />
      <FormInput
        label="Description"
        id="description"
        rows="12"
        initialValue={formState.values.description.value}
        initialValidity={true}
        invalidText="Please enter a valid description. (atleast 6 characters)"
        onChange={inputHandler}
        validatorsArray={[validatorMinLength(6)]}
      />
      <button
        type="submit"
        className={`btn btn-primary ${!formState.isValid && "disabled"}`}
      >
        UPDATE POST
      </button>
    </form>
  );
};

export default UpdatePost;
