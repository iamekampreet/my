import { useState, useEffect, useCallback, useRef } from "react";

const useHttpHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((controller) => controller.abort());
    };
  }, []);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);

      const httpController = new AbortController();
      activeHttpRequests.current.push(httpController);

      try {
        const response = await fetch(url, {
          method,
          headers,
          body,
          signal: httpController.signal,
        });
        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (controller) => controller !== httpController
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message || "Something went wrong. Please try again later");
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => setError(null);

  return { isLoading, error, sendRequest, clearError };
};

export default useHttpHook;
