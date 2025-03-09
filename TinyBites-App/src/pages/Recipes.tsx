import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../styles/Personalizacao';
import { fetchRecipes } from '../logic/Services';

const Recipes = () => {
  const recipes = fetchRecipes();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receitas</Text>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text>{item.name}</Text>
            <Text>{item.time}</Text>
            <Text>{item.servings}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button mode="outlined" onPress={() => {}}>
        Adicionar Receita
      </Button>
    </View>
  );
};

export default Recipes;