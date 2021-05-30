import { useCallback, useReducer } from "react";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "ONINPUT":
      let formIsValid = true;
      for (const value in state.values) {
        if (state.values[value] === null) {
          continue;
        }
        if (value === action.id) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.values[value].isValid;
        }
      }
      return {
        values: {
          ...state.values,
          [action.id]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };
    case "ONUPDATE":
      return {
        values: action.values,
        isValid: action.isValid,
      };
    default:
      return state;
  }
};

const useFormHook = (initialValues, initialValidity) => {
  const [formState, dispatch] = useReducer(inputReducer, {
    values: initialValues,
    isValid: initialValidity,
  });

  const inputHandler = (id, value, isValid) => {
    dispatch({
      type: "ONINPUT",
      id,
      value,
      isValid,
    });
  };

  const updateFormState = useCallback((updatedValues, updatedValidity) => {
    dispatch({
      type: "ONUPDATE",
      values: updatedValues,
      isValid: updatedValidity,
    });
  }, []);

  return { formState, inputHandler, updateFormState };
};

export default useFormHook;
