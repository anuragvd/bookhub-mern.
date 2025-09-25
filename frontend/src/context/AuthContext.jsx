import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const setSession = (u, token) => {
    localStorage.setItem('user', JSON.stringify(u));
    localStorage.setItem('token', token);
    setUser(u);
  };
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };
  return <AuthContext.Provider value={{ user, setSession, logout }}>{children}</AuthContext.Provider>;
}
