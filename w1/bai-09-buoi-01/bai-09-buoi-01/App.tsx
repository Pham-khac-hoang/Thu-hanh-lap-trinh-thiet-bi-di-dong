import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type NewsItemProps = {
  item: Post;
};

const NewsItem = ({ item }: NewsItemProps) => (
  <View>
    <Text>{item.title}</Text>
  </View>
);

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://typicode.com')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data as Post[]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Danh sách tin tức:</Text>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <NewsItem item={item} />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;