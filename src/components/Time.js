import React from "react";
import { Text, StyleSheet } from "react-native";

import Fonts from "./Fonts";

const Time = (props) => {
  const minutes = parseInt(props.time / 60);
  const seconds = parseInt(props.time % 60);
  const format = (num) => {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  };
  Fonts();
  return (
    <Text style={styles[props.type ? props.type : "text"]}>
      {format(minutes)}:{format(seconds)}
      {props.appendedText}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 96,
    fontFamily: "Ubuntu_700Bold",
    color: "white",
    textAlign: "center",
  },
  text2: {
    fontFamily: "Ubuntu_400Regular",
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
});

export default Time;
