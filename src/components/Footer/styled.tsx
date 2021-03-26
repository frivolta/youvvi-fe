import styled from "styled-components";
import { mediaQueries } from "../../../styles";

export const FooterWrapper = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.fonts.header.size};
  font-weight: ${(props) => props.theme.fonts.header.weight};
  background-color: ${(props) => props.theme.colors.componentBackground};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  padding: ${(props) => props.theme.space.m};
  color: ${(props) => props.theme.colors.lightText};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.lightText};
    text-decoration: none;
    transition: opacity 0.3s;
    padding: 0 ${(props) => props.theme.space.m};
    :hover {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  width: 100%;
  @media ${mediaQueries.tabletMax} {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;
