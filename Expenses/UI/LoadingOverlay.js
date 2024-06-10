import { View, ActivityIndicator } from "react-native"

import { GloablStyles } from "../constants/styles"

function LoadingOverlay() {
  return (
    <View style={{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 24,
        backgroundColor: GloablStyles.colors.primary800
      }}>
      <ActivityIndicator size='large' color='white' />
    </View>
  )
}

export default LoadingOverlay