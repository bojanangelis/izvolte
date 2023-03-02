import { Auth, DataStore } from 'aws-amplify';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { User, LazyUser } from '../models';
const AuhtContext = createContext({});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbuser] = useState<null | LazyUser>(null);
  //@ts-ignore
  const sub = authUser?.attributes?.sub;
  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(user =>
      setAuthUser(user),
    );
  }, []);
  useEffect(() => {
    const catchUser = async () => {
      const data = await DataStore.query(User, user => user.sub.eq(sub));
      setDbuser(data[0]);
    };
    catchUser().catch(e => console.error(e));
  }, [sub]);

  return (
    <AuhtContext.Provider value={{ authUser, dbUser, setDbuser }}>
      {children}
    </AuhtContext.Provider>
  );
};
export default AuthContextProvider;

export const useAuthContext = () => useContext(AuhtContext);
