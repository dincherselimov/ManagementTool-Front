import React from "react";
import Login from "../../components/Login";
import { useAuth } from "@/hooks/useAuth";
import { RedirectIfAuthenticated } from "@/hooks/authRedirect";

const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  RedirectIfAuthenticated(isAuthenticated, '/');

  return (
    <div className='login-container'>
      <div className='login-section'>
        <h1 className='loginTitle'>Welcome to ZenTTech</h1>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
