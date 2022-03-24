import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";

// import { useFonts, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import HomeScreen from "./src/screens/HomeScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import EMOMScreen from "./src/screens/EMOMScreen";
import AppLoading from "expo-app-loading";


const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen, navigationOptions: { headerShown: false } },
    EMOM: { screen: EMOMScreen, navigationOptions: { headerShown: false } },
  },
  { initialRouteName: "EMOM" }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
