import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import UsersListItem from '../components/usersListItem';
import users from '../users';
import CreatePost from './CreatePost';

const Tabs = createBottomTabNavigator();

const PostScreen = () => {
  return (
    <>
      <StatusBar />
      <View style={postStyles.container}>
        <View style={postStyles.headerContainer}>
          <Text style={postStyles.headerText}>Публікації</Text>
          <TouchableOpacity style={postStyles.headerLogout}>
            <Feather name="log-out" size={24} color="#DBDBDB" />
          </TouchableOpacity>
        </View>
        <FlatList
          style={postStyles.postsList}
          data={users}
          renderItem={user => <UsersListItem user={user}></UsersListItem>}
          keyExtractor={user => user.id}
        ></FlatList>
        {/* <ScrollView style={postStyles.postsList}>
          {users.map(user => {
            // console.log(user);
            return <UsersListItem key={user.id} user={user}></UsersListItem>;
          })}
        </ScrollView> */}
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Create') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              } else if (route.name === 'posts') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }}
        >
          <Tabs.Screen name="Create" component={CreatePost} />
        </Tabs.Navigator>
      </View>
    </>
  );
};

const postStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 11,
    // paddingTop: 44,
    borderBottomWidth: 1,
    borderColor: '#DBDBDB',
  },
  headerText: { fontSize: 17, color: '#212121' },
  headerLogout: { position: 'absolute', right: '4%', bottom: '50%' },
  postsList: { padding: 16, paddingTop: 32 },
  postListItem: { flexDirection: 'row', alignItems: 'center' },
  postListImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: 'gray',
    marginRight: 8,
  },
  postInfo: { flexDirection: 'column' },
});

export default PostScreen;
