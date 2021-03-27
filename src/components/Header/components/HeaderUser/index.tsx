import { AuthState } from "../../../../app/auth/authSlice";
import { CurrentUser } from "../../../../types/entities.types";
import { StyledHeaderUser } from "./styled";

interface Props {
  user: CurrentUser;
}

export const HeaderUser = ({ user }: Props) => {
  return <StyledHeaderUser>{user.userId}</StyledHeaderUser>;
};
