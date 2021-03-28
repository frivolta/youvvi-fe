import React from "react";
import { Link } from "react-router-dom";
import { CurrentUser } from "../../types/entities.types";
import brandLogo from "./assets/images/brand.svg";
import { HeaderMobile, HeaderUser } from "./components";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
} from "./styled";

interface Props {
  isAuthorized: boolean;
  sectionName: string;
  user?: CurrentUser;
  fixedTop?: boolean;
}

export const Header: React.FC<Props> = ({ fixedTop, user, sectionName }) => {
  const appMenuElement = user ? (
    <>
      <HeaderMenu data-testid="HeaderMenu">
        <Link to="/edit">Resume setup</Link>
        <Link to="/preview">Preview</Link>
      </HeaderMenu>
      <HeaderMobile data-testid="HeaderMobile" sectionName={sectionName} />
    </>
  ) : null;

  const userMenuElement = user ? <HeaderUser user={user} /> : null;

  return (
    <HeaderWrapper fixedTop={fixedTop}>
      <HeaderContainer>
        <Link to="/">
          <HeaderLogo src={brandLogo} alt="Budgety" data-testid="HeaderLogo" />
        </Link>
        {appMenuElement}
      </HeaderContainer>
      {userMenuElement}
    </HeaderWrapper>
  );
};
