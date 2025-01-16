import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LaskinButton from './Button';

export default function Laskin(): JSX.Element {
  const [display, setDisplay] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handlePress = (value: string): void => {
    if (value === 'C') {
      setDisplay('');
      setResult('');
    } else if (value === '=') {
      try {
        const evalResult = eval(display);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display || '0'}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        {['C', '(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map((btn) => (
          <LaskinButton key={btn} value={btn} onPress={handlePress} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#dcdcdc',
  },
  displayText: {
    fontSize: 36,
    color: '#333',
  },
  resultText: {
    fontSize: 28,
    color: '#888',
  },
  buttons: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
