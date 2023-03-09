import { API, Auth, DataStore, graphqlOperation } from 'aws-amplify';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { User, LazyUser } from '../models';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetUserQuery } from '../API';
import { getUser } from '../graphql/queries';

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
  console.log(sub);
  useEffect(() => {
    const catchUser = async () => {
      // getUser
      if (sub) {
        const userData = await API.graphql<GraphQLQuery<GetUserQuery>>(
          graphqlOperation({ query: getUser, variables: { id: sub } }),
        );
        console.log(userData);
      }
      // const data = await DataStore.query(User, user => user.sub.eq(sub));
      // setDbuser(data[0]);
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
