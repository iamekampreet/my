import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";
import useForm from "../../shared/hooks/form-hook";
import useHttpHook from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./PlaceForm.css";

const UpdatePlace = () => {
  const authObject = useContext(AuthContext);
  const placeId = useParams().placeId;
  const history = useHistory();

  const [identifiedPlace, setIdentifiedPlace] = useState();
  const { error, clearError, sendRequest, isLoading } = useHttpHook();

  const [formState, inputHandler, updateState] = useForm(
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

  useEffect(() => {
    (async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`
        );
        updateState(
          {
            title: {
              value: responseData.place.title,
              isValid: true,
            },
            description: {
              value: responseData.place.description,
              isValid: true,
            },
          },
          true
        );
        setIdentifiedPlace(responseData.place);
      } catch (err) {}
    })();
  }, [sendRequest, placeId, updateState]);

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }
  if (!isLoading && error) {
    return (
      <div className="center">
        <Card>
          <h3>Could not find the place.</h3>
        </Card>
      </div>
    );
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        {
          "content-type": "application/json",
          Authorization: "Bearer " + authObject.token,
        }
      );
      history.push(`/${authObject.userId}/places`);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && identifiedPlace && (
        <form className="place-form" onSubmit={submitHandler}>
          <Input
            id="title"
            type="text"
            element="input"
            validators={[VALIDATOR_REQUIRE()]}
            label="Title"
            error="Please provide a valid Title"
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialIsValid={formState.inputs.title.isValid}
          />
          <Input
            id="description"
            type="text"
            element="input"
            validators={[VALIDATOR_MINLENGTH(5)]}
            label="Description"
            error="Please provide a valid description(atleast 5 characters)"
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialIsValid={formState.inputs.description.isValid}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE PLACE
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdatePlace;
