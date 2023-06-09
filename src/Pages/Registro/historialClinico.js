import * as React from 'react';
import { View, Text, ScrollView } from "react-native";
import { Checkbox } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Button } from 'react-native-paper';
import background from '../../assets/back2.png';
import { ImageBackground } from 'react-native';

const HistorialClinico = ({ navigation }) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 16,
        },
        scrollView: {
            flex: 1,
            width: '100%',
        },
        checkBoxContainer: {
            flexDirection: 'row',
            marginTop: 10,
            width: '100%',
            backgroundColor: theme.colors.tercero,
            borderRadius: 5,
        },
        checkBoxLabel: {
            flex: 1,
            width: '100%',
        },
        buttonContainer: {
            backgroundColor: theme.colors.sexto,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            borderRadius: 10,
        },
        title: {
            fontSize: 40,
            fontWeight: 'bold',
            color: theme.colors.segundo, // color naranja
            marginBottom: 10
        },
    });

    const [checkboxData, setCheckboxData] = React.useState([
        { id: 1, label: 'Hipertensión arterial', value: false },
        { id: 2, label: 'Diabetes Mellitus', value: false },
        { id: 3, label: 'Colesterol elevado', value: false },
        { id: 4, label: 'Obesidad', value: false },
        { id: 5, label: 'Consumo de tabaco', value: false },
        { id: 6, label: 'Sedentarismo', value: false },
        { id: 7, label: 'Mala alimentación', value: false },
        { id: 8, label: 'Malos hábitos de sueño', value: false },
        { id: 9, label: 'Depresión', value: false },
        { id: 10, label: 'Ansiedad', value: false }
    ]);

    const handleCheckboxChange = (id) => {
        const newData = checkboxData.map((item) => {
            if (item.id === id) {
                return { ...item, value: !item.value };
            }
            return item;
        });
        setCheckboxData(newData);
    };

    return (
        <ImageBackground source={background} style={{flex: 1,  resizeMode: 'cover'}}>
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                    <Text style={styles.title}> Historial Familiar </Text>
            </View>
            <ScrollView style={styles.scrollView}>
                {checkboxData.map((item) => (
                    <View style={[
                        styles.checkBoxContainer,
                        { backgroundColor: item.value ? theme.colors.cuarto : theme.colors.tercero,}
                    ]} key={item.id}>
                        <Checkbox.Item
                            style={styles.checkBoxLabel}
                            mode="android"
                            labelStyle={{ color: item.value ? theme.colors.tercero : theme.colors.primero, fontWeight: 600 }}
                            label={item.label}
                            status={item.value ? 'checked' : 'unchecked'}
                            onPress={() => handleCheckboxChange(item.id)}
                        />
                    </View>
                ))}
            </ScrollView>
            <Button
                style={styles.buttonContainer}
                labelStyle={{ color: 'white' }}
                mode="contained"
                onPress={() => navigation.navigate('Login')}
            >
                Crear Usuario
            </Button>
        </View>
        </ImageBackground>
    );
}

export default HistorialClinico;