import React from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import useForm from "../hooks/useForm";

export default ({ navigation }) => {
  const initialState = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };
  const { subscribe, inputs, handlerSubmit } = useForm(initialState, onSubmit);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarme</Text>
      <TextInput
        value={inputs.email}
        onChangeText={subscribe("email")}
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        value={inputs.password}
        onChangeText={subscribe("password")}
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="enviar" onPress={handlerSubmit} />
      <Button
        title="volver al inicio"
        onPress={() => navigation.navigate("Login")}
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
