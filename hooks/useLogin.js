import { useState, useEffect } from "react";

import { getSessionValue, setSessionValue } from "../utils/cookies";

export default function useLogin() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const userData = getSessionValue("user");

    if (userData) {
      setUser(userData);
    } else {
      setUser(null);
    }
  }, []);

  function saveUser(userData) {
    setSessionValue("user", userData);
    setUser(userData);
  }

  return { user, saveUser };
}
