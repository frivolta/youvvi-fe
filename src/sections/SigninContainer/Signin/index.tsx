import React from "react";
import validator from "validator";
import { useDispatch } from "react-redux";

import { Button } from "../../../components/Button";
import { AuthenticationInput } from "../../../types/api.types";
import { authenticateUser } from "../../../app/auth/authSlice";
import { Card, FullPageLayout, Input, Label } from "../../../components";
import { LogInCardSpan } from "./styled";
import { H1 } from "../../../styles";

export const signinApi = "/auth/authenticate";

export const Signin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const isValidEmail = (validationEmail: string): boolean =>
    validator.isEmail(email);
  const isValidPassword = (validationPassword: string): boolean =>
    !validator.isEmpty(validationPassword);

  const onSubmitDispatch = async (email: string, password: string) => {
    const user: AuthenticationInput = { name: email, password };
    dispatch(authenticateUser(user));
  };

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
        />
        {false && (
         <p>error message</p>
        )}
        <Label>
          Account creation suspended.
        </Label>
      </Card>
    </FullPageLayout>
  );
};
