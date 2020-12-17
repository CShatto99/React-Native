import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Image Demo" onPress={() => navigation.navigate("Image")} />
      <Button
        title="Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Random Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="RGB Adjuster Demo"
        onPress={() => navigation.navigate("RGBAdjuster")}
      />
      <Button
        title="Text Input Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button title="Box Demo" onPress={() => navigation.navigate("Box")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default HomeScreen;
