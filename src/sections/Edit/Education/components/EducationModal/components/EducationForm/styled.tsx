import styled from "styled-components";

export const StyledEducationForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.space.max};
`;

export const StyledEducationFormInputContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
`;

export const StyledEducationFormInput = styled.div`
  flex: 1;
  padding: 0 ${(props) => props.theme.space.m};
`;
