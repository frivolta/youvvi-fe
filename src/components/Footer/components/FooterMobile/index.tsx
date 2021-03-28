import { StyledFooterMobile, SyledFooterIcon } from "./styled";
import { spaceUnit } from "../../../../styles";
import { IoIosList as ExpensesList } from "react-icons/io";
import { IoIosKeypad as Dashboard } from "react-icons/io";
import { Link } from "react-router-dom";

const ICONS_SIZE = spaceUnit * 2;

export const FooterMobile = () => {
  return (
    <StyledFooterMobile>
      <SyledFooterIcon>
        <Link to="/edit">
          <Dashboard size={ICONS_SIZE} />
        </Link>
      </SyledFooterIcon>
      <SyledFooterIcon>
        <Link to="/preview">
          <ExpensesList size={ICONS_SIZE} />
        </Link>
      </SyledFooterIcon>
    </StyledFooterMobile>
  );
};
