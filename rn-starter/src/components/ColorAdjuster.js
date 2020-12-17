import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorAdjuster = ({ onIncrement, onDecrement, color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrement()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrement()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorAdjuster;
