import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './Screens/RegistrationScreen';
import LogInScreen from './Screens/LoginScreen';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LogInScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
