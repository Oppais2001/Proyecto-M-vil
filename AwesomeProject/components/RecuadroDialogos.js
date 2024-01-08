import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Kurono, Kato, Kishimoto, Nishi, Perro, Hojo, Sadako, Cebollin, MrCebollin, decision1, decision2 , DialogosPrincipales} from '../core/ClasesDialogos';

const RecuadroDialogos = ({ indice }) => {
    let nombre;
    let color;
    let opacidad;
    console.log('Indice del Dialogo: ' + String(indice))
    if (indice < 0){
        opacidad = 0
    }else{
        opacidad = 1
    }
    if(Kurono.ComprobarIndice( indice + 1 )){
        nombre = 'Kurono';
        color = 'darkorange'
    }else if (Kato.ComprobarIndice( indice + 1 )){
        nombre = 'Kato';
        color = 'dodgerblue'
    }else if (Kishimoto.ComprobarIndice( indice + 1 )){
        nombre = 'Kishimoto';
        color = 'hotpink'
    }else if (Nishi.ComprobarIndice( indice + 1 )){
        nombre = 'Nishi';
        color = 'red'
    }else if (Perro.ComprobarIndice( indice + 1 )){
        nombre = 'Perro';
        color = 'brown'        
    }else{
        nombre = 'Error, No Definido'
        color = 'red'
    }
    return(
        <>
            <View style={{...styles.Recuadro, opacity: opacidad * 0.5}}></View>
            <View style={{...styles.RecuadroDialogo, opacity: opacidad}}>
                <Text style={{...styles.Nombre, color: color}}>{nombre}</Text>
                <Text style={styles.Dialogos}>{DialogosPrincipales[ indice ]}</Text>
            </View>
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

const styles = StyleSheet.create({
    Recuadro: {
        height: 33*vh,
        width: 108*vw,
        position:"absolute",
        top:68*vh,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: "white",
        backgroundColor:"black"
    },
    RecuadroDialogo: {
        height: 25*vh,
        width:70*vw,
        position:"absolute",
        top:68*vh,
        backgroundColor:"transparent"
    },
    Dialogos: {
        color: 'white',
        position: 'relative',
        top: 1*vh,
        left: 15*vw,
        fontSize: 4*vh,
        fontFamily: 'NewWildWords'
    },
    IconDialogos: {
        position:'absolute',
        top: 22.5*vh,
        left: 95*vw,
    },
    Nombre: {
        position: 'relative',
        fontFamily: 'upheavtt',
        position: 'relative',
        top: 1 *vh,
        left: 15*vw,
        fontSize: 6*vh
    }
})
export default RecuadroDialogos;