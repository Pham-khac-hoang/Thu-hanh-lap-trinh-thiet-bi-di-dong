import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type CharacterCounterProps = {
  text: string;
};

const CharacterCounter = ({ text }: CharacterCounterProps) => (
  <View>
    <Text>Nội dung đang nhập: {text}</Text>
    <Text>Số lượng ký tự: {text.length}</Text>
  </View>
);

const App = () => {
  const [inputText, setInputText] = useState<string>('');

  const handleChangeText = (text: string) => {
    setInputText(text);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Bài tập: Live Input Counter</Text>
        <TextInput
          placeholder="Nhập văn bản vào đây..."
          value={inputText}
          onChangeText={handleChangeText}
        />
        <CharacterCounter text={inputText} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;