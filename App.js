/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RoutesApp from './src/routing-app';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    primero: '#649dad',
    segundo: '#66c6ba',
    tercero: 'white',
    cuarto: '#85b2bf',
    quinto: '#4d8291',
    sexto: '#8bd4cb',
  },
};

function App() {

  return (
    <PaperProvider theme={theme}>
      <RoutesApp/>
    </PaperProvider>
  );
}

export default App;
