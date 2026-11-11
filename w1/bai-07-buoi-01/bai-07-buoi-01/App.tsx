import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


type Gender = 'male' | 'female' | 'other';

type GenderOptionProps = {
  label: string;
  value: Gender;
  onSelect: (value: Gender) => void;
};

const GenderOption = ({ label, value, onSelect }: GenderOptionProps) => (
  <TouchableOpacity onPress={() => onSelect(value)}>
    <Text>{label}</Text>
  </TouchableOpacity>
);

const App = () => {

  const [gender, setGender] = useState<Gender>('male');

  return (
    <>
      <View>
        <Text>Chọn giới tính của bạn:</Text>
        
        <GenderOption 
          label="Nam (Male)" 
          value="male" 
          onSelect={setGender} 
        />
        
        <GenderOption 
          label="Nữ (Female)" 
          value="female" 
          onSelect={setGender} 
        />
        
        <GenderOption 
          label="Khác (Other)" 
          value="other" 
          onSelect={setGender} 
        />

        <Text>Giới tính đang chọn: {gender}</Text>
      </View>
    </>
  );
};

export default App;