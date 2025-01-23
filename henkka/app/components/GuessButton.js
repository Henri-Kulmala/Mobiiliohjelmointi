import React from 'react';
<<<<<<< HEAD
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
=======
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
>>>>>>> origin/Tehtävä2

export default function GuessButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Make A Guess!</Text>
    </TouchableOpacity>
  );
}

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
  button: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4caf50',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
>>>>>>> origin/Tehtävä2
