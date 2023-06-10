import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import background from '../assets/back.png';
import { ImageBackground } from 'react-native';

const Log = ({ navigation }) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
        },
        logo: {
            width: '80%',
            height: '40%',
            marginBottom: 40,
        },
        button: {
            width: '70%',
            marginBottom: 16,
            backgroundColor: theme.colors.primero,
        },
    });


    // Acciones para navegar a pantalla de Login y SignUp
    const handleLogin = () => {
        navigation.navigate('Login'); // Navegar a la pantalla de Login
    };
    
      const handleSignup = () => {
        navigation.navigate('Signup'); // Navegar a la pantalla de Signup
    };

  return (
    <ImageBackground source={background} style={{flex: 1,  resizeMode: 'cover'}}>
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Button
        mode="contained"
        style={styles.button}
        onPress={handleLogin}
        labelStyle={{fontSize: 20, color: 'white'}}
      >
        Entrar
      </Button>
      <Button
        mode="contained"
        style={styles.button}
        onPress={handleSignup}
        labelStyle={{fontSize: 20, color: 'white'}}
      >
        Registrarse
      </Button>
    </View>
    </ImageBackground>
  );
};

export default Log;
