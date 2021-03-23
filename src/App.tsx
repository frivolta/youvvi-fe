import React from "react";
import setAuthToken from "./app/helpers/auth";
import jwt_decode from "jwt-decode";
import { Routes } from "./Routes";
import { AccessTokenPayload } from "./types/common.types";
import { useDispatch } from "react-redux";
import { setAuthManually, setLogOut } from "./app/auth/authSlice";
import { CurrentUser } from "./types/entities.types";

//Routes components
export const App: React.FC = () => {
  const [isAppLoading, setIsAppLoading] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    checkAuthToken();
  }, []);

  // Authentication logic: Check if jwt token is present in localstorage, if not, logout otherwise add it to redux state
  const checkAuthToken = () => {
    setIsAppLoading(true);
    if (localStorage.getItem("yuvviToken")) {
      setAuthToken(localStorage.yuvviToken);
      const decoded: AccessTokenPayload = jwt_decode(localStorage.yuvviToken);
      const currentUser: CurrentUser = {
        token: localStorage.yuvviToken,
        userId: decoded.sub,
      };
      dispatch(setAuthManually(currentUser));
    } else {
      dispatch(setLogOut());
    }
    setIsAppLoading(false);
  };

  if (isAppLoading) {
    return <p>Loading...</p>;
  }
  return <Routes />;
};
