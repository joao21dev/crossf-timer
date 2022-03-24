import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Select from "../components/Select";
import Title from "../components/Title";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const EMOMScreen = (props) => {
  const [alerts, setAlerts] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [time, setTime] = useState("15");
  return (
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
          current={alerts}
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
          onSelect={(opt) => setAlerts(opt)}
        />
        <Select
          label="Contagem regressiva:"
          current={countdown}
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
          onSelect={(opt) => setCountdown(opt)}
        />
        <Text style={styles.label}>Quantos minutos:</Text>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={(text) => setTime(text)}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Minutos</Text>
        <AntDesign
          name="playcircleo"
          style={{ alignSelf: "center", fontSize: 53, color: "white" }}
        />
        <Text>Testar</Text>
        <Text>{JSON.stringify([alerts, time, countdown])}</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

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
