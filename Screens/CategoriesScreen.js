import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/data-dummy";

const CategoriesScreen = (props) => {
  const dataHandler = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      numColumns="2"
      keyExtractor={(item, index) => item.id}
      renderItem={dataHandler}
      data={CATEGORIES}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Categories Food",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    flex: 1,
    height: 150,
    margin: 16,
  },
});

export default CategoriesScreen;
