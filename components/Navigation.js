import 'react-native-gesture-handler';
import * as React from 'react';
import Pizzeria from './Pizzeria';
import University from './University';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Navigation=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Pizzeria} />
        <Stack.Screen name="University" component={University}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;