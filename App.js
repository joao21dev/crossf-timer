import "react-native-gesture-handler";
import HomeScreen from "./src/screens/HomeScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import EMOMScreen from "./src/screens/EMOMScreen";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen, navigationOptions: { headerShown: false } },
    EMOM: { screen: EMOMScreen, navigationOptions: { headerShown: false } },
  },
  { initialRouteName: "EMOM" }
);

export default createAppContainer(AppNavigator);


