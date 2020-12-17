import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ResultDetails from "./ResultDetails";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      {results.length > 0 ? (
        <>
          <Text style={styles.titleStyle}>{title}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({ item }) => <ResultDetails result={item} />}
          />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultsList;
