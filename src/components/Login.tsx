import { useState } from 'react';
import { login } from '../pages/api/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await login(email, password);

      // Save the JWT Token to local storage
      localStorage.setItem('token', response.token); 
      
      // Redirect to dashboard or any protected route
      router.push('/posts/Home'); 
    } catch (error:any) {
      setError(error.message); // Set the error message
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red', fontSize: '18px' }}>{error}</p>} 
        <input
          className="login-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={{ color: 'black' }}
        />
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={{ color: 'black' }}
        />
        <button className="login-button" type="submit">Login</button>
        <p className="register-login-text">Not registered yet?</p>
        <Link className='login-in-reg-page' href="/authentication/register">Register in</Link>
      </form>
    </div>
  );
};

export default Login;
