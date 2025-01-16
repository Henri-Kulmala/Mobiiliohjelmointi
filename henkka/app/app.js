import React from 'react';
import { StyleSheet, View } from 'react-native';
import  GuessingGame  from './components/GuessingGame';


export default function App() {
  return (
    <View style={styles.container}>
      <GuessingGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
