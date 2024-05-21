// components/Login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../pages/api/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.token); // Assuming response contains a token
      router.push('/dashboard'); // Redirect to dashboard or any protected route
    } catch (error:any) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
