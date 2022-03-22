import React from "react";
import { View, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const EMOMScreen = (props) => {
  return (
    <View>
      <TouchableHighlight onPress={() => props.navigation.navigate("Home")}>
        <Text>EMOMScreen</Text>
      </TouchableHighlight>
    </View>
  );
};

export default EMOMScreen;
