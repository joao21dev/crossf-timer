import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Ubuntu_700Bold,
  Ubuntu_400Regular,
} from "@expo-google-fonts/ubuntu";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";

const HomeScreen = (props) => {
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_400Regular,
    Raleway_700Bold,
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
    fontFamily: "Ubuntu_400Regular",
    fontSize: 24,
    textAlign: "center",
    margin: 20,
    padding: 20,
  },
});

export default HomeScreen;
