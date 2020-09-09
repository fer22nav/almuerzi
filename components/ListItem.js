import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 18,
  },
});
