import { Text, View, StyleSheet } from "react-native";

function NumberContainer(params) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{params.children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: 'black',
        padding: 20,
        borderRadius: 10,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: 'black',
        fontSize: 30,
    }
})