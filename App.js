import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavegacaoRaiz from './src/controleNavegacao/NavegacaoRaiz';

export default function App() {
  return (
    <NavigationContainer>
      <NavegacaoRaiz />
    </NavigationContainer>
  );
}
