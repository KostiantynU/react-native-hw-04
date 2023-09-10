import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import PostScreen from './PostScreen';
import CreatePost from './CreatePost';
import ProfileScreen from './ProfileScreen';
import { TouchableOpacity } from 'react-native';

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={homeStyles.container}>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            // console.log(focused);
            // console.log(route);
            if (route.name === 'CreatePost') {
              iconName = 'add-outline';
            } else if (route.name === 'PostScreen') {
              iconName = 'grid';
            } else if (route.name === 'ProfileScreen') {
              iconName = 'person-outline';
            }

            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: '#FF6C00',
          tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
          tabBarStyle: { justifyContent: 'space-evenly', alignItems: 'center', height: 83 },
          tabBarShowLabel: false,
          headerTitleAlign: 'center',
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(33, 33, 33, 0.8)',
            height: 44,
          },
        })}
      >
        <Tabs.Screen
          name="PostScreen"
          component={PostScreen}
          options={{
            headerTitle: 'Публікації',
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('Log-out pressed')}>
                <Ionicons name="log-out-outline" size={24} color={'#d9d9d9'} />
              </TouchableOpacity>
            ),
            headerRightContainerStyle: { marginRight: 15 },
          }}
        />
        <Tabs.Screen
          name="CreatePost"
          component={CreatePost}
          options={{
            headerTitle: 'Створити публікацію',
            tabBarIcon: () => {
              return <Ionicons name={'add-outline'} size={24} color={'#ffffff'} />;
            },
            tabBarIconStyle: {
              width: 70,
              maxHeight: 40,
              borderRadius: 20,
              backgroundColor: '#FF6C00',
              color: 'white',
            },
            tabBarItemStyle: { justifyContent: 'center' },
          }}
        />
        <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tabs.Navigator>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: { flex: 1 },
});

export default Home;
