import React, { useState } from "react";

export interface User {
  id: string | null;
  token: string | null;
}

interface ProviderProps {
  children: React.ReactChild;
}

interface AuthState {
  isAuth: boolean;
  user: User;
  setUser: (user: User) => void;
}

const initialState: AuthState = {
  isAuth: false,
  user: {
    id: null,
    token: null,
  },
  setUser: () => console.warn("No user defined"),
};

const AuthContext = React.createContext<AuthState>(initialState);

const AuthProvider = ({ children }: ProviderProps) => {
  const [isAuth, setIsAuth] = useState(initialState.isAuth);
  const [user, setUser] = useState(initialState.user);

  React.useEffect(() => {
    // If both user and token set isAuth to true
    setIsAuth(!(user.id && user.token));
  }, [user]);

  return (
    <AuthContext.Provider value={{ isAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
