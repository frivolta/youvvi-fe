import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect, RouteProps } from "react-router-dom";
import { authSelector } from "../../app/auth/authSlice";

interface Props extends RouteProps {
  component: any;
}

export const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const { isLoading, isAuth } = useSelector(authSelector);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};
