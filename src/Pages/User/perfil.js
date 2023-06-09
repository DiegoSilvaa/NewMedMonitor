import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { TouchableHighlight } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Logo from '../../assets/usuario.png';
import info from '../../assets/info.png';
import about from '../../assets/acerca-de.png';
import borrar from '../../assets/borrar.png';
import background from '../../assets/back2.png';
import { ImageBackground } from 'react-native';

const Perfil = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
          alignItems: 'center',
          marginTop: 30,
        },
        iconContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        },
        name: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#333',
        },
        InText : {
            fontSize: 30,
            marginLeft: 10
        },
        listContainer: {
            width: '100%',
        },
      });

      const mapaNav = [
        {
            actions: 'info',
            nombre: 'Info Personal',
            icon: info,
        },
        {
            actions: 'acercaDe',
            nombre: 'Sobre Nosotros',
            icon: about,
        },
        {
            actions: 'borrarCuenta',
            nombre: 'Borrar Cuenta',
            icon: borrar,
        },
    ];

    let height = 200;
    let width = 200;
    return (
        <ImageBackground source={background} style={{flex: 1,  resizeMode: 'cover'}}>
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={Logo} style={{ height, width }} />
            </View>
            <View style={styles.listContainer}>
                {mapaNav.map((producto) => (
                    <TouchableHighlight 
                        key={producto.nombre}
                        style={{flexDirection: 'row', alignItems: 'center'}} 
                        onPress={() => navigation.navigate(producto.actions)}
                        underlayColor="#dddddd"
                        activeOpacity={0.5}>
                        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                            <Image source={producto.icon} style={{ height:50, width:50 }} />
                            <Text style={styles.InText}> {producto.nombre} </Text>
                        </View>
                    </TouchableHighlight>
                ))}
            </View>
        </View>
        </ImageBackground>
    );
}

export default Perfil;