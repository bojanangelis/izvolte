import { Auth, DataStore } from 'aws-amplify';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { User } from '../models';

const AuhtContext = createContext({});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbuser] = useState(null);
  //@ts-ignore
  const sub = authUser?.attributes?.sub;
  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(user =>
      setAuthUser(user),
    );
  }, []);

  useEffect(() => {
    if (sub) {
      const user = DataStore.query(User, user => user.sub.eq(sub));
      //@ts-ignore
      setDbuser(user[0]);
    }
  }, [sub]);
  console.log('db-->', dbUser);
  return (
    <AuhtContext.Provider value={{ authUser, dbUser, setDbuser }}>
      {children}
    </AuhtContext.Provider>
  );
};
export default AuthContextProvider;

export const useAuthContext = () => useContext(AuhtContext);
