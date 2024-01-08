import React, {useEffect, useState, Component} from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './src/screen/Inicio.jsx';
import Dialogos from './src/screen/Dialogos.jsx';
import Combate from './src/screen/Combate.jsx';
import Muerte from './src/screen/Muerte.jsx'

const Stack = createNativeStackNavigator();
export default function App(){
    return (
      <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Inicio" 
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="Dialogos" component={Dialogos}/>
        <Stack.Screen name="Combate" component={Combate}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
