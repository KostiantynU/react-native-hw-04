import { StyleSheet, View, Text, StatusBar } from 'react-native';

const PostScreen = () => {
  return (
    <View style={postStyles.container}>
      <View style={postStyles.headerContainer}>
        <Text>Публікації</Text>
      </View>
      <View></View>
    </View>
  );
};

const postStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostScreen;
