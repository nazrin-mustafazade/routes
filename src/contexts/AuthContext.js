import { createContext, useState } from 'react';

export const authContext = createContext();

function AuthContext({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <authContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContext;
