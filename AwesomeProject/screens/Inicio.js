import React from 'react';
import { Alert, StyleSheet, View, Dimensions, Image, Text, BackHandler } from 'react-native';
import InicioBoton from '../components/InicioBoton';

const Inicio = ({navigation}) => {
    const Inicio = () => {
        navigation.navigate("Dialogos")
    }
    const handleExitApp = () => {
        Alert.alert(
          'Salir',
          '¿Estás seguro de que quieres salir de la aplicación?',
          [
            { text: 'No', onPress: () => console.log('Cancelado'), style: 'cancel' },
            { text: 'Sí', onPress: () => BackHandler.exitApp() },
          ],
          { cancelable: false }
        );
      };
    return (
        <View style={styles.container}>
            <Image
            style={styles.imagen}
            source={require('../assets/img/backgrounds/esfera_cerrada.png')}/>
            <Text style={{...styles.InicioTexto,...styles.Texto1}}>Gantz</Text>
            <Text style={{...styles.InicioTexto,...styles.Texto2}}>Nexus</Text>
            <InicioBoton text = "Iniciar" onPress = {Inicio}/>
            <InicioBoton text = "Salir"  onPress = {handleExitApp}/>
        </View>
  );
};
const dimension1 = Dimensions.get('window').width;
const dimension2 = Dimensions.get('window').height;
var Alto = dimension2;
var Ancho = dimension1;
if (dimension1<dimension2){
    Alto = dimension1;
    Ancho = dimension2;
}
const vh = Alto * 0.01;
const vw = Ancho * 0.01;
console.log('Alto en pantalla: ' + Alto + ' - Ancho en pantalla: ' + Ancho )

const styles = StyleSheet.create({
    container: {
        height: Alto,
        width: Ancho + 7*vw,
        backgroundColor: '#B01F00',
        alignItems: 'center',
    },
    imagen: {
        position: 'absolute',
        width: 50*vw,
        height: 50*vw,
        top: -10*vw,

    },
    InicioTexto: {
        position:"absolute",
        top:1*vh,
        fontFamily:'Genjiro',
        fontSize: 24*vh,
        color:'white',
        textAlign: "center",
        lineHeight: 20*vh
    },
    Texto1: {
        width:8*vw,
        left:15*vw
    },
    Texto2: {
        width:7.5*vw,
        left: 82.5*vw
    }
})
export default Inicio;