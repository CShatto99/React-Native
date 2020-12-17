import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <ImageDetails
        title="Forest"
        image={require("../../assets/forest.jpg")}
        score={9}
      />
      <ImageDetails
        title="Beach"
        image={require("../../assets/beach.jpg")}
        score={7}
      />
      <ImageDetails
        title="Mountain"
        image={require("../../assets/mountain.jpg")}
        score={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
  },
});

export default ImageScreen;
