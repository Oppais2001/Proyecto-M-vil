import { AntDesign } from '@expo/vector-icons'; 
import { Text, View} from 'react-native';
import { Kurono, Kato, Kishimoto, Nishi, Perro, Hojo, Sadako, Cebollin, MrCebollin, decision1, decision2 , DialogosPrincipales} from '../../components/ClasesDialogos.js';
import { EstilosDialogos } from '../Estilos.jsx';

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
            <View style={{...EstilosDialogos.Recuadro, opacity: opacidad * 0.5}}></View>
            <View style={{...EstilosDialogos.RecuadroDialogo, opacity: opacidad}}>
                <Text style={{...EstilosDialogos.Nombre, color: color}}>{nombre}</Text>
                <Text style={EstilosDialogos.Dialogos}>{DialogosPrincipales[ indice ]}</Text>
                <AntDesign name='caretdown' size={24} color='white' style={{...EstilosDialogos.IconDialogos}}/>
            </View>
        </>
    )
}

export default RecuadroDialogos;