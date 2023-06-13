import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import background from '../../assets/back3.png';
import { ImageBackground } from 'react-native';

const SobreNosotros = () => {
  return (
    <ImageBackground source={background} style={{flex: 1,  resizeMode: 'cover'}}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Med Monitor S.A</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.text}>(+52) 8112813043</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>diegosilva11042002@gmail.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Website:</Text>
          <Text style={styles.text}>https://med-monitor-api.herokuapp.com/</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.text}>Priv. Bocanegra 602</Text>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  info: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#2c3e50',
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
  },
});

export default SobreNosotros;