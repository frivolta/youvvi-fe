import React, { isValidElement } from "react";
import { Link } from "react-router-dom";

//https://blog.martindidiego.com/compound-components-typescript/
//https://blog.diondreedwards.com/react-compound-component-using-typescript

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
  const [activeTab, setActiveTab] = React.useState("");

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
      {newChildren}
    </SidenavContext.Provider>
  );
};

interface SideLinkProps {
  label: string;
  destination: string;
}

const SideLink: React.FC<SideLinkProps> = (props) => {
  const { activeTab, setActiveTab } = React.useContext(SidenavContext);

  return (
    <div className={activeTab === props.label ? "isActive" : "notActive"}>
      <div onClick={() => setActiveTab(props.label)}>
        {props.label}
      </div>
    </div>
  );
};

export { Sidenav, SideLink };
