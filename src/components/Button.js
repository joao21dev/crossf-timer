import React from "react";
import { Text, TouchableOpacity} from "react-native";


const Button = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{children}</Text>
    </TouchableOpacity>
  );
};


export default Button;
