
import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableWithoutFeedback, StatusBar} from "react-native";
import { EstilosInicio } from './Estilos';

const Inicio = ({navigation})=>{
    const [ready, setReady] = useState(false);
    /* Ruta de Imagenes en cache */
    const [EsferaCerrada, setEsferaCerrada] = useState(null);
    const [EsferaAbierta, setEsferaAbierta] = useState(null);
    /* Opacidad de imagenes */
    const [EsferaCerradaOpacidad, setEsferaCerradaOpacidad] = useState(0);
    const [EsferaAbiertaOpacidad, setEsferaAbiertaOpacidad] = useState(0);
    const Dialogos = () =>{
        navigation.navigate('Dialogos')
    }
    return(
        <>
        <StatusBar hidden={true}/>
        <View style={EstilosInicio.ContainerInicio}>
        <Image source={require('../../assets/img/backgrounds/Esfera-Cerrada.png')} style={{...EstilosInicio.Esfera, opacity: EsferaCerradaOpacidad}}/>
        <Text style={{...EstilosInicio.InicioTexto,...EstilosInicio.Texto1}} transition={1000}>Gantz</Text>
        <Text style={{...EstilosInicio.InicioTexto, ...EstilosInicio.Texto2}} transition={1000}>Nexus</Text>
        <TouchableWithoutFeedback onPress={Dialogos}>
            <Text style={{...EstilosInicio.Botones, ...EstilosInicio.BotonInicio}}>Inicio</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Dialogos}>
            <Text style={{...EstilosInicio.Botones, ...EstilosInicio.BotonContinuar}}>Continuar</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Dialogos}>
            <Text style={{...EstilosInicio.Botones, ...EstilosInicio.BotonAjustes}}>Ajustes</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Dialogos}  >
            <Text style={{...EstilosInicio.Botones, ...EstilosInicio.BotonSalir}}>Salir</Text>
        </TouchableWithoutFeedback>
        </View>
        </>
)};

export default Inicio
