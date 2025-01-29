import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import GuessButton from './GuessButton';
import styles from './styles';

let guesses = 0;
export default function GuessingGame() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');
  
  const handleGuess = () => {
    
    const userGuess = Number(guess);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      setResult('Please enter a valid number between 1 and 100.');
      return;
    }

    if (userGuess === randomNumber) {
      setResult('Congratulations! You guessed the correct number in ' + guesses + ' guesses!');
      setRandomNumber(Math.floor(Math.random() * 100) + 1); 
      guesses = 0;
    } else if (userGuess < randomNumber) {
      setResult('Too low! Try again.');
      guesses++;
      
    } else {
      setResult('Too high! Try again.');
      guesses++;
    }

    setGuess(''); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guessing Game</Text>
      <Text style={styles.instructions}>Guess a number between 1 and 100</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your guess"
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess} 
      />
      <GuessButton onPress={handleGuess} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}


