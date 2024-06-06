import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GloablStyles } from "../../constants/styles";

function ManageExpenses({id, discription, date, amount}) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpenses', { expenseId: id });
  }
  return (
    <Pressable onPress={expensePressHandler} 
      style={({pressed}) => pressed && styles.press}
      // android_ripple={{ color: GloablStyles.colors.primary500 }}
    >
      <View style={styles.expensesItem}>
        <View>
          <Text style={[styles.textBase, styles.discription]}>{discription}</Text>
          <Text style={styles.textBase}>{date.toString() }</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount.toFixed(2) }</Text>
          </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  press: {
    opacity: 0.75,
  },
  expensesItem: {
    padding: 12,
    marginVertical: 8,
    backgrounudColor: GloablStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GloablStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GloablStyles.colors.primary50,
  },
  discription: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  amountContainer: {
    alignItems: 'center',
    paddingHorizantal: 12,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    minWidth: 60,
  },
  amount: {
    color: GloablStyles.colors.primary500,
    fontWeight: 'bold'
  },
});

export default ManageExpenses;