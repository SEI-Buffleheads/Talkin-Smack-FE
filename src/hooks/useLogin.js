import { useState } from "react";
import { loginUser } from "../services/apiCalls";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (userData) => {
    setIsLoading(true);
    setError(null);

    const response = await loginUser(userData);
    if (!response.ok) {
      setIsLoading(false);
      setError(response.error);
    }
    if (!response.error) {
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response));

      dispatch({ type: "LOGIN", payload: response });
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
