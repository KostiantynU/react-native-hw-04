import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './src/Screens/RegistrationScreen';
import LogInScreen from './src/Screens/LoginScreen';
import PostScreen from './src/Screens/PostScreen';
import CreatePost from './src/Screens/CreatePost';
import Home from './src/Screens/Home';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen name="Login" component={LogInScreen} options={{ headerShown: false }} />
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <MainStack.Screen
          name="PostScreen"
          component={PostScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
