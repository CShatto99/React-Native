import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "change_val":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [{ counter }, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View style={styles.container}>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "change_val", payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "change_val", payload: -1 })}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default CounterScreen;
