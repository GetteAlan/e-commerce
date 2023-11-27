import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [account, setAccount_] = useState();

  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken);
  };

  const setAccount = (newAccount) => {
    setAccount_(newAccount);
  }

  useEffect(() => {
    if (token && account) {
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('account', JSON.stringify(account));
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('account');
    }
  }, [token, account]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      account,
      setToken,
      setAccount,
    }),
    [token, account]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;