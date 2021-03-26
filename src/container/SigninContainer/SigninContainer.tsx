import React from "react";
import validator from "validator";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Heading, variation } from "../../components/Heading/Heading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { AuthenticationInput } from "../../types/api.types";
import { authenticateUser } from "../../app/auth/authSlice";
import { Card, Input, Label } from "../../components";

export const signinApi = "/auth/authenticate";

export const SigninContainer = () => {
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
    <div className="SignupContainer" data-testid="SignupContainer">
      <Card>
        <Heading variation={variation.h1}>
          Use your credentials <br />
          and <span className="primary-color">Login.</span>
        </Heading>
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
          <ErrorMessage data-testid="ErrorMessage">error message</ErrorMessage>
        )}
        <Label>
          Already have an account? <Link to="/signup">Sign up now.</Link>
        </Label>
      </Card>
    </div>
  );
};
