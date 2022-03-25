import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Ubuntu_700Bold,
  Ubuntu_400Regular,
} from "@expo-google-fonts/ubuntu";

const Fonts = function () {
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
};

export default Fonts;
