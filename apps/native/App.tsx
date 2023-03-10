import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './src/navigation';
import { API, Amplify, graphqlOperation } from 'aws-amplify';
// import SignInScreen from './src/screens/SignInScreen';
// import awsmobile from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { signUpConfig } from './utils/signUp';
import AuthContextProvider from './src/context/AuthContext';
import BasketContextProvider from './src/context/BasketContext';
import OrderContextProvider from './src/context/OrderContext';
// import { syncRestaurants } from './src/graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetBlogQuery } from './src/API';
// import { SyncRestaurantsQuery } from './src/API';

// Amplify.configure({ ...awsmobile, Analytics: { disabled: true } });
const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthContextProvider> */}
      {/* <BasketContextProvider> */}
      {/* <OrderContextProvider> */}
      <RootNavigatior />
      {/*  </OrderContextProvide/r>
         </BasketContextProvider> */}
      {/* </AuthContextProvider> */}
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

export default withAuthenticator(App, { signUpConfig });
