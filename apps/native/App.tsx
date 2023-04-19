import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './src/navigation';
import { Amplify } from 'aws-amplify';
import awsmobile from './src/aws-exports';
import { Provider } from 'react-redux';
import store from './store';

Amplify.configure({ ...awsmobile, Analytics: { disabled: true } });
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigatior />
        <StatusBar style="dark" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
