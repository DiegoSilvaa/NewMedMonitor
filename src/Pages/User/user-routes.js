import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../navigation/tabNav';
import BorrarCuenta from '../ProfilePages/delete';
import SobreNosotros from '../ProfilePages/acerca-de';
import Info from '../ProfilePages/info';
import NewSintoma from './nuevoSintoma';
const Stack = createNativeStackNavigator();

const UserRoutesApp = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={"tabNav"}>
        <Stack.Screen screenOptions={{headerShown:false}} name="tabNav" component={TabNavigator} />
        <Stack.Screen name="borrarCuenta" component={BorrarCuenta} />
        <Stack.Screen name="acercaDe" component={SobreNosotros} />
        <Stack.Screen name="info" component={Info} />
        <Stack.Screen name="newSintoma" component={NewSintoma} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserRoutesApp;
