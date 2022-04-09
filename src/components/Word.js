import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const IndexScreen = ({ word, meaning, examples }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word}</Text>
      <Text style={styles.meaning}>{meaning}</Text>

      {examples.map((example) => {
        return (
          <View key={example} style={styles.exampleContainer}>
            <Entypo name="chevron-right" style={styles.icon} />
            <Text style={styles.example}>{example}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  word: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  meaning: {
    alignSelf: "center",
    fontSize: 22,
    marginVertical: 25,
    textAlign: "center",
    borderColor: "#6b52ae",
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
  },
  example: {
    fontSize: 18,
    marginVertical: 10,
    fontStyle: "italic",
    flexShrink:1
  },
  exampleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    color: "#6b52ae",
  },
});

export default IndexScreen;
