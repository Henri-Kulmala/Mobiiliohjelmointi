import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../components/styles";

export default function History({ history }) {
  return (
    <View style={styles.container}>
      <Text style={styles.historyTitle}>Calculation History</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.historyItem}>{item.calculation}</Text>}
      />
    </View>
  );
}
