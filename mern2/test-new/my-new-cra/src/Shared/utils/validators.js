const validatorRequire = () => ({ type: "require" });
const validatorEmail = () => ({ type: "email" });
const validatorMin = (val) => ({ type: "min", val });
const validatorMax = (val) => ({ type: "max", val });
const validatorMinLength = (val) => ({ type: "minLength", val });
const validatorMaxLength = (val) => ({ type: "maxLength", val });
const validatorFile = () => ({ type: "file" });

const validate = (input, arrayOfValidators) => {
  let isValid = true;
  for (const validator of arrayOfValidators) {
    if (validator.type === "require") {
      isValid = isValid && input.trim().length > 0;
    } else if (validator.type === "min") {
      isValid = isValid && +input >= validator.val;
    } else if (validator.type === "max") {
      isValid = isValid && +input <= validator.val;
    } else if (validator.type === "minLength") {
      isValid = isValid && input.trim().length >= validator.val;
    } else if (validator.type === "maxLength") {
      isValid = isValid && input.trim().length <= validator.val;
    } else if (validator.type === "file") {
      isValid = isValid && input !== "";
    } else if (validator.type === "email") {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //Removed two characters: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\
      isValid = isValid && regex.test(String(input).toLowerCase());
    }
  }
  return isValid;
};

export {
  validate,
  validatorRequire,
  validatorEmail,
  validatorMin,
  validatorMax,
  validatorMinLength,
  validatorMaxLength,
  validatorFile,
};
