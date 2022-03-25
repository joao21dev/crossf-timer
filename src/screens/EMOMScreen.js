import React, { useState, useEffect, Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Select from "../components/Select";
import Title from "../components/Title";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Time from "../components/Time";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProgressBar from "../components/ProgressBar";
import BackgroundProgress from "../components/BackgroundProgress";

class EMOMScreen extends Component {
  state = {
    alerts: 0,
    countdown: 1,
    time: "2",
    isRunning: false,
    countdownValue: 5,
    count: 0,
  };

  componentDidMount() {
    this.play();
  }

  play = () => {
    this.setState({ isRunning: true });
    const count = () => {
      this.setState({ count: this.state.count + 1 }, () => {
        if (this.state.count === parseInt(this.state.time) * 60) {
          clearInterval(this.countTimer);
        }
      });
    };
    if (this.state.countdown === 1) {
      this.countdownTimer = setInterval(() => {
        this.setState({ countdownValue: this.state.countdownValue - 1 }, () => {
          if (this.state.countdownValue === 0) {
            clearInterval(this.countdownTimer);
            this.countTimer = setInterval(count, 100);
          }
        });
      }, 1000);
    } else {
      this.countTimer = setInterval(count, 100);
    }
  };

  render() {
    if (this.state.isRunning) {
      const percMinute = parseInt(((this.state.count % 60) / 60) * 100);
      const percTime = parseInt(
        (this.state.count / 60 / parseInt(this.state.time)) * 100
      );
      return (
        <BackgroundProgress percentage={percMinute}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text>Countdown: {this.state.countdownValue}</Text>
            <Text>Countdown: {this.state.count}</Text>
            <Time time={this.state.count} />
            <ProgressBar percentage={percTime} />
            <Time
              time={parseInt(this.state.time * 60) - this.state.count}
              type="text2"
              appendedText={" restantes"}
            />
            <Text>Minute: {percMinute}</Text>
            <Text>Time: {percTime}</Text>
          </View>
        </BackgroundProgress>
      );
    }
    return (
      //
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
        <ScrollView style={styles.container}>
          <Title
            subTitle={"Every Minute On the Minute"}
            title={"EMOM"}
            style={{ paddingTop: 200 }}
          />
          <Ionicons
            name="settings-sharp"
            style={{
              alignSelf: "center",
              fontSize: 53,
              color: "white",
              marginBottom: 17,
            }}
          />
          <Select
            label="Alertas:"
            current={this.state.alerts}
            options={[
              {
                id: 0,
                label: "DESLIGADO",
              },
              {
                id: 15,
                label: "15s",
              },
              {
                id: 30,
                label: "30s",
              },
              {
                id: 45,
                label: "45s",
              },
            ]}
            onSelect={(opt) => this.setState({ alerts: opt })}
          />
          <Select
            label="Contagem regressiva:"
            current={this.state.countdown}
            options={[
              {
                id: 1,
                label: "SIM",
              },
              {
                id: 0,
                label: "NÃO",
              },
            ]}
            onSelect={(opt) => this.setState({ countdown: opt })}
          />
          <Text style={styles.label}>Quantos minutos:</Text>
          <TextInput
            style={styles.input}
            value={this.state.time}
            onChangeText={(text) => this.setState({ time: text })}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Minutos</Text>

          <TouchableOpacity onPress={this.play} style={{ alignSelf: "center" }}>
            <AntDesign
              name="playcircleo"
              style={{ fontSize: 53, color: "white" }}
            />
          </TouchableOpacity>
          <Text>Testar</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6304a",
    // paddingTop: 20,
  },
  label: {
    color: "white",
    textAlign: "center",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 24,
  },
  input: {
    color: "black",
    textAlign: "center",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 48,
  },
});

export default EMOMScreen;
