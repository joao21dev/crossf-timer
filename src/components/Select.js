import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
class Select extends Component {
  state = {
    current: "",
  };
  componentDidMount() {
    this.setState({
      current: this.props.current,
    });
  }
  handlePress = (opt) => () => {
    this.setState({
      current: opt,
    });
    if (this.props.onSelect) {
      this.props.onSelect(opt);
    }
  };
  render() {
    const { options, label } = this.props;
    const { current } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Text style={styleSelect.label}>{label}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {options.map((opt) => {
            let id = "";
            let label = "";
            if (typeof opt === "string") {
              id = opt;
              label = opt;
            }
            if (typeof opt === "object") {
              id = opt.id;
              label = opt.label;
            }

            return (
              <TouchableOpacity
                onPress={this.handlePress(id)}
                key={id}
                style={[
                  styleSelect.opt,
                  id === current ? styleSelect.optSelected : null,
                ]}
              >
                <Text style={styleSelect.optLabel}>{label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styleSelect = StyleSheet.create({
  label: {
    color: "white",
    textAlign: "center",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 24,
  },
  optLabel: {
    color: "white",
    fontFamily: "Ubuntu_400Regular",
    fontSize: 24,
    opacity: 1,
  },

  optSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
  },
  opt: {
    padding: 8,
  },
});

export default Select;
