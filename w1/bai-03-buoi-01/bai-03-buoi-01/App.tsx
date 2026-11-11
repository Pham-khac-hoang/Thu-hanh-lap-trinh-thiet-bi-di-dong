import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type Todo = {
  id: string;
  title: string;
};

type TodoItemProps = {
  item: Todo;
};

const TodoItem = ({ item }: TodoItemProps) => (
  <View>
    <Text>{item.title}</Text>
  </View>
);

const App = () => {
  const [todos] = useState<Todo[]>([
    { id: '1', title: 'Học React Native' },
    { id: '2', title: 'Làm bài tập Todo ' },
    { id: '3', title: 'Nộp bài tập' },
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Danh sách việc cần làm:</Text>
        <Text>  </Text>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} />
        ))}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;