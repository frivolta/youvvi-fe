import React, { FC, useState } from "react";
import { useFormik } from "formik";
import {
  FullPageLayout,
  Input,
  Button,
  Label,
  Card,
} from "../../components";
import { LogInCardSpan, BrandLogo } from "./styled";
import { H1 } from "../../styles/typography";
import { Link, useHistory } from "react-router-dom";
import brandLogo from "./assets/images/brand.svg";
import { LogInSchema } from "../../validation";

type LogInFormData = {
    email: string;
    password: string;
  }

const initialFormValues: LogInFormData = {
  email: "",
  password: "",
};

export const LogIn: FC = () => {
// if already logged in redirectToDashboardPage
    const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{message: string} | undefined>(undefined);
  const history = useHistory();

  const formik = useFormik<LogInFormData>({
    initialValues: { ...initialFormValues },
    validationSchema: LogInSchema,
    onSubmit: async ({ email, password }) => {
      console.log('login')
    },
  });

  const redirectToDashboardPage = React.useCallback(() => {
    history.push("/preview");
  }, [history]);

  const errorElement =
    error && error.message ? (
      <Label>{error.message}</Label>
    ) : null;

  return (
    <FullPageLayout>
      <Card>
        <BrandLogo src={brandLogo} />
        <H1>
          Fill out the form <br />
          and <LogInCardSpan>Sign In</LogInCardSpan>.
        </H1>
        <form onSubmit={formik.handleSubmit} data-testid="LogInForm">
          <Input
            name="email"
            placeholder="yourname@company.com"
            type="text"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.email}
            label="Email"
            hasErrors={
              formik.touched.email && formik.errors.email ? true : false
            }
            errorMessage={formik.errors.email}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            label="Password"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.password}
            hasErrors={
              formik.touched.password && formik.errors.password ? true : false
            }
            errorMessage={formik.errors.password}
          />
          {errorElement}
          <Button
            text="Sign in"
            disabled={!formik.isValid || !formik.dirty || isLoading}
            margin="32px 0 16px 0"
            isLoading={isLoading}
            data-testid="SubmitButton"
          />
          <Label>
            Don&apos;t have an account yet? <Link to="/signup">Sign up.</Link>
          </Label>
        </form>
      </Card>
    </FullPageLayout>
  );
};