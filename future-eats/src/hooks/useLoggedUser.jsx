import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToFeed } from "../router/Coordinator";
import { token } from "../constants/token";

export const useLoggedUser = () => {
  const history = useHistory();
  useEffect(() => {
    if (token) {
      goToFeed(history);
    }
  }, [history]);
};
