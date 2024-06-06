import { FlatList, View, StyleSheet } from 'react-native';

import MealItem from './MealItem';

function MealList(props) {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
        id={itemData.item.id}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
  }
});

export default MealList;