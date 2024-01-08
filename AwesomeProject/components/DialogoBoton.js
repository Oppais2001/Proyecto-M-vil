import { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet, Dimensions} from 'react-native';
import { DialogosPrincipales } from '../core/ClasesDialogos';

const BotonesDialogos = ({ indice, setindice, animacion}) => {
    const [ proposicion, setproposicion ] = useState(undefined);
    const [ disabled, setdisabled] = useState(false);
    useEffect(()=>{
        if(indice<78){
            setproposicion(indice>0);
        }else if(indice>=78){
            setproposicion(indice>80);
        }
    },[indice,proposicion]);
    const Avanzar = () =>{
        setdisabled(true);
        setTimeout(() => {
            setdisabled(false)
            console.log(DialogosPrincipales.length)
            if(indice<DialogosPrincipales.length && indice!=79){
                setindice(indice + 1)
            }
        }, 500);
    }
    const Retroceder = () => {
        setdisabled(true);
        setTimeout(() => {
            setdisabled(false)
            console.log('Retroceder', proposicion)
            if(proposicion){
                setindice(indice-1)
            }
        }, 500);
    }
    if (indice!=79){
        return (
        <>
            <TouchableWithoutFeedback
                onPress={Avanzar}
                disabled={disabled&&animacion}>
                <View
                style={{...styles.botonesDialogos,...styles.boton1}}
                />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={Retroceder}
                disabled={disabled&&animacion}>
                <View
                style={{...styles.botonesDialogos,...styles.boton2}}
                />
            </TouchableWithoutFeedback>
        </>
        )
    } else{
        console.log('Botones Desactivados')
    }
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

const styles = StyleSheet.create({
    botonesDialogos: {
        height:100*vh,
        width:50*vw,
        position:"absolute",
        top: 0,
        backgroundColor:'transparent'
    },
    boton1: {
        left:50*vw
    },
    boton2: {
        left:0
    },
})
export default BotonesDialogos;