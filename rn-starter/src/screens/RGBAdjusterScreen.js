import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const RGBAdjusterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>RGB Adjuster</Text>
      <ColorAdjuster
        onIncrement={() => dispatch({ type: "change_red", payload: INCREMENT })}
        onDecrement={() =>
          dispatch({ type: "change_red", payload: -INCREMENT })
        }
        color="Red"
      />
      <ColorAdjuster
        onIncrement={() =>
          dispatch({ type: "change_green", payload: INCREMENT })
        }
        onDecrement={() =>
          dispatch({ type: "change_green", payload: -INCREMENT })
        }
        color="Green"
      />
      <ColorAdjuster
        onIncrement={() =>
          dispatch({ type: "change_blue", payload: INCREMENT })
        }
        onDecrement={() =>
          dispatch({ type: "change_blue", payload: -INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 200,
          width: 200,
          alignSelf: "center",
          marginTop: 30,
          borderRadius: 5,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15 },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default RGBAdjusterScreen;
