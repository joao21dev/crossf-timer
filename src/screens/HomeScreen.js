import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";
import { TouchableHighlight } from "react-native-gesture-handler";


const HomeScreen = (props) => {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.background}>
      <TouchableHighlight onPress={() => props.navigation.navigate("EMOM")}>
        <Text style={styles.logo}>HomeScreen</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#D6304a",
  },
  logo: {
    fontFamily: "Ubuntu_400Regular",
  },
});

export default HomeScreen;
