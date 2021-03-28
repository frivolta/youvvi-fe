import React from "react";
import { FooterDesktop, FooterMobile } from "./components";
import { FooterContainer, FooterWrapper } from "./styled";

interface Props {
  footerContent: React.ReactChild
}

export const Footer = ({footerContent}:Props) => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterDesktop footerContent={footerContent}/>
        <FooterMobile/>
      </FooterWrapper>
    </FooterContainer>
  );
};
