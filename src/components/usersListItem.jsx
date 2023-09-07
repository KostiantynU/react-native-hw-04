import { StyleSheet, View, Text, Image } from 'react-native';
const UsersListItem = ({
  user: {
    item: { name, email },
  },
}) => {
  // console.log(item);
  // console.log(name, email);
  return (
    <View style={postStyles.postListItem}>
      <Image
        source={require('../../images/example-avatar.png')}
        style={postStyles.postListImage}
      ></Image>
      <View style={postStyles.postInfo}>
        <Text>{name}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
};
const postStyles = StyleSheet.create({
  postListItem: { flexDirection: 'row', alignItems: 'center' },
  postListImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: 'gray',
    marginRight: 8,
    marginBottom: 8,
  },
  postInfo: { flexDirection: 'column' },
});

export default UsersListItem;
