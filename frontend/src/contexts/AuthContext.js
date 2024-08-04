import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('authData');
    if (data) setAuthData(JSON.parse(data));
  }, []);

  const register = async (username, email, password) => {
    try {
      console.log({ username, email, password }); // Log the data to debug
      const response = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      setAuthData(response.data);
      localStorage.setItem('authData', JSON.stringify(response.data));
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed. Please check the console for more details.');
    }
  };
  

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setAuthData(response.data);
      localStorage.setItem('authData', JSON.stringify(response.data));
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed. Please check the console for more details.');
    }
  };

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem('authData');
  };

  return (
    <AuthContext.Provider value={{ authData, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
