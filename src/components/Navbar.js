// components/Navigation.js
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../contexts/AuthContext';

function Navbar() {
  const { authenticated, setAuthenticated } = useContext(authContext);

  function handleSignOut() {
    // mock sign out
    setAuthenticated(false);
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {!authenticated && (
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        )}
        {authenticated && (
          <>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
