import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Select from "../components/Select";
import Title from "../components/Title";

const EMOMScreen = (props) => {
  return (
    <View style={styles.container}>
      <Title subTitle={"Every Minute On the Minute"} title={"EMOM"} />
      {/* <SettingsIcon
        style={{
          alignSelf: "center",
          fontSize: 53,
          color: "white",
          marginBottom: 17,
        }}
      /> */}
      <Select
        label="Alertas:"
        current={0}
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
        onSelect={(opt) => console.log(opt)}
      />
      <Select
        label="Contagem regressiva:"
        current={0}
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
        onSelect={(opt) => console.log(opt)}
      />
      <Text style={styles.label}>Quantos minutos:</Text>
      <Text style={styles.input}>15</Text>
      <Text style={styles.label}>Minutos</Text>
      {/* <PlayCircleFilledIcon style={{ alignSelf: 'center', fontSize: 53, color: "white" }} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6304a",
    paddingTop: 200,
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
