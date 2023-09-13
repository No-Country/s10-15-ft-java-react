import { createContext, useReducer } from 'react';
import userReducer, { initialUser } from './userReducer';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [data, dispatch] = useReducer(userReducer, initialUser);
  return (
    <UserContext.Provider value={[data, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
