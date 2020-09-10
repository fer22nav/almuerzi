import React from "react";
import { View, Text, StyleSheet, Button, AsyncStorage } from "react-native";
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
              AsyncStorage.getItem("token").then((x) => {
                if (x) {
                  fetch("https://serverless.fer22nav.vercel.app/api/orders", {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json",
                      authorization: x,
                    },
                    body: JSON.stringify({
                      meal_id: id,
                    }),
                  }).then((x) => {
                    console.log(x.status);
                    if (x.status !== 201) {
                      return alert("La orden no pudo ser generada!");
                    }
                    alert("Orden fue generada con exito");
                    navigation.navigate("Meals");
                  });
                }
                alert("La orden no pudo ser generada!");
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
