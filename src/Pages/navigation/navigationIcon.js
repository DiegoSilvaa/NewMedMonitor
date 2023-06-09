import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import HomeSvg from '../../assets/homa.png';
import HomeSvg2 from '../../assets/homa.png';
import Sintoma from '../../assets/health-and-care.png';
import Sintoma2 from '../../assets/health-and-care.png';
import Perfil from '../../assets/usuario.png';
import Perfil2 from '../../assets/usuario.png';
import not from '../../assets/doctor.png';
import not2 from '../../assets/doctor.png';

const NavigationIcon = ({ route, isFocused }) => {
  const renderIcon = (route, isFocused) => {
    let height = 30;
    let width = 30;

    switch (route) {
      case 'Home':
        return isFocused ? <Image source={HomeSvg2} style={{ height, width }} /> : <Image source={HomeSvg} style={{ height, width }} />;
      case 'Sintomas':
        return isFocused ? <Image source={Sintoma} style={{ height, width }} /> : <Image source={Sintoma2} style={{ height, width }} />;
      case 'Perfil':
        return isFocused ? <Image source={Perfil} style={{ height, width }} /> : <Image source={Perfil2} style={{ height, width }} />;
      case 'Notificaciones':
        return isFocused ? <Image source={not} style={{ height, width }} /> : <Image source={not2} style={{ height, width }} />;
      default:
        break;
    }
  };

  return (
    <View>
      {renderIcon(route, isFocused)}
    </View>
  );
};

const styles = StyleSheet.create({});

export default NavigationIcon;
