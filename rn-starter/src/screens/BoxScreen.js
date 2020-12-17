import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOne} />
      <View style={styles.viewTwo} />
      <View style={styles.viewThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOne: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: "red",
    backgroundColor: "red",
    opacity: 0.2,
  },
  viewTwo: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: "green",
    opacity: 0.2,
    alignSelf: "flex-end",
  },
  viewThree: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: "blue",
    backgroundColor: "blue",
    opacity: 0.2,
  },
});

export default BoxScreen;
