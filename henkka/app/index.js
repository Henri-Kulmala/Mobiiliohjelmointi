import React from 'react';
import { StyleSheet, View } from 'react-native';
import Laskin from './Laskin';

export default function App() {
  return (
    <View style={styles.container}>
      <Laskin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
