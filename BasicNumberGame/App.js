import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  // const [fontsLoaded, fontError] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  // });

  // if(!fontsLoaded) {
  //   return <AppLoading />;
  // }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGameOver(false);
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
    setGameOver(true);
  }

  const onRestart = () => {
    setUserNumber(null);  
    setGuessRounds(0);
    setGameOver(false);
  }

  let screen = <StartGameScreen onStartGame={startGameHandler} />;
  if( parseInt(userNumber)) {
    screen = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  }

  if( gameOver && parseInt(userNumber) ) {
    screen = <GameOverScreen guessRounds={guessRounds} userNumber={userNumber} onRestart={onRestart}/>;
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
