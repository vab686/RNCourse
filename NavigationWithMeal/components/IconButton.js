import { Pressable , StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function IconButton(params) {
  return (
    <Pressable onPress={params.onPress} style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={params.icon} size={24} color={params.color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  }
})