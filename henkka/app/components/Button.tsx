import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type LaskinButtonProps = {
  value: string;
  onPress: (value: string) => void;
};

export default function LaskinButton({ value, onPress }: LaskinButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '22%',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
