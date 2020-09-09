import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import useFetch from "../hooks/useFetch";

export default ({ navigation }) => {
  const id = navigation.getParam("_id");
  const { loading, data } = useFetch(
    `https://serverless.fer22nav.vercel.app/api/meals/${id}`
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loading}>Cargando...</Text>
      ) : (
        <>
          <Text style={styles.Name}>{data.name}</Text>
          <Text style={styles.desc}>{data.desc}</Text>
          <Text style={styles.id}>{data._id}</Text>
          <Button
            title="Aceptar"
            onPress={() => {
              fetch("https://serverless.fer22nav.vercel.app/api/orders", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  meal_id: id,
                  user_id: "lalala",
                }),
              }).then(() => {
                alert("Orden fue generada con exito");
                navigation.navigate("Meals");
              });
            }}
          />
          <Button
            title="Cancelar"
            onPress={() => navigation.navigate("Meals")}
          />
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  desc: {
    color: "#0099ff",
  },
  Name: {
    color: "#ff0000",
  },
  id: {
    color: "#9c9c9c",
  },
  loading: {
    color: "#1976d2",
  },
});
