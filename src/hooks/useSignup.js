import { useState } from "react";
import { createUser } from "../services/apiCalls";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (userData) => {
    setIsLoading(true);
    setError(null);

    const response = await createUser(userData);
    if (!response.ok) {
      setIsLoading(false);
      setError(response.error);
    }
    if (!response.error) {
      console.log(response)
      localStorage.setItem("user", JSON.stringify(response));

      dispatch({ type: "LOGIN", payload: response });
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
