import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Recipes from '../pages/Recipes';
import ShoppingList from '../pages/ShoppingList';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
         */}
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Recipes" component={Recipes} />
        <Tab.Screen name="ShoppingList" component={ShoppingList} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabsNavigator;