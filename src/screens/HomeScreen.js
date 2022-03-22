import React from "react";
import { View, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  return (
    <View>
      <TouchableHighlight onPress={() => props.navigation.navigate("EMOM")}>
        <Text>HomeScreen</Text>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;
