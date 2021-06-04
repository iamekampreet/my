import { useState, useEffect, useCallback } from "react";

let timeoutId;

const useAuthHook = () => {
  const [token, setToken] = useState();
  const [userId, setUserId] = useState(null);
  const [tokenExpiryDate, setTokenExpiryDate] = useState();

  const login = useCallback((uid, token, previousExpiry) => {
    setUserId(uid);
    setToken(token);
    const oneHourFromNow = new Date(new Date().getTime() + 1000 * 60 * 60);
    const tokenExpiry = previousExpiry || oneHourFromNow;
    setTokenExpiryDate(tokenExpiry);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiry: tokenExpiry.toISOString(),
      })
    );
  }, []);
  const logout = useCallback(() => {
    setUserId(null);
    setToken(null);
    setTokenExpiryDate(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUserData &&
      storedUserData.token &&
      new Date(storedUserData.expiry) > new Date()
    ) {
      login(
        storedUserData.userId,
        storedUserData.token,
        new Date(storedUserData.expiry)
      );
    }
  }, [login]);

  useEffect(() => {
    if (tokenExpiryDate) {
      const timeRemaining = tokenExpiryDate.getTime() - new Date().getTime();
      timeoutId = setTimeout(logout, timeRemaining);
    } else {
      clearTimeout(timeoutId);
    }
  }, [tokenExpiryDate, logout]);

  return { token, userId, login, logout };
};

export default useAuthHook;
