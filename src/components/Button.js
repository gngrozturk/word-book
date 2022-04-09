import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 60,
    backgroundColor: "#6b52ae",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },
});

export default Button;
