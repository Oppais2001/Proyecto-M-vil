import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../screens/Inicio';
import Dialogos from '../screens/Dialogos';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Inicio" component={Inicio} />
            <Stack.Screen name="Dialogos" component={Dialogos} />
            
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;