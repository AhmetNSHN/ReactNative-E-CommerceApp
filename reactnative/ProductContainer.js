import * as React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import pages
import Login from './Login'
import Register from './Register'

// product stack
import Product from './Product'

const Stack = createNativeStackNavigator();
const navigation = 
<NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name='product' options={{title: 'Product'}} component={Product}/>
  </Stack.Navigator>
</NavigationContainer>

export default function App() {
  return (
    navigation
  );
}