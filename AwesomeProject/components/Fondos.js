import React, {useState} from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const Fondos = ({ indice }) => {
    const [HabitacionOpacidad, setHabitacionOpacidad] = useState(0);
    const [HabitacionZoomOpacidad, setHabitacionZoomOpacidad] = useState(0);
    const [Calle1Opacidad, setCalle1Opacidad] = useState(0);
    console.log('Indice Fondos:', indice)
    if ((indice >= 0 && indice<61)||indice>=63){
        console.log('Habitacion')
        if(HabitacionZoomOpacidad == 1){
            setHabitacionZoomOpacidad(0)
        }
        if(HabitacionOpacidad == 0){
            setHabitacionOpacidad(1);
        }
    }else if(indice==61||indice==62){
        console.log('Habitacion Zoom')
        if(HabitacionZoomOpacidad == 0){
            setHabitacionOpacidad(0);
            setHabitacionZoomOpacidad(1);
        }
    }
    return(
        <>
            <Image
            source={require('../assets/img/backgrounds/habitacion_noche.png')}
            style={{...styles.Fondo, opacity: HabitacionOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={require('../assets/img/backgrounds/habitacion_noche.png')}
            style={{...styles.HabitacionZoom, opacity: HabitacionZoomOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={require('../assets/img/backgrounds/fondo_calle1.png')}
            style={{...styles.Fondo, opacity: Calle1Opacidad}}
            cachePolicy={'memory'}
            />
        </>
    )
}
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
    Fondo: {
        height: 100*vh,
        width: 107.5*vw,
        alignSelf: 'center',
        position:"absolute",
        top: 0,
        left:-10
    },
    HabitacionZoom: {
        height: 180*vh,
        width: 200*vw,
        position:"absolute",
        top: -50*vh,
        left: -50*vw
    }
})
export default Fondos;