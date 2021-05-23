import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "FROMINPUTS":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.id) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.id]: {
            value: action.val,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };
    case "UPDATEVALUES":
      return {
        inputs: action.updatedValues,
        isValid: action.updatedIsValid,
      };
    default:
      return state;
  }
};

const useForm = (initialInputs, initialValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialValidity,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "FROMINPUTS",
      id: id,
      val: value,
      isValid: isValid,
    });
  }, []);

  const updateState = useCallback((updatedValues, updatedIsValid) => {
    dispatch({
      type: "UPDATEVALUES",
      updatedValues: updatedValues,
      updatedIsValid: updatedIsValid,
    });
  }, []);

  return [formState, inputHandler, updateState];
};

export default useForm;
