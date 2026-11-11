import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type User = {
  id: number;
  name: string;
  email: string;
  phone?: string;
};

type UserProfileProps = {
  user: User | null;
};

const UserProfile = ({ user }: UserProfileProps) => {
  if (!user) {
    return null;
  }

  return (
    <View>
      <Text>ID: {user?.id}</Text>
      <Text>Tên: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>
      <Text>SĐT: {user?.phone ?? 'Chưa cập nhật'}</Text>
    </View>
  );
};

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUserData = () => {
    // Giả lập gọi API
    setTimeout(() => {
      setUser({
        id: 1,
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com',
        phone: '0901234567',
      });
    }, 1500);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Thông tin người dùng:</Text>
        <UserProfile user={user} />
        <Button title="Reset dữ liệu" onPress={() => setUser(null)} />
        <Button title="Tải lại dữ liệu" onPress={fetchUserData} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;