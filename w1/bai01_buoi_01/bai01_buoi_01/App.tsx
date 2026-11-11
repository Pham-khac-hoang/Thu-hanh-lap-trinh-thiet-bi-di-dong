import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';


interface UserCardProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

const UserCard = ({ name, age, isAdmin }: UserCardProps) => (
  <View>
    <Text>Tên: {name} - Tuổi: {age} - {isAdmin ? 'Admin' : 'Thành viên'}</Text>
  </View>
);

export default function App() {
  return (
    <View>
      <Text>Danh Sách Thành Viên</Text>
       <Text>  </Text>
      <UserCard name="Pham va" age={28} isAdmin={true} />
      <Text>  </Text>
      <UserCard name="B" age={20} isAdmin={false} />
    </View>
  );
}