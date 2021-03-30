import React, { FC } from "react";
import { StyledCard, StyledCardContent } from "./styled";

interface Props {
  children: React.ReactNode;
  height?: string;
  margin?: string;
  size?: "small" | "regular";
  handleCLick?: () => void;
  backgroundColor?: string;
  testId?: string
}

export const Card: FC<Props> = ({
  children,
  height,
  margin,
  size,
  backgroundColor,
  testId
}: Props) => {
  return (
    <StyledCard
      height={height}
      margin={margin}
      backgroundColor={backgroundColor}
      data-testid={testId}
    >
      <StyledCardContent size={size}>{children}</StyledCardContent>
    </StyledCard>
  );
};
