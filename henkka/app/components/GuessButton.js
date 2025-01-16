import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function GuessButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Make A Guess!</Text>
    </TouchableOpacity>
  );
}

