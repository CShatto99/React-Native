import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const { data } = await yelp.get(`/${id}`);

    setResult(data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return !result ? null : (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        style={styles.list}
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: "column",
    alignContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
    alignSelf: "center",
  },
  list: {
    alignSelf: "center",
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default ResultsShowScreen;
