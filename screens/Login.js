import React from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button title="Iniciar Sesion" onPress={() => {}} />
      <Button
        title="Registrarse"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    backgroundColor: "#eee",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: "stretch",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: "#1976d2",
  },
  loading: {
    color: "#1976d2",
  },
});
