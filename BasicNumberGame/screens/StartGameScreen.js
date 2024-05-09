import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';

import PrimaryButton from '../components/UI/PrimaryButton';
import Title from '../components/UI/Title';

function StartGameScreen(params) {
	const [enteredValue, setEnteredValue] = useState('');

	const {height, Width} = useWindowDimensions();

	const numberInputHandler = (inputText) => {
		//setEnteredValue(inputText.replace(/[^0-9]/g, ''));
		setEnteredValue(inputText);
	}

	const resetInputHandler = () => {
		setEnteredValue('');
	}

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid number!', 
				'Number has to be between 1 and 99.', 
				[{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
			);	
			return;
		}
		params.onStartGame(chosenNumber)
	}

	const marginTopDimesions = height < 400 ? 40 : 100;

	return(
		<ScrollView>
			<KeyboardAvoidingView style={styles.screen} behavior='height'  keyboardVerticalOffset={30}>
				<View style={[styles.inputContainer, {marginTop: marginTopDimesions}]}>
					<Title>Start a New Game!</Title>
					<Text style={styles.text}>Enter a number:</Text>
					<TextInput 
						style={styles.textInput} 
						maxLength={2} 
						keyboardType='number-pad'
						onChangeText={numberInputHandler}
						autoCorrect={false}
						value={enteredValue}
					/>
					<View style={styles.buttonsContainer}>
						<View style={styles.buttonContainer}>
							<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
						</View>
						<View style={styles.buttonContainer}>
							<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	)
}

export default StartGameScreen;

// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	inputContainer: {
		// flex: 1,
		padding: 16,
		// marginTop: windowHeight < 400 ? 40 : 100,
		marginHorizontal: 20,
		// backgroundColor: '#72063a',
		alignItems: 'center',
		borderRadius: 8,
		elevation: 5,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
	},
	textInput: {
		borderBottomColor: 'black',
		borderBottomWidth: 2,
		width: 100,
		marginVertical: 10,
		textAlign: 'center',
		height: 50,
		fontWeight: 'bold',
		fontSize: 24,
	},
	buttonsContainer: {
		// marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonContainer: {
		flex: 1,
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
	}
})