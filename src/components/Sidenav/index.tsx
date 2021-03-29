import React, { isValidElement } from "react";
import { useHistory } from "react-router-dom";
import { SidenavLinkWrapper, SidenavWrapper } from "./styled";

//https://blog.martindidiego.com/compound-components-typescript/
//https://blog.diondreedwards.com/react-compound-component-using-typescript

const getActivePath = (location: string): string =>{
  const activeLocation =location.split("/")
  return `/${activeLocation[activeLocation.length-1]}`
}

interface SidenavTabsState {
  activeTab: string;
  setActiveTab: (label: string) => void;
}

const initialState: SidenavTabsState = {
  activeTab: "",
  setActiveTab: () => console.warn("No active link"),
};

export const SidenavContext = React.createContext<SidenavTabsState>(
  initialState
);

interface SidenavComposition {
  children:
    | React.ReactElement<SideLinkProps>
    | React.ReactElement<SideLinkProps>[];
}

const Sidenav: React.FC<SidenavComposition> = ({ children }) => {
  const history = useHistory()
  const [activeTab, setActiveTab] = React.useState(getActivePath(history.location.pathname));

  const newChildren = React.Children.map(
    children,
    (child: React.ReactElement<SideLinkProps>) => {
      if (isValidElement(child)) {
        return child;
      }
      return null;
    }
  );

  return (
    <SidenavContext.Provider value={{ activeTab, setActiveTab }}>
      <SidenavWrapper>{newChildren}</SidenavWrapper>
    </SidenavContext.Provider>
  );
};

interface SideLinkProps {
  label: string;
  destination: string;
}

const SideLink: React.FC<SideLinkProps> = (props) => {
  const { activeTab, setActiveTab } = React.useContext(SidenavContext);
  const history = useHistory();
  const onClick = () => {
    setActiveTab(props.destination);
    history.push(props.destination);
  };

  return (
    <SidenavLinkWrapper onClick={onClick} isActive={activeTab===props.destination}>{props.label}</SidenavLinkWrapper>
  );
};

export { Sidenav, SideLink };
