import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import MainStack from './navigation/MainStack';
import Orientation from 'react-native-orientation-locker'; //libreria usada para el bloqueo de rotacion
import SystemNavigationBar from 'react-native-system-navigation-bar'; //libreria usada para el bloqueo de botones nativos

Orientation.lockToLandscape();//deja la rotacion de manera horizontal
SystemNavigationBar.navigationHide();//oculta los botones nativos de android

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden={true}/>
      <MainStack/>
    </SafeAreaView>
  );
};

export default App;