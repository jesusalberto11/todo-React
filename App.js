import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexPage from "./src/Pages/IndexPage.js";
import AddTaskPage from "./src/Pages/AddTaskPage.js";
import AboutButton from "./src/Components/AboutButton.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={IndexPage}
            options={{
              title: "My Tasks",
              headerStyle: {
                backgroundColor: "#fff",
              },
              headerTintColor: "#000",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerRight: () => <AboutButton />,
            }}
          />
          <Stack.Screen
            name="Add Task"
            component={AddTaskPage}
            options={{
              title: "Add a Task",
              headerStyle: {
                backgroundColor: "#fff",
              },
              headerTintColor: "#000",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
