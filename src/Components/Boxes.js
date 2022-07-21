import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import Task from "./Task.js";

const Boxes = ({ tasks, deleteTask, setTaskAsCompleted }) => {
  const renderTasks = ({ item }) => {
    return (
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => {
            createThreeButtonAlert(item);
          }}
        >
          <View style={styles.innerContent}>
            <Task name={item.task} completed={item.completed} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const createThreeButtonAlert = (item) => {
    const alertTittle = "Task \n";
    const alertmessage = item.task + "\n \n" + "Added on: " + item.date;
    let textUpdate = "Set as not completed";

    if (item.completed === "Not completed yet") {
      textUpdate = "Set as completed";
    }

    Alert.alert(
      alertTittle,
      alertmessage,
      [
        {
          text: textUpdate,
          onPress: () => setTaskAsCompleted(item),
        },
        {
          text: "Delete task",
          onPress: () => deleteTask(item.key),
          style: "cancel",
        },
        { text: "Close" },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={tasks}
        numColumns={2}
        renderItem={renderTasks}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  list: {
    height: "100%",
  },
  box: {
    width: "50%",
    height: "100%",
    padding: 5,
  },
  innerContent: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    height: 150,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default Boxes;
