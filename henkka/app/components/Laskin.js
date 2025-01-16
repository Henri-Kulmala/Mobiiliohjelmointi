import React, { useState } from "react";
import {Text, View, FlatList } from "react-native";
import LaskinButton from "./Button";
import styles from "./styles"; 

export default function Laskin() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handlePress = (value) => {
    if (value === "C") {
      setDisplay("");
      setResult("");
    } else if (value === "=") {
      try {
        const evalResult = eval(display);
        setResult(evalResult.toString());
        setHistory((prevHistory) => [
          {
            id: Math.random().toString(),
            calculation: `${display} = ${evalResult}`,
          },
          ...prevHistory,
        ]);
        setDisplay("");
      } catch (error) {
        setResult("Error");
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display || "0"}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.buttons}>
        {[
          "C",
          "(",
          ")",
          "/",
          "7",
          "8",
          "9",
          "*",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          "0",
          ".",
          "=",
        ].map((btn) => (
          <LaskinButton key={btn} value={btn} onPress={handlePress} />
        ))}
      </View>

      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>History</Text>
        <FlatList
          data={history}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.historyItem}>{item.calculation}</Text>
          )}
        />
      </View>
    </View>
  );
}


