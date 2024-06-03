import { StyleSheet, FlatList } from 'react-native';
import { View, Text } from '../components/Themed';
import AddPostForm from '../components/AddPostForm';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../src/lib/supabse';

export default function TabOneScreen() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order(
        'created_at', { ascending: false }
      );
      
      if (error) {
        console.log('error', error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  console.log(posts);

  const handleSubmit = async (content : string) => {
    const { data, error } = await supabase.from('posts').insert({ content}).select();
    if( error ) {
      console.log('error', error);
    } else {
      console.log(content);
      setPosts([data[0], ...posts ]);
    }
  }

  return (
    <View style={styles.container}>
      <AddPostForm onSubmit={handleSubmit}/>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Text>{ item.content }</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});