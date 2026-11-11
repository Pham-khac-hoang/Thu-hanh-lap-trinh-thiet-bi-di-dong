import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type CounterButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const CounterButton = ({ title, onPress, disabled }: CounterButtonProps) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    
    setCount(Math.max(-99, count - 1));

  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>{count}</Text>
        <CounterButton title="+" onPress={handleIncrease} />
        <CounterButton
          title="-"
          onPress={handleDecrease}
          disabled={count === -99}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;