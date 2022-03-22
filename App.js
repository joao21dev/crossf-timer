import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

// import { useFonts, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import HomeScreen from "./src/screens/HomeScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import EMOMScreen from "./src/screens/EMOMScreen";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen, navigationOptions: { headerShown: false } },
    EMOM: { screen: EMOMScreen, navigationOptions: { headerShown: false } },
  },
  { initialRouteName: "Home" },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
    
  },
  
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
