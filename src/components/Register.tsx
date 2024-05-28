// components/Register.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { register } from '../pages/api/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await register(username, email, password);
      router.push('/authentication/login'); // Redirect to login page after successful registration
    } catch (error:any) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input
        className="register-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
        style={{color:'black'}}
      />
      <input
        className="register-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        style={{color:'black'}}
      />
      <input
        className="register-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        style={{color:'black'}}
      />
      <button className="register-button" type="submit">Register</button>
    </form>
  );
};

export default Register;
