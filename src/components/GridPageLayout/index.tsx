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
          <SideLink label="General informations" destination="/general" />
          <SideLink label="Education" destination="/education" />
          <SideLink
            label="Working experience"
            destination="/working-experiences"
          />
          <SideLink label="Personal skills" destination="/personal-skills" />
        </Sidenav>
      </GridSidebar>
      <GridMain>{children}</GridMain>
      <GridFooter footerContent={footerContent} />
    </GridContainer>
  );
};
