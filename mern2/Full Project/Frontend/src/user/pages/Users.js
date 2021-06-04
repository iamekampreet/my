import React, { useState, useEffect } from "react";

import UserList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import useHttpHook from "../../shared/hooks/http-hook";

const Users = () => {
  const [loadedData, setLoadedData] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpHook();

  useEffect(() => {
    (async () => {
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users"
        );
        setLoadedData(response.users);
      } catch (err) {}
    })();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
      <ErrorModal onClear={clearError} error={error} />
      {!isLoading && loadedData && <UserList items={loadedData} />}
    </React.Fragment>
  );
};

export default Users;
