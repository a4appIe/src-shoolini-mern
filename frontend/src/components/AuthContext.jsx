import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [data, setData] = useState({ token: null, id: null, name: null });

  useEffect(() => {
    // Check for existing login state in localStorage
    const adminData = localStorage.getItem("admin");
    if (adminData) {
      const parsedData = JSON.parse(adminData);
      setData(parsedData);
      setIsUserLoggedIn(!!parsedData.token);
    }
  }, []);

  const login = (adminData) => {
    localStorage.setItem("admin", JSON.stringify(adminData));
    setData(adminData);
    setIsUserLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("admin");
    setData({ token: null, id: null, name: null });
    setIsUserLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, data, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
