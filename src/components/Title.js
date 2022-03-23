import { Text, View, StyleSheet } from "react-native";
import React from "react";


const Title = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subTitle}>{props.subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontFamily: "Ubuntu_700Bold",
    fontSize: 48,
    color: "white",
    textAlign: "center",
  },
  subTitle: {
    fontFamily: "Ubuntu_400Regular",
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
});

export default Title;
