import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from '../components/UI/PrimaryButton';

generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if(rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(params) {
	const initialGuess = generateRandomBetween(1, 100, params.userChoice);
	const [currentGuess, setCurrentGuess] = useState(initialGuess)
	console.log('currentGuess:', currentGuess, params.userChoice);
	useEffect(() => {
		if( parseInt(currentGuess) === parseInt(params.userChoice)) {
			// Game Over
			params.onGameOver();
		}
	}, [currentGuess, params.userChoice, params.onGameOver])

	nextGuessHandler = (direction) => {
		if((direction === 'lower' && currentGuess < params.userChoice) || (direction === 'greater' && currentGuess > params.userChoice)) {
			Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
			return;
		}
		if(direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		const newNumber =  generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		setCurrentGuess(newNumber);
	}

	return(
		<View style={styles.screen} >
			<Title>Oppoent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text style={styles.text}>Higher Or Lower ?</Text>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler('lower')}><Ionicons name="remove" size={24} color="white" /></PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler('greater')}><Ionicons name="add" size={24} color="white" /></PrimaryButton>
					</View>
				</View>
			</View>
			{/* <View>Log Rounds</View>	 */}
		</View>
	)
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 10,
		textAlign: 'center',
		borderWidth: 1,
		borderColor: 'black',
		padding: 12,
	},
	text: {
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 8,
	},
	buttonsContainer: {
		// marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonContainer: {
		flex: 1,
	},
})