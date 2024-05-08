import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGameOver(false);
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
    setGameOver(true);
  }

  let screen = <StartGameScreen onStartGame={startGameHandler} />;
  if( parseInt(userNumber)) {
    screen = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  }
  console.log('userNumber:', parseInt(userNumber), gameOver);
  if( gameOver && parseInt(userNumber) ) {
    screen = <GameOverScreen />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <LinearGradient colors={['#ffe3ff', '#462812']} style={styles.container}>
          <ImageBackground
            source={require('./assets/background.png')}
            style={styles.container}
            imageStyle={styles.imageContainer}
            resizeMode='cover'
          >
           <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
          </ImageBackground>
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  imageContainer: {
    opacity: 0.15,
  },
});
