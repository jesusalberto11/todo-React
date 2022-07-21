import React from "react";
import { Alert } from "react-native";

export const AboutAlert = () => {
  return Alert.alert(
    "About this app",
    `App created by: Jesus Alberto. \n\nUsing React Native + Expo CLI \n\nVersion 1.0\n\nGithub: jesusalberto11`
  );
};
