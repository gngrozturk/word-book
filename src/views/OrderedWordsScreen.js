import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Word from "../components/Word";
import Button from "../components/Button";
import wordsData from "../../words.json";

const OrderedWordsScreen = () => {
  const [data, setData] = useState(wordsData[0]);

  const [index, setIndex] = useState(0);

  const getWord = () => {
    setIndex(index + 1);
    setData(wordsData[index]);
  };

  if (data) {
    return (
      <View style={styles.container}>
        <Word word={data.word} meaning={data.meaning} examples={data.example} />
        <View style={styles.btn}>
          <Button title="See Next One" onPress={() => getWord()} />
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  btn: {
    marginBottom: 10,
  },
});

export default OrderedWordsScreen;
