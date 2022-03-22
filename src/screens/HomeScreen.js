import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";
import Button from "../components/Button";

const HomeScreen = (props) => {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
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
    fontFamily: "Ubuntu-400Regular",
    fontSize: 24,
    textAlign: "center",
    margin: 20,
    padding: 20,
  },
});

export default HomeScreen;
