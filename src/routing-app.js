import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Log from './Pages/log';
import Login from './Pages/login';
import Signup from './Pages/signup';
import CuadroClinico from './Pages/Registro/cuadroClinico';
import HistorialClinico from './Pages/Registro/historialClinico';
import UserRoutesApp from './Pages/User/user-routes';
const Stack = createNativeStackNavigator();

const RoutesApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo">
        <Stack.Screen
          name="Logo"
          component={Log}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Cuadro" component={CuadroClinico} />
        <Stack.Screen name="Historial" component={HistorialClinico} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={UserRoutesApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesApp;
