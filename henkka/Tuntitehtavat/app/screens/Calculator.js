import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import styles from "../components/styles";

export default function Calculator({ navigation, setHistory }) {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "C") {
      setDisplay("");
      setResult("");
    } else if (value === "=") {
      try {
        const evalResult = eval(display);
        setResult(evalResult.toString());
        setDisplay("");
        setHistory((prevHistory) => [
          { id: Math.random().toString(), calculation: `${display} = ${evalResult}` },
          ...prevHistory,
        ]);
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
        {["C", "(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((btn) => (
          <Button key={btn} value={btn} onPress={handlePress} />
        ))}
      </View>

      <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate("History")}>
        <Text style={styles.historyButtonText}>View History</Text>
      </TouchableOpacity>
    </View>
  );
}
