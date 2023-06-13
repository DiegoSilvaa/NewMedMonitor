import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Slider, 
    TextInput, Alert, KeyboardAvoidingView, TouchableOpacity, Keyboard,Dimensions } from 'react-native';
import { TextInput as PaperTextInput, useTheme, Button } from 'react-native-paper';
import background from '../../assets/back.png';
const { width } = Dimensions.get('window');

const NewSintoma = ({ navigation }) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
    },
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
      display: 'flex'
    },
    modalContainer: {
      width: width-10,
      height: width+30,
      backgroundColor: 'white',
      borderRadius: 10,
      justifyContent: 'center',
      flexDirection: 'column'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'black',
      textAlign: 'center',
    },
    label: {
      fontSize: 16,
      color: 'black',
      marginBottom: 5,
      marginLeft: 10
    },
    input: {
      backgroundColor: 'white',
      justifyContent: 'center',
      marginBottom: 10,
      width: '90%',
      borderColor: theme.colors.sexto,
      borderWidth: 2,
      color: '#808080',
      borderRadius: 10
    },
    slider: {
      marginBottom: 10,
      width: '100%'
    },
    sliderValue: {
      textAlign: 'center',
      color: 'black',
    },
    botones: {
      backgroundColor: theme.colors.sexto,
      width: '40%',
      alignItems: 'center',
    },
    inputCont: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 16,
    },
    inputDesc: {
        backgroundColor: 'white',
        justifyContent: 'center',
        marginBottom: 10,
        width: '90%',
        borderColor: theme.colors.sexto,
        borderWidth: 2,
        height: 100,
        color: '#808080',
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
  });
  const [nombreSintoma, setNombreSintoma] = useState('');
  const [intensidadSintoma, setIntensidadSintoma] = useState(0);
  const [notasSintoma, setNotasSintoma] = useState('');

  const handleCrearSintoma = () => {
    // Aquí puedes hacer algo con los datos del nuevo síntoma, como enviarlos a una API o guardarlos localmente.
    console.log('Nombre del síntoma:', nombreSintoma);
    console.log('Intensidad del síntoma:', intensidadSintoma);
    console.log('Notas del síntoma:', notasSintoma);

    // Metodo Post de Sintoma
    const url = 'https://med-monitor-api.herokuapp.com/api/v1/sintomas/';

    const data = {
      name: nombreSintoma,
      intensidad: [intensidadSintoma],
      recordar: true,
      terminarSintoma: false,
      notas: [notasSintoma],
      pacienteId: 1
    };
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseData => {
        // Manejar la respuesta exitosa
        console.log(responseData);
        Alert.alert(
          'Nuevo Síntoma',
          `Nombre del síntoma: ${nombreSintoma}\nIntensidad: ${intensidadSintoma}\nNotas: ${notasSintoma}`,
          [
            { text: 'OK', onPress: () => console.log('Alerta cerrada') }
          ]
        );
        setIntensidadSintoma(0);
        setNombreSintoma('');
        setNotasSintoma('');
      })
      .catch(error => {
        // Manejar el error
        console.error(error);
      });
  };

  return (
    <ImageBackground source={background} style={styles.container}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.mainContainer}>
          <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPress={Keyboard.dismiss}>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>Crear Nuevo Síntoma</Text>
                <Text style={styles.label}>Nombre del Síntoma:</Text>
                 <View style={styles.inputCont}>
                    <TextInput
                        style={styles.input}
                        mode="flat"
                        color="#808080"
                        value={nombreSintoma}
                        onChangeText={text => setNombreSintoma(text)}
                    />
                 </View>
                 <Text style={styles.label}>Intensidad del Síntoma:</Text>
                 <View style={styles.inputCont}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={10}
                        step={1}
                        value={intensidadSintoma}
                        onValueChange={value => setIntensidadSintoma(value)}
                    />
                    <Text style={styles.sliderValue}>{intensidadSintoma}</Text>
                </View>
                <Text style={styles.label}>Notas del Síntoma:</Text>
                <View style={styles.inputCont}>
                    <PaperTextInput
                        multiline
                        value={notasSintoma}
                        onChangeText={text => setNotasSintoma(text)}
                        style={styles.inputDesc}
                    />
                </View>

              <View style={{ width: '100%', alignItems: 'center' }}>
                <Button style={styles.botones}
                  labelStyle={{ fontSize: 20, width: '100%' }}
                  textColor='white'
                  onPress={() => handleCrearSintoma()}> Crear </Button>
              </View>
            </View>
          </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default NewSintoma;
