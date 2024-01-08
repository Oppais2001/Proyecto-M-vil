import { useState } from 'react';
import { View, TouchableWithoutFeedback, Text} from 'react-native';
import { decision1 } from '../../components/ClasesDialogos'
import { EstilosDialogos } from '../Estilos.jsx';
const SistemaDecisiones = ({ indice, setindice, animacion}) => {
    const [ ColorOpcionA, setColorOpcionA] = useState ('dimgray')
    const [ ColorOpcionB, setColorOpcionB] = useState ('transparent')

    const DecisionA = () => {
        console.log('Decision A')
        if( ColorOpcionA == 'dimgray'){
            decision1.ElegirDecision(true);
            setindice(indice + 1);
        }else{
            setColorOpcionB('transparent')
            setColorOpcionA('dimgray')
        }
    }
    const DecisionB = () => {
        console.log('Decision B')
        if( ColorOpcionB == 'dimgray'){
            decision1.ElegirDecision(false);
            setindice(indice + 1);
        }else{
            setColorOpcionA('transparent')
            setColorOpcionB('dimgray')
        }

    }
    if(indice==79){
        return (
        <>
            <View style={{...EstilosDialogos.RecuadroDecisiones}}>
            <Text style={{...EstilosDialogos.Decisiones,backgroundColor: ColorOpcionA}}> {decision1.MostrarOpcionA()}</Text>
            <Text style={{...EstilosDialogos.Decisiones,backgroundColor: ColorOpcionB}}> {decision1.MostrarOpcionB()}</Text>
            </View>
            <TouchableWithoutFeedback
                onPress={DecisionA}
                disabled={animacion}>
                <View
                style={{...EstilosDialogos.BotonesDecisiones,...EstilosDialogos.BotonA}}
                />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={DecisionB}
                disabled={animacion}>
                <View
                style={{...EstilosDialogos.BotonesDecisiones,...EstilosDialogos.BotonB}}
                />
            </TouchableWithoutFeedback>

        </>
        )
    }
}

export default SistemaDecisiones;