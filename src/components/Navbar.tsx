import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

/**
 * Navbar component
 * @returns 
 */
export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
          Home
          </Link>
        </div>
        <div className="navbar-menu">
        <Link className='navbar-item' href="/profile/myProfile">Profile</Link>
          {!isAuthenticated ? (
            <>
              <Link className="navbar-item" href="/authentication/login">
                  Login
              </Link>
              <Link className='navbar-item' href="/authentication/register">
                  Register
              </Link>
            </>
          ) : (
            <div onClick={logout} className="navbar-item logout-button">Logout</div>
          )}
        </div>
      </div>
    </nav>
  );
}
