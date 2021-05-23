import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";
import { AuthContext } from "../../shared/context/auth-context";
import useForm from "../../shared/hooks/form-hook";
import useHttpHook from "../../shared/hooks/http-hook";
import "./PlaceForm.css";

const NewPlace = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpHook();

  const [formState, inputHandler] = useForm(
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
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const authObject = useContext(AuthContext);

  const history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", formState.inputs.title.value);
    formData.append("description", formState.inputs.description.value);
    formData.append("address", formState.inputs.address.value);
    formData.append("creator", authObject.userId);
    formData.append("image", formState.inputs.image.value);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/places",
        "POST",
        formData,
        {
          Authorization: "Bearer " + authObject.token,
        }
      );
      history.push(`/${authObject.userId}/places`);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="place-form" onSubmit={submitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id={"title"}
          type={"text"}
          element={"input"}
          label={"Title"}
          validators={[VALIDATOR_REQUIRE()]}
          error="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id={"description"}
          element={"textarea"}
          label={"Description"}
          validators={[VALIDATOR_MINLENGTH(5)]}
          error="Please enter a valid Description(atleast 5 characters)."
          onInput={inputHandler}
        />
        <Input
          id={"address"}
          type={"text"}
          element={"input"}
          label={"Address"}
          validators={[VALIDATOR_REQUIRE()]}
          error="Please enter a valid address."
          onInput={inputHandler}
        />
        <ImageUpload
          id="image"
          center
          onInput={inputHandler}
          errorText="Please provide an image with .jpg, .jpeg or .png type."
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD PLACE
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewPlace;
