import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type MyButtonProps = {
  label: string;
  onPress: () => void;
  color?: string;
};

const MyButton = ({ label, onPress, color = 'blue' }: MyButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={{ color }}>{label}</Text>
  </TouchableOpacity>
);

const App = () => {
  const handleDefaultPress = () => {
    alert('Nút mặc định được bấm!');
  };

  const handleCustomPress = () => {
    alert('Nút màu đỏ được bấm!');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Demo Custom Button:</Text>
        <Text>  </Text>
        
        {}
        <MyButton 
          label="Nút màu mặc định (Xanh)" 
          onPress={handleDefaultPress} 
        />

        {}
        <MyButton 
          label="Nút tùy chỉnh (Đỏ)" 
          color="red" 
          onPress={handleCustomPress} 
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;