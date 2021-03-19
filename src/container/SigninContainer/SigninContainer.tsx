import React from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Label } from "../../components/Label/Label";
import { Heading, variation } from "../../components/Heading/Heading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import axios from "axios";
import { AuthenticationOutput } from "../../types/api.types";
import { apiAddress } from "../../api";
import { useAuth } from "../../context/useAuthContext";

export const signinApi = "/auth/authenticate";

export const SigninContainer = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { isAuth, setUser } = useAuth();
  let history = useHistory();

  const isValidEmail = (validationEmail: string): boolean =>
    validator.isEmail(email);
  const isValidPassword = (validationPassword: string): boolean =>
    !validator.isEmpty(validationPassword);

  const onSubmitDispatch = async (email: string, password: string) => {
    const response = await axios.post<AuthenticationOutput>(
      apiAddress.AUTHENTICATE,
      {
        name: email,
        password,
      }
    );
    if (response.data.ok && response.data.token && response.data.userId) {
      setUser({ id: response.data.userId, token: response.data.token });
    }
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
