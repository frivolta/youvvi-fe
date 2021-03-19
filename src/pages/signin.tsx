import axios from "axios";
import React from "react";
import { apiAddress } from "../api";
import { SigninContainer } from "../container/SigninContainer/SigninContainer";
import { useAuth } from "../context/useAuthContext";
import { EducationOutput } from "../types/api.types";

export const SigninPage: React.FC = () => {
  return <SigninContainer />;
};
