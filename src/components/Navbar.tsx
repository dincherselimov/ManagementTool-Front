import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

/**
 * This should be the navbar
 * For MVP it is done as home page
 * @returns 
 */
export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <section>
      <div className="container">
        <h1>Welcome to the Home Page</h1>
        <div className="button-container">
          {!isAuthenticated ? (
            <>
              <Link href="/authentication/login">
                <button className="login-button-home">Login</button>
              </Link>
              <Link href="/authentication/register">
                <button className="register-button-home">Register</button>
              </Link>
            </>
          ) : (
            <button onClick={logout} className="logout-button-home">Logout</button>
          )}
        </div>
      </div>
    </section>
  );
}
