// pages/api/auth.ts
import * as types from './typesInterface';

export const login = async (email: string, password: string): Promise<types.LoginResponse> => {
  try {
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      if (response.status === 401) {
        const errorData = await response.json();
        throw new Error(errorData.message); 
      } else {
        throw new Error('An error occurred');
      }
    }

    const data: types.LoginResponse = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const register = async (username: string, email: string, password: string): Promise<types.RegisterResponse> => {
  try {
    const response = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    });
    if (!response.ok) {
      throw new Error('Error registering');
    }
    const data: types.RegisterResponse = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

/**
 * Remove the token from the local storage
 */
export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuth = () => {
  console.log(localStorage.getItem('token'));
  return localStorage.getItem('token');

};
