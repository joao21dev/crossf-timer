import React from "react";
import { View } from "react-native";

const BackgroundProgress = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1 - props.percentage / 100,
            backgroundColor: "#d6304a",
          }}
        />
        <View
          style={{
            flex: props.percentage / 100,
            backgroundColor: "#2a0e12",
          }}
        />
      </View>
      <View
        style={{ position: "absolute", left: 0, top: 0, bottom: 0, right: 0 }}
      >
        {props.children}
      </View>
    </View>
  );
};

export default BackgroundProgress;
