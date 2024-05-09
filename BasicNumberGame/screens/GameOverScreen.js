import { View, Text, StyleSheet, Image } from 'react-native';

import Title from '../components/UI/Title';
import PrimaryButton from '../components/UI/PrimaryButton';

function GameOverScreen(params) {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
      <Text style={styles.summeryText}>
        Your Phone needed <Text style={styles.highlight}>{ params.guessRounds } </Text> 
        rounds to guess the number <Text style={styles.highlight}>{ params.userNumber }</Text> 
      </Text>
      <PrimaryButton onPress={params.onRestart}>Restart</PrimaryButton>
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    // justifyContent: 'center',
    // alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 3,
    margin: 40,
    borderRadius: 150,
    borderColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summeryText: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
    marginVertical: 20,
  },
  highlight: {
    color: 'red',
    fontWeight: 'bold',
  }
})