import React from "react";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../../components/Button";
import { AuthenticationInput } from "../../../types/api.types";
import { authenticateUser, authSelector } from "../../../app/auth/authSlice";
import { Card, ErrorCard, FullPageLayout, Input, Label } from "../../../components";
import { LogInCardSpan } from "./styled";
import { H1 } from "../../../styles";
import { useHistory } from "react-router";

export const signinApi = "/auth/authenticate";

export const Signin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {isLoading, error, isAuth} = useSelector(authSelector)
  const dispatch = useDispatch();
  const history = useHistory()
  
  const isValidEmail = (validationEmail: string): boolean =>
  validator.isEmail(email);
  const isValidPassword = (validationPassword: string): boolean =>
  !validator.isEmpty(validationPassword);
  
  const onSubmitDispatch = async (email: string, password: string) => {
    const user: AuthenticationInput = { name: email, password };
    dispatch(authenticateUser(user));
  };

  if(isAuth){
    history.push('/')
  }

  return (
    <FullPageLayout>
      <Card>
      <H1>
          Fill out the form <br />
          and <LogInCardSpan>Sign In</LogInCardSpan>.
        </H1>
        <Input
          name="email"
          placeholder="E-mail"
          type="text"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />

        <Button
          text="Login"
          handleClick={() => onSubmitDispatch(email, password)}
          disabled={!isValidPassword(password) || !isValidEmail(email)}
          isLoading={isLoading}
        />
        {error && (
         <ErrorCard errorMessage={error}/>
        )}
        <Label>
          Account creation suspended.
        </Label>
      </Card>
    </FullPageLayout>
  );
};
