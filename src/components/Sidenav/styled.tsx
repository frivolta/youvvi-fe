import styled from "styled-components";

interface SidenavLinkWrapperProps{
    isActive: boolean
}

export const SidenavWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  flex: 1 auto;
  padding: ${(props) => props.theme.space.xxl};
  background-color: ${(props) => props.theme.colors.componentBackground};
`;

export const SidenavLinkWrapper = styled.div<SidenavLinkWrapperProps>`
  display: flex;
  width: 100%;
  padding: ${(props) => props.theme.space.l};
  color: ${(props) => props.theme.colors.lightText};
  background-color:${(props) => props.isActive ? props.theme.colors.primaryActive : props.theme.colors.componentBackground};
  border-radius: ${(props) => props.theme.borderRadius.base};
  transition: all .3s;
  color: ${(props) => props.theme.colors.lightText};
  font-weight: ${(props) => props.theme.fonts.default.tertiaryWeight};
  &:hover{
      cursor:pointer;
      box-shadow: ${(props) => props.theme.shadows.default};
      background-color: ${(props) => props.theme.colors.componentHover};
      transition: all .3s;
  }
`;