import { View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';

const TextComponent = ({ name }: { name: string }) => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  const onChangeText = (text: string) => {
    setText(text);
    console.log(text);
  };

  const submit = () => {
    console.log('your text is being sent to the database', text);
  };

  return (
    <View className="flex-1 flex-row items-center justify-center">
      <TextInput placeholder="Enter your name" value={text} onChangeText={onChangeText} />
      <Button title="Submit" onPress={submit} />
    </View>
  );
};

export default TextComponent;
