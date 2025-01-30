import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Button({ value, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
}


