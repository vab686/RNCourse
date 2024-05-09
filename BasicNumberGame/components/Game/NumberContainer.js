import { Text, View, StyleSheet, Dimensions } from "react-native";

function NumberContainer(params) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{params.children}</Text>
        </View>
    )
}

export default NumberContainer;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: 'black',
        padding: windowWidth < 450 ? 12 : 20,
        borderRadius: 10,
        margin: windowWidth < 450 ? 12 : 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: 'black',
        fontSize: windowWidth < 450 ? 24 : 30,
    }
})