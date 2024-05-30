// hooks/useAuth.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { login, register, logout, isAuth } from '../pages/api/auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    };

    checkAuth();
  }, []);

  const loginHandler = async (email:string, password:string) => {
    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.token);
      setIsAuthenticated(true);
      router.push('/');
    } catch (error:any) {
      console.error('Login failed:', error.message);
    }
  };

  const registerHandler = async (username:string, email:string, password:string) => {
    try {
      await register(username, email, password);
      router.push('/login');
    } catch (error:any) {
      console.error('Registration failed:', error.message);
    }
  };

  const logoutHandler = () => {
    logout();
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    router.push('/');
  };

  return { isAuthenticated, login: loginHandler, register: registerHandler, logout: logoutHandler };
};
