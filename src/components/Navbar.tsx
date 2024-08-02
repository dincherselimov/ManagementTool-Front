import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';

/**
 * Navbar component
 * @returns 
 */
export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className='logo-name' href="/">ZenTTechnology</Link>
        </div>
        <div className="navbar-menu">
          <Link className="navbar-item" href="/">Features</Link>
          <Link className="navbar-item" href="/">Blog</Link>
          <Link className="navbar-item" href="/">Contact sales</Link>
          <div className="navbar-item dropdown" onClick={toggleDropdown}>
            <span>Apps</span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="/apps/planner">Planner</Link>
                <Link className="dropdown-item" href="/">Inventory</Link>
                <Link className="dropdown-item" href="/">Document Generator</Link>
              </div>
            )}
          </div>
          <Link className="navbar-item" href="/profile/myProfile">Profile</Link>
          {!isAuthenticated ? (
            <>
              <Link className="navbar-item" href="/authentication/login">Login</Link>
              <Link className='navbar-item' href="/authentication/register">Register</Link>
            </>
          ) : (
            <div onClick={logout} className="navbar-item logout-button">Logout</div>
          )}
        </div>
      </div>
    </nav>
  );
}
