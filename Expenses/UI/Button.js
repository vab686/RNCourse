import { Pressable, Text, View, StyleSheet } from "react-native";

import { GloablStyles } from "../constants/styles";

function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 6,
    borderRadius: 4,
    backgroundColor: GloablStyles.colors.primary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  flatText: {
    color: GloablStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GloablStyles.colors.primary100,
    borderRadius: 4,
  },
});

export default Button;