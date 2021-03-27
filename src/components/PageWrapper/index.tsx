import React from "react";
interface Props {
  children: React.ReactChild;
}
export const PageWrapper = ({ children }: Props) => {

  return <>{children}</>;
};
