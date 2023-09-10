import { StyleSheet, View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import UsersListItem from '../components/usersListItem';
import users from '../users';

const PostScreen = () => {
  return (
    <>
      <StatusBar />
      <View style={postStyles.container}>
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
