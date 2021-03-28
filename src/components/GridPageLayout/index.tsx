import React from "react";
import { CurrentUser } from "../../types/entities.types";
import { SideLink, Sidenav } from "../Sidenav";
import {
  GridContainer,
  GridHeader,
  GridMain,
  GridFooter,
  GridSidebar,
} from "./styled";

interface Props {
  children: React.ReactNode;
  user: CurrentUser;
  sectionName: string;
  footerContent: string;
}

export const GridPageLayout = ({
  children,
  user,
  sectionName,
  footerContent,
}: Props) => {
  return (
    <GridContainer>
      <GridHeader isAuthorized={!!user} user={user} sectionName={sectionName} />
      <GridSidebar>
        <Sidenav>
          <SideLink label="bio" destination="/bio" />
        </Sidenav>
      </GridSidebar>
      <GridMain>{children}</GridMain>
      <GridFooter footerContent={footerContent} />
    </GridContainer>
  );
};
