import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { styles } from '../styles/Personalizacao';
import { fetchShoppingList } from '../logic/Services';

const ShoppingList = () => {
  const shoppingList = fetchShoppingList();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <FlatList
        data={shoppingList}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Adicionar Item" onPress={() => {}} />
    </View>
  );
};

export default ShoppingList;