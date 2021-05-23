import React, { useRef, useState, useEffect } from "react";

import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = (props) => {
  const inputRef = useRef();

  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImageUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedFile = (event) => {
    let isValidVariable;
    let imageUploaded;
    if (event.target.files && event.target.files.length === 1) {
      imageUploaded = event.target.files[0];
      setFile(imageUploaded);
      setIsValid(true);
      isValidVariable = true;
    } else {
      setIsValid(false);
      isValidVariable = false;
    }
    props.onInput(props.id, imageUploaded, isValidVariable);
  };

  const inputButtonHandler = (event) => {
    inputRef.current.click();
  };
  return (
    <div className="form-control">
      <input
        ref={inputRef}
        type="file"
        id={props.id}
        name="Image"
        accept=".jpg,.jpeg,.png"
        style={{ display: "none" }}
        onChange={pickedFile}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {imageUrl && isValid && <img src={imageUrl} alt="Preview" />}
          {!imageUrl && <p>Please upload a profile photo.</p>}
        </div>
        <Button type="button" onClick={inputButtonHandler}>
          UPLOAD IMAGE
        </Button>
        {!isValid && <p>{props.errorText}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;
