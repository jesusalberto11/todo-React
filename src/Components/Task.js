import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Task = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.cardText}>{props.name}</Text>
      </View>
      {props.completed === "Completed!" ? (
        <Text style={styles.cardCompleted}>{props.completed}</Text>
      ) : (
        <Text style={styles.cardNotCompleted}>{props.completed}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: "center",
  },
  cardText: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 14,
  },
  cardCompleted: {
    fontSize: 10,
    color: "#1f441e",
    flexDirection: "column",
    textAlign: "center",
  },
  cardNotCompleted: {
    fontSize: 10,
    color: "#f00",
    flexDirection: "column",
    textAlign: "center",
  },
});

export default Task;
