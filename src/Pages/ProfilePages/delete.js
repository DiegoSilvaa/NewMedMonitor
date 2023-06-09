import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import background from '../../assets/back2.png';
import { ImageBackground } from 'react-native';

const BorrarCuenta = () => {
  return (
    <ImageBackground source={background} style={{flex: 1,  resizeMode: 'cover'}}>
    <View style={{flex:1, marginTop: '10%'}}>
        <View style={styles.container}>
            <Text style={styles.title}>¿Está seguro que desea borrar su cuenta?</Text>
            <Text style={styles.subtitle}>Al borrar su cuenta, perderá todos sus datos y no podrá recuperarlos.</Text>
            <Button style={styles.deleteButton} labelStyle={styles.buttonLabelStyle} mode="contained" onPress={() => console.log('Cuenta borrada')}>
                Borrar cuenta
            </Button>
        </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '30%'
  },
  icon: {
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    elevation: 3,
  },
  buttonLabelStyle: {
    fontSize: 18,
    color: 'white',
  },
});

export default BorrarCuenta;