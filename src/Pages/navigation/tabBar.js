import React from 'react'; 
import { View, Pressable, Dimensions, StyleSheet, Text, Image } from 'react-native';
import NavigationIcon from './navigationIcon'; 
import barLogo from '../../assets/barLogo.png';

const { width } = Dimensions.get('window');
const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        if (route.name === "PlaceholderScreen") {
          return (
            <View key={index} style={[styles.mainItemContainer, styles.placeholderItemContainer]}>
              <Image source={barLogo} style={styles.placeholderLogo} />
            </View>  
          );
        }
        
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={[styles.mainItemContainer, { borderRightWidth: label === "notes" ? 3 : 0 }]}>
            <Pressable
              onPress={onPress}
              style={{ backgroundColor: isFocused ? "white" : "#8bd4cb", borderRadius: 20 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 15 }}>
                <NavigationIcon route={label} isFocused={isFocused} />
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    backgroundColor: '#4d8291',
    borderRadius: 25,
    marginHorizontal: width * 0.05,
    width: '90%'
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 10,
    borderRadius: 1, 
    borderColor: "#333B42",
  }, 
  placeholderItemContainer: {
    marginTop: -30,
  },
  placeholderLogo: {
    height: 100,
    width: 100,
  },
  logo: {
    width: 50, // Ajusta el ancho según tus necesidades
    height: 50, // Ajusta la altura según tus necesidades
  },
});

export default TabBar;
