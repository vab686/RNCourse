import { View, Text, StyleSheet } from 'react-native';

import Title from '../components/UI/Title';
import PrimaryButton from '../components/UI/PrimaryButton';

function GameOverScreen(params) {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      {/* <Text>Number of Rounds: {params.roundsNumber}</Text>
      <Text>Number was: {params.userNumber}</Text>
      <PrimaryButton onPress={params.onRestart}>Restart</PrimaryButton> */}
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})