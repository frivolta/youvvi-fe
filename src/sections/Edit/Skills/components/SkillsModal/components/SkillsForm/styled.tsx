import styled from "styled-components";

export const StyledSkillsForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.space.max};
`;

export const StyledSkillsFormInputContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
`;

export const StyledSkillsFormInput = styled.div`
  flex: 1;
  padding: 0 ${(props) => props.theme.space.m};
`;
