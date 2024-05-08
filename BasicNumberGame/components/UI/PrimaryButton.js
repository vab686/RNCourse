import { View, Text, StyleSheet, Pressable } from 'react-native';

function PrimaryButton({children, onPress}) {
  
  return (
    <View style={styles.buttonOuter}>
      <Pressable 
        style={ ({pressed}) => pressed ? [ styles.buttonInner, styles.pressed] : styles.buttonInner} 
        onPress={onPress} 
        android_ripple={{color: 'gray'}}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 25,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInner: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  }
})
