import { Text, View, Image } from 'react-native';
import { DialogosEsfera } from '../../components/ListaDialogos.js';
import { EstilosDialogos } from '../Estilos.jsx';
import { useState } from 'react';

const RecuadroDialogosEsfera = ({ indice , Cebollin}) => {
    const [TextoOpacidad, setTextoOpacidad] = useState(0);
    EstiloDinamico = EstilosDialogos.TextoEsfera1;
    console.log('Indice del Dialogo: ' + String(indice))
    let IndiceEsfera;
    let CebollinOpacidad = 0;
    if (indice == 61){
        IndiceEsfera = 0;
        if(TextoOpacidad == 0){
            setTextoOpacidad(1);
        }
    } else if(indice == 62){
        IndiceEsfera = 1;
        EstiloDinamico= EstilosDialogos.TextoEsfera2;
        if(TextoOpacidad == 0){
            setTextoOpacidad(1);
        }
        if(CebollinOpacidad==0){
            CebollinOpacidad = 1;
        }
    } else if(indice == 63){
        if(TextoOpacidad == 1){
            setTextoOpacidad(0);
        }
    }
    return(
        <>
            <View style={EstilosDialogos.RecuadroEsfera}>
            <Text
                style={{...EstilosDialogos.TextoEsfera,opacity: TextoOpacidad,...EstiloDinamico}}>
                {DialogosEsfera[IndiceEsfera]}
            </Text>
            <Image source={{...Cebollin}} style={{...EstilosDialogos.CebollinEsfera,opacity: CebollinOpacidad}}/>
            </View>
        </>
    )
}

export default RecuadroDialogosEsfera;