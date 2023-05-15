import { useState, useContext } from 'react';
import { authContext } from '../contexts/AuthContext';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthenticated } = useContext(authContext);

  function handleSubmit(event) {
    event.preventDefault();
    setAuthenticated(true);
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;