import styled from "styled-components";
import { mediaQueries } from "../../../../styles";

export const StyledHeaderUser = styled.div`
  padding: ${(props) => props.theme.space.xl};
  @media ${mediaQueries.tabletMax} {
    display: none;
  }
`;
