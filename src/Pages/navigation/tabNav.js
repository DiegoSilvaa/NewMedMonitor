import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Home from '../User/home';
import Sintomas from '../User/sintomas';
import Perfil from '../User/perfil';
import Notificaciones from '../User/notificaciones';
import TabBar from './tabBar';
const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
   
    return (
        <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName={"Home"} tabBar={props => <TabBar {...props} />} >
            <Tab.Screen  name="Home" component={Home} />
            <Tab.Screen  name="Sintomas" component={Sintomas} />
            <Tab.Screen  name="PlaceholderScreen" component={Home} />
            <Tab.Screen  name="Notificaciones" component={Notificaciones} />
            <Tab.Screen  name="Perfil" component={Perfil} />
        </Tab.Navigator>
    );
}
