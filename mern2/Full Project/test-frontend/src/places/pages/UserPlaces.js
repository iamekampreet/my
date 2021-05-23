import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import useHttpHook from "../../shared/hooks/http-hook";

const UserPlaces = () => {
  const { error, clearError, isLoading, sendRequest } = useHttpHook();
  const userId = useParams().userId;
  const [placesArray, setPlacesArray] = useState();

  useEffect(() => {
    (async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`
        );
        setPlacesArray(responseData.places);
      } catch (err) {}
    })();
  }, [sendRequest, userId]);

  const placeDeleteHandler = (deletedPlaceId) => {
    setPlacesArray((prevArray) =>
      prevArray.filter((place) => place.id !== deletedPlaceId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && placesArray && (
        <PlaceList items={placesArray} onPlaceDelete={placeDeleteHandler} />
      )}
    </React.Fragment>
  );
};

export default UserPlaces;
