import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import useColorScheme from '../hooks/useColorScheme';
import RecipesScreen from '../screens/RecipesScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { OrdersParamList, StockParamList, RecipesParamList, RecipesDetailParamList } from '../types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StockScreen from '../screens/StockScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Recipes" component={RecipesNavigator} />
      <Drawer.Screen name="Orders" component={OrdersNavigator} />
      <Drawer.Screen name="Stock" component={StockNavigator} />
    </Drawer.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const RecipesStack = createStackNavigator<RecipesParamList>();

function RecipesNavigator() {
  return (
    <RecipesStack.Navigator>
      <RecipesStack.Screen
        name="Recipes"
        component={RecipesScreen}
        options={{ headerTitle: 'Recipes' }}
      />
    </RecipesStack.Navigator>
  );
}

const StockStack = createStackNavigator<StockParamList>();

function StockNavigator() {
  return (
    <StockStack.Navigator>
      <StockStack.Screen
        name="Stock"
        component={StockScreen}
        options={{ headerTitle: 'Stock' }}
      />
    </StockStack.Navigator>
  );
}

const OrderStack = createStackNavigator<OrdersParamList>();

function OrdersNavigator() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ headerTitle: 'Orders' }}
      />
    </OrderStack.Navigator>
  );
}
