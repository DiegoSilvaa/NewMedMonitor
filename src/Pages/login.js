import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity, Keyboard } from 'react-native';
import { Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAvoidingView} from 'react-native';
import background from '../assets/back3.png';
import { ImageBackground } from 'react-native';
import userLogo from '../assets/usuario.png';
import passLogo from '../assets/cerrar.png';

export default function LogIn({navigation}) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        },
        avoidContainer: {
            flex: 1,
        },
        textInputContainer: {
            backgroundColor: 'white',
            justifyContent: 'center',
            marginBottom: 30,
            width: '90%',
            borderBottomColor: theme.colors.sexto,
            borderBottomWidth: 2,
            color: '#808080', 
          },
          botones: {
            backgroundColor: theme.colors.sexto,
            width: '60%',
            alignItems: 'center',
        }, 
        title: {
            fontSize: 40,
            fontWeight: 'bold',
            color: theme.colors.segundo, // color naranja
            marginBottom: 10
        },
        topText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
        },
        topTextContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            marginBottom: 16,
        },
    });

    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const handlePress = () => {
      Keyboard.dismiss();
    };

    return (
        <ImageBackground source={background} style={{flex: 1,  resizeMode: 'cover'}}>
        <KeyboardAvoidingView 
        style={styles.avoidContainer} 
        behavior="padding">
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={1} onPress={handlePress}>
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{alignItems: 'center' }}>
                    <Text style={styles.title}> Iniciar Sesion </Text>
                </View>
                <View style={{flexDirection: 'column', width: '100%'}}>
                    <View style={styles.topTextContainer}>
                        <Image source={userLogo} style={{ height:30, width:30 }} />
                        <Text style={styles.topText}> Usuario o Correo Electronico </Text>
                    </View>
                    <View style={{width:'100%', alignItems: 'center'}}> 
                        <TextInput style={styles.textInputContainer} mode="flat" color="#808080" label="Usuario" value={user} onChangeText={text => setUser(text)} />
                    </View>
                    <View style={styles.topTextContainer}>
                        <Image source={passLogo} style={{ height:30, width:30 }} />
                        <Text style={styles.topText}> Contraseña </Text>
                    </View>
                    <View style={{width:'100%', alignItems: 'center'}}> 
                        <TextInput 
                        style={styles.textInputContainer}
                        mode="flat" 
                        label="Password" 
                        secureTextEntry={secureTextEntry}
                        value={pass} 
                        onChangeText={text => setPass(text)}
                        right={
                        <TextInput.Icon
                            icon="eye"
                            onPress={() => {
                            setSecureTextEntry(!secureTextEntry);
                            return false;
                            }}
                        />
                        }/>
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                <Button style={styles.botones} 
                    labelStyle={{ fontSize: 40, paddingTop: 19,  width: '100%' }} 
                    textColor='white'
                    onPress={() => navigation.navigate('Home')}> Entrar </Button>               
                </View>
            </View>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        </ImageBackground>
    );
}