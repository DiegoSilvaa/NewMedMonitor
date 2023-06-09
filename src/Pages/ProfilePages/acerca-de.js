import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import background from '../../assets/back3.png';
import { ImageBackground } from 'react-native';

const SobreNosotros = () => {
  return (
    <ImageBackground source={background} style={{flex: 1,  resizeMode: 'cover'}}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ACME Corp.</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.text}>(123) 456-7890</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>info@acmecorp.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Website:</Text>
          <Text style={styles.text}>www.acmecorp.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.text}>123 Main St, Anytown USA</Text>
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
    fontSize: 20,
    marginLeft: 10,
  },
});

export default SobreNosotros;