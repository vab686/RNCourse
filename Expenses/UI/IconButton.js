import { Pressable, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function IconButton({ icon, size, color, onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed } >
      <View style={styles.buttonContainer} >
        <MaterialIcons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 6,
    borderRadius: 24,
    marginHorizontal: 12,
    marginVertical: 6,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default IconButton;