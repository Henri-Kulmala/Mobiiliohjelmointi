import React from 'react';
import { StyleSheet, View } from 'react-native';
import  Ostoslista  from './components/Ostoslista';

export default function App() {
  return (
    <View style={styles.container}>
      <Ostoslista />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
