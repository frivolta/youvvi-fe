import React from "react";
import { CurrentUser } from "../../types/entities.types";
import { GridContainer, GridHeader, GridMain, GridFooter } from "./styled";

interface Props {
  children: React.ReactNode;
  user: CurrentUser;
  sectionName: string;
  footerContent: string;
}

export const GridPageLayout = ({ children, user, sectionName, footerContent }: Props) => {
  return (
    <GridContainer>
      <GridHeader isAuthorized={!!user} user={user} sectionName={sectionName} />
      <GridMain>{children}</GridMain>
      <GridFooter footerContent={footerContent}/>
    </GridContainer>
  );
};
