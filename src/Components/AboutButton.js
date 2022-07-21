import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { AboutAlert } from "./AboutAlert";

const AboutButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={AboutAlert}>
        <Text style={styles.infoText}>ⓘ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#6ddccf",
    padding: 10,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  infoText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default AboutButton;
