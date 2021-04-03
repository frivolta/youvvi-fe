import { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const scale = keyframes`
  0% {
    transform: scale(1)
  }
  100% {
    transform: scale(1.2)
  }
`;
