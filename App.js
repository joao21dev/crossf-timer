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
  { initialRouteName: "EMOM" },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer(AppNavigator);

// export default function App() {
//   let [fontsLoaded] = useFonts({
//     Ubuntu_700Bold,
//   });

//   if (!fontsLoaded) {
//     return <h1>Deu erro</h1>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={{ fontFamily: "Ubuntu_700Bold", fontSize: 40 }}>
//         Open up App.js to start working on your app!a
//       </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
