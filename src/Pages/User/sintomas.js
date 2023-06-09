import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useTheme, Button } from 'react-native-paper';
import background from '../../assets/back.png';
import { ImageBackground } from 'react-native';

export default function Sintomas({navigation}) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            width: '100%',
            paddingTop: 20,
            alignItems: 'center'
        },
        containerAnadir: {
            width: '100%',
            alignItems: 'center',
            marginBottom: 10
        },
        containerCards: {
            width: '90%',
            backgroundColor: 'white',
            borderRadius: 20,
            height: '60%'
        },
        botones: {
            backgroundColor: theme.colors.primero,
            width: '45%',
            alignItems: 'center',

        }, 
        sintomasContainer: {
            width: '90%',
            backgroundColor: theme.colors.segundo,
        },
        heading: {
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 10
          },
          symptomList: {
            marginTop: 8,
          },
          symptomItem: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingVertical: 8,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          },
          symptomName: {
            flex: 1,
            fontSize: 20,
            marginLeft: 10
          },
          botonesCard: {
            backgroundColor: theme.colors.sexto,
            width: '35%',
            marginHorizontal: 5,
            alignItems: 'center',
          },
          buttonContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end'
          },
        
    });

    const [symptoms, setSymptoms] = React.useState([]);

    React.useEffect(() => {
        fetchData();
      }, []);

    const fetchData = () => {
    fetch('https://med-monitor-api.herokuapp.com/api/v1/sintomas/1', {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            setSymptoms(responseData)
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const addSymptom = () => {
        navigation.navigate('newSintoma'); // Navegar a la pantalla de Login
    };
  
    const removeSymptom = (id, id_paciente) => {
        console.log(id, id_paciente )
        const url = 'https://med-monitor-api.herokuapp.com/api/v1/sintomas/';
        const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            paciente_id: id_paciente
        })
        };

        fetch(url, requestOptions)
        .then((response) => {
            if (response.ok) {
            console.log('El elemento se eliminó exitosamente');
            fetchData();
            } else {
            console.error('Error al eliminar el elemento:', response.status);
            }
        })
        .catch((error) => {
            console.error('Error de red:', error);
        });
    };

    return (
        <ImageBackground source={background} style={{flex: 1,  resizeMode: 'cover'}}>
        <View style={styles.mainContainer}>
            <View style={styles.containerAnadir}>
            <Button style={styles.botones} 
                    labelStyle={{ fontSize: 20, width: '100%',  }} 
                    textColor='white'
                    onPress={addSymptom}> Añadir Sintoma </Button>
            </View>
            <Text style={styles.heading}>Lista de síntomas:</Text>
            <View style={styles.containerCards}>
                <FlatList
                    data={symptoms}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                    <View style={styles.symptomItem}>
                        <Text style={styles.symptomName}>{item.name}</Text>
                        <View style={styles.buttonContainer}>
                            <Button style={styles.botonesCard} 
                            labelStyle={{ fontSize: 12, width: '100%' }} 
                            textColor='white'
                            onPress={() => removeSymptom(item.id, 1)}
                            > Eliminar </Button>
                            <Button style={styles.botonesCard} 
                            labelStyle={{ fontSize: 12, width: '100%'}} 
                            textColor='white'
                            > Desactivar </Button>
                        </View>
                    </View>
                    )}
                    contentContainerStyle={styles.symptomList}
                />
            </View>
        </View>
        </ImageBackground>
    );
}