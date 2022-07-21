import React from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wow such empty!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbf6e9",
    padding: 10,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default EmptyList;
