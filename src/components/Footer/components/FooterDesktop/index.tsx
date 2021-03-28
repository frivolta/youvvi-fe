import React from "react";
import { StyledFooterDesktop } from "./styled";

interface Props {
  footerContent: React.ReactChild
}

export const FooterDesktop = ({footerContent}:Props) => {
  return <StyledFooterDesktop>{footerContent}</StyledFooterDesktop>;
};
