import { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Text} from 'react-native';
import { EstilosDialogos } from '../Estilos.jsx';
import { DialogosPrincipales } from '../../components/ClasesDialogos';
import Inicio from '../Inicio.jsx';

const BotonesDialogos = ({ indice, setindice}) => {
    const [ proposicion, setproposicion ] = useState(undefined);
    useEffect(()=>{
        if(indice<78){
            setproposicion(indice>0);
        }else if(indice>=78){
            setproposicion(indice>80);
        }
    },[indice,proposicion]);
    const Avanzar = () =>{
        console.log(DialogosPrincipales.length)
        if(indice<DialogosPrincipales.length && indice!=79){
            setindice(indice + 1)
        }
    }
    const Retroceder = () => {
        console.log('Retroceder', proposicion)
        if(proposicion){
            setindice(indice-1)
        }
    }
    if (indice!=79){
        return (
        <>
            <TouchableWithoutFeedback
                onPress={Avanzar}>
                <View
                style={{...EstilosDialogos.botonesDialogos,...EstilosDialogos.boton1}}
                />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={Retroceder}>
                <View
                style={{...EstilosDialogos.botonesDialogos,...EstilosDialogos.boton2}}
                />
            </TouchableWithoutFeedback>
        </>
        )
    } else{
        console.log('Botones Desactivados')
    }
}

export default BotonesDialogos;