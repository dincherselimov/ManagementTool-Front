// components/Register.js
import { useState } from 'react';
import { register } from '../pages/api/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await register(username, email, password);
      router.push('/authentication/login');
    } catch (error:any) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-section">
        <h2 className="register-title">Welcome to ZenTTech</h2>
        <p className='register-subtitle'>Glad to see you join our community!</p>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            className="register-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            className="register-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="register-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button className="register-button" type="submit">Register</button>
          <p className="register-login-text"> Already have an account?</p>
          <Link className='login-in-reg-page' href="/authentication/login">Log in</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
