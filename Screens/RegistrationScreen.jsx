import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// import { SvgXml } from 'react-native-svg';
import BgImage from '../images/registration-BG.jpg';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// const addIcon = `
//   <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="12.5" cy="12.5" r="12" fill="white" />
//     <path
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//       d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"

//     />
//   </svg>`;

const RegistrationScreen = () => {
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardShown(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardShown(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const navigation = useNavigation();

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [securePass, setSecurePass] = useState(true);

  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isUserNameActive, setIsUserNameActive] = useState(false);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPassActive, setIsPassActive] = useState(false);

  const onPressShowPass = () => {
    setSecurePass(!securePass);
  };

  const changeEmailActiveAndPadding = () => {
    setIsKeyboardShown(true);
    setIsEmailActive(true);
  };

  const changeUserNameActiveAndPadding = () => {
    setIsKeyboardShown(true);
    setIsUserNameActive(true);
  };

  const changePassActiveAndPadding = () => {
    setIsKeyboardShown(true);
    setIsPassActive(true);
  };

  const hideKeyboard = () => {
    setIsPassActive(false);
    setIsUserNameActive(false);
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const collectInputValues = () => {
    console.log(`Login: ${login}, email: ${email},  and password: ${password}`);
    hideKeyboard();
    setLogin('');
    setEmail('');
    setPassword('');
  };
  const test = 10;
  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={regStyles.container}>
        <ImageBackground source={BgImage} resizeMode="cover" style={regStyles.bgImg}>
          <View style={{ ...regStyles.formView, paddingBottom: isKeyboardShown ? 184 : 78 }}>
            <View style={regStyles.userPhoto}>
              <View style={regStyles.userPhotoPlus}>
                <Ionicons name="add-circle-outline" size={25} color={'#FF6C00'} />
                {/* <SvgXml xml={addIcon} width={25} height={25} stroke={'#FF6C00'} /> */}
              </View>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <Text style={regStyles.mainTitle}>Реєстрація</Text>
              <TextInput
                id="username"
                style={{
                  ...regStyles.inputsAll,
                  borderColor: isUserNameActive ? '#FF6C00' : '#e8e8e8',
                  backgroundColor: isUserNameActive ? '#ffffff' : '#f6f6f6',
                }}
                onChangeText={setLogin}
                onFocus={changeUserNameActiveAndPadding}
                onBlur={() => setIsUserNameActive(false)}
                value={login}
                autoComplete="username"
                placeholder="Логін"
              />
              <TextInput
                id="email"
                style={{
                  ...regStyles.inputsAll,
                  borderColor: isEmailActive ? '#FF6C00' : '#e8e8e8',
                  backgroundColor: isEmailActive ? '#ffffff' : '#f6f6f6',
                }}
                onChangeText={setEmail}
                onFocus={changeEmailActiveAndPadding}
                onBlur={() => setIsEmailActive(false)}
                value={email}
                autoComplete="email"
                placeholder="Адреса електронної пошти"
              />

              <View style={{ position: 'relative' }}>
                <TextInput
                  id="passInput"
                  style={{
                    ...regStyles.inputsAll,
                    borderColor: isPassActive ? '#FF6C00' : '#e8e8e8',
                    backgroundColor: isPassActive ? '#ffffff' : '#f6f6f6',
                  }}
                  onChangeText={setPassword}
                  onFocus={changePassActiveAndPadding}
                  onBlur={() => setIsPassActive(false)}
                  value={password}
                  autoComplete="current-password"
                  secureTextEntry={securePass}
                  placeholder="Пароль"
                />
                <TouchableOpacity
                  style={{ position: 'absolute', top: 0, right: 0 }}
                  onPressIn={onPressShowPass}
                >
                  <Text style={regStyles.inputText}>Показати</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={regStyles.regButton}
                accessibilityLabel="Register"
                onPress={collectInputValues}
              >
                <Text style={regStyles.regButtonText}>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity accessibilityLabel="LogIn">
                <Text style={{ color: '#1B4371', textAlign: 'center' }}>
                  Вже є аккаунт?{' '}
                  <Text
                    style={{ textDecorationLine: 'underline' }}
                    onPress={() => navigation.navigate('Login', { test })}
                  >
                    Увійти
                  </Text>
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const regStyles = StyleSheet.create({
  container: { flex: 1 },
  bgImg: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  formView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 78,
    position: 'relative',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userPhoto: {
    width: 120,
    height: 120,
    position: 'absolute',
    left: '50%',
    top: 0,
    backgroundColor: '#F6F6F6',

    borderRadius: 16,

    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  userPhotoPlus: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: '90%',
    bottom: 0,
    transform: [{ translateY: -20 }],
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: '#FF6C00',
    // borderRadius: 50,
    // borderWidth: 1,
  },
  mainTitle: { fontSize: 30, textAlign: 'center', color: '#212121', marginBottom: 33 },
  inputsAll: {
    width: '100%',
    height: 50,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e8e8e8',
    backgroundColor: '#f6f6f6',
  },
  inputText: { position: 'absolute', right: 16, top: 15, color: '#1B4371' },
  regButton: {
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },

  regButtonText: { color: '#ffffff', textAlign: 'center' },
});

export default RegistrationScreen;
