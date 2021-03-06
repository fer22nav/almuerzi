import { View, StyleSheet, FlatList, Text } from "react-native";
import ListItem from "../components/ListItem";
import React from "react";
import useFetch from "../hooks/useFetch";

const Meals = ({ navigation }) => {
  const { loading, data: meals } = useFetch(
    "https://serverless.fer22nav.vercel.app/api/meals"
  );
  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loading}>Cargando...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={meals}
          keyExtractor={(x) => String(x._id)}
          renderItem={({ item }) => (
            <ListItem
              onPress={() =>
                navigation.navigate("Modal", {
                  _id: item._id,
                })
              }
              name={item.name}
            />
          )}
        />
      )}
    </View>
  );
};
Meals.navigationOptions = {
  title: "Comidas disponibles",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch",
  },
  loading: {
    color: "#1976d2",
  },
});

export default Meals;
