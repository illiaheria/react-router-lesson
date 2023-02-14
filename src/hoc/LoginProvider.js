import { useState, createContext } from "react";

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const changeLoginStatus = (value) => {
    setIsLoggedIn(value);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, changeLoginStatus }}>
      {children}
    </LoginContext.Provider>
  );
};
