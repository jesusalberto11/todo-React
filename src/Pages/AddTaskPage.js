import React from "react";
import { StyleSheet, View } from "react-native";
import TaskForm from "../Components/TaskForm.js";

const AddTaskPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContent}>
        <TaskForm navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbf6e9",
    padding: 10,
  },
  innerContent: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default AddTaskPage;
