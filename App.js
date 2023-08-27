import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Switch,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LogInScreen from './Screens/LoginScreen';
import BgImage from './images/registration-BG.jpg';
//import BigButton from './'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <LogInScreen /> */}
      <RegistrationScreen />

      {/* <Text style={myStyles.titleWithStyles}>This is "Text" component before "View" component</Text>
      <View style={myStyles.container}>
        <Text style={myStyles.title}>This "Text" is inside "View" component</Text>
        <Button title="This is button" />
      </View>
      <ScrollView>
        <Text>This is ScrollView</Text>
        <TextInput placeholder="Enter something" />
        <Switch title="CheckBox" />
        <Image source={require('./avka_more_light.jpg')} style={{ width: 150, height: 150 }} />
      </ScrollView> */}

      {/* <View style={myStyles.container}>
         <Text>Hello World! This is my first project in Android Sutdio!</Text>
         <StatusBar style="auto" />

      </View> */}
    </>
  );
}

const myStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  titleWithStyles: {
    paddingVertical: Platform.OS === 'ios' ? 8 : 10,
    textAlign: 'center',
    borderWidth: 4,
    ...Platform.select({
      ios: { borderColor: 'yellow' },
      android: { borderColor: 'red' },
    }),
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
  },
  bgImg: { flex: 1 },
});
