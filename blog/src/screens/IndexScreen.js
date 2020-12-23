import React, { useContext } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { blogPosts, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Blog" onPress={addBlogPost} />
      <FlatList
        data={blogPosts}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
