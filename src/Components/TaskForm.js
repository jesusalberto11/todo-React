import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ToastAndroid,
  Text,
  TouchableOpacity,
} from "react-native";

const TaskForm = ({ navigation }) => {
  const [userEntry, setUserEntry] = useState("");

  const validateInput = () => {
    if (userEntry === "" || userEntry === null) {
      showErrorToast();
    } else {
      navigation.navigate("Home", { userEntry: userEntry });
    }
  };

  const showErrorToast = () => {
    ToastAndroid.showWithGravity(
      "Inputs can't be empty!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  return (
    <View>
      <TextInput
        blurOnSubmit={true}
        multiline
        placeholder="What's on your mind?"
        style={styles.input}
        value={userEntry}
        onChangeText={setUserEntry}
        maxLength={100}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          validateInput();
        }}
      >
        <Text>Add Task!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 200,
    padding: 10,
    margin: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6ddccf",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default TaskForm;
