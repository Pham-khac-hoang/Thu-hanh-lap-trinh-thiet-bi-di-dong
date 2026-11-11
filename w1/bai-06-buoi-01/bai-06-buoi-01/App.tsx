import React, { useState, ReactNode } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type LoadingContainerProps = {
  isLoading: boolean;
  children: ReactNode;
};

const LoadingContainer = ({ isLoading, children }: LoadingContainerProps) => {
  if (isLoading) {
    return <ActivityIndicator />;
  }

  return <View>{children}</View>;
};

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const toggleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Button 
          title={isLoading ? "Tắt Loading" : "Bật Loading"} 
          onPress={toggleLoading} 
        />

        <LoadingContainer isLoading={isLoading} children={undefined}>
          
        </LoadingContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;