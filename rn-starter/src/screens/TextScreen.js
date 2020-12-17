import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Password:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newPassword => setPassword(newPassword)}
      />

      {password && password.length < 6 ? (
        <Text style={{ color: "red" }}>
          Password must be at least 6 characters
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  textInput: {
    backgroundColor: "#FFFFFF",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default TextScreen;
