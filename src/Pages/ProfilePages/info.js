import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import background from '../../assets/back.png';
import { ImageBackground } from 'react-native';

export default function Info() {
  return (
    <ImageBackground source={background} style={{flex: 1,  resizeMode: 'cover'}}>
    <View style={{flex:1, marginTop: '10%',}}>
        <View style={styles.container}>
            <Text style={styles.username}>John Doe</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.info}>john.doe@example.com</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.info}>123-456-7890</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.info}>123 Main St, Anytown, USA</Text>
            </View>
        </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '20%'
  },
  username: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  info: {
    fontSize: 20,
    marginLeft: 10,
  },
});