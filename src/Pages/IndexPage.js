import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, View, ToastAndroid } from "react-native";
import { FAB } from "react-native-paper";
import Boxes from "../Components/Boxes.js";
import EmptyList from "../Components/EmpyList.js";

const IndexPage = ({ navigation, route }) => {
  const [tasks, setTasks] = useState([]);
  const [isTaskListEmpty, setIsTaskListEmpty] = useState(true);

  useEffect(() => {
    getDataFromDB();
  }, []);

  useEffect(() => {
    tasks.length === 0 ? setIsTaskListEmpty(true) : saveDataToDB(tasks);
  }, [tasks]);

  useEffect(() => {
    if (route.params?.userEntry) {
      addTask(route.params?.userEntry);
    }
  }, [route.params?.userEntry]);

  const saveDataToDB = async (tasksToSave) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasksToSave));
      setIsTaskListEmpty(false);
    } catch (error) {
      showErrorToast("Can't SAVE task to DB");
      console.error("ERROR IN FUNCTION: SAVE DATA TO DB" + error);
    }
  };

  const getDataFromDB = async () => {
    //await AsyncStorage.clear(); //para limpiar completamente la bd
    try {
      const fetchedData = await AsyncStorage.getItem("tasks");
      const JsonData = JSON.parse(fetchedData);
      if (JsonData !== null) {
        setTasks(JsonData);
      }
    } catch (error) {
      showErrorToast("Can´t get data from DB");
      console.error("ERROR IN FUNCTION: GET DATA FROM DB" + error);
    }
  };

  const addTask = (userEntry) => {
    if (isTaskListEmpty) {
      setIsTaskListEmpty(false);
    }

    let taskKey = new Date().toLocaleString();
    let todayDate = new Date().toISOString().slice(0, 10);

    let newTask = {
      key: taskKey,
      task: userEntry,
      date: todayDate,
      completed: "Not completed yet",
    };

    setTasks([...tasks, newTask]);
    saveDataToDB(tasks);
  };

  const setTaskAsCompleted = (taskToUpdate) => {
    let taskCopy = taskToUpdate;

    if (taskToUpdate.completed === "Not completed yet") {
      taskCopy.completed = "Completed!";
    }

    deleteTask(taskToUpdate);
    saveDataToDB(tasks);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => taskToDelete.toString() !== task.key));
  };

  const showErrorToast = (errorText) => {
    ToastAndroid.showWithGravity(
      errorText,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  return (
    <View style={styles.container}>
      {isTaskListEmpty ? (
        <EmptyList />
      ) : (
        <Boxes
          tasks={tasks}
          deleteTask={deleteTask}
          setTaskAsCompleted={setTaskAsCompleted}
        />
      )}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate("Add Task")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbf6e9",
    padding: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#000",
  },
});

export default IndexPage;
