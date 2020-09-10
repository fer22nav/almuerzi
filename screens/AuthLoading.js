import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";

export default ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.getItem("token").then((x) => {
      navigation.navigate(x ? "Root" : "Root"); //OnBoarding en la segunda opcion despues de poder  arreglar el login
    });
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator />
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
});
