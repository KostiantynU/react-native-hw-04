import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const CreatePost = () => {
  return (
    <View style={createPostStyles.container}>
      <View style={createPostStyles.addPhoto}></View>
      <Text style={createPostStyles.colorText}>Завантажте фото</Text>
      <TextInput placeholder="Назва..." name="nameLocation" style={createPostStyles.colorText} />
      <TextInput placeholder="Місцевість..." name="location" style={createPostStyles.colorText} />
      <Button title="Опублікувати" />
    </View>
  );
};

const createPostStyles = StyleSheet.create({
  container: { flex: 1, marginLeft: 16, marginRight: 16 },
  addPhoto: { height: 240, backgroundColor: 'gray' },
  colorText: { color: '#BDBDBD' },
});

export default CreatePost;
