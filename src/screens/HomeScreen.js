import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import Fonts from "../components/Fonts";

const HomeScreen = (props) => {
  Fonts();
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>CrossFTimer</Text>
      <Button
        onPress={() => props.navigation.navigate("EMOM")}
        style={styles.btn}
      >
        EMOM
      </Button>
      <Button style={styles.btn}>AMRAP</Button>
      <Button style={styles.btn}>ISOMETRIA</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6304a",
  },
  logo: {
    fontFamily: "Ubuntu_700Bold",
    fontSize: 48,
    textAlign: "center",
    color: "white",
    marginTop: 111,
    marginBottom: 111,
  },
  btn: {
    color: "white",
    fontFamily: "Ubuntu_400Regular",
    fontSize: 24,
    textAlign: "center",
    margin: 20,
    padding: 20,
  },
});

export default HomeScreen;
