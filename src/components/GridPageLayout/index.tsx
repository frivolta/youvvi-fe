import React from "react";
import { AuthState } from "../../app/auth/authSlice";
import { CurrentUser } from "../../types/entities.types";
import { GridContainer, GridHeader, GridMain, GridFooter } from "./styled";

interface Props {
  children: React.ReactNode;
  user: CurrentUser;
  sectionName: string;
}

export const GridPageLayout = ({ children, user, sectionName }: Props) => {
  return (
    <GridContainer>
      <GridHeader isAuthorized={!!user} user={user} sectionName={sectionName} />
      <GridMain>{children}</GridMain>
      <GridFooter />
    </GridContainer>
  );
};
