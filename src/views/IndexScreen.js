import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../components/Button";
const IndexScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome, in this application you can review some English words that you
        want to learn !
      </Text>
      <Button
        title="See Random Words"
        onPress={() => navigation.navigate("Random Words")}
      />
      <Button
        title="See Ordered Words"
        onPress={() => navigation.navigate("Ordered Words")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
    marginHorizontal: 10,
    position: "absolute",
    top: 75,
  },
});

export default IndexScreen;
