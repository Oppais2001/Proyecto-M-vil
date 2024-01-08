
import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableWithoutFeedback} from "react-native";
import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import { EstilosInicio } from './Estilos';

const Inicio = ({navigation})=>{
    const [ready, setReady] = useState(false);
    /* Ruta de Imagenes en cache */
    const [EsferaCerrada, setEsferaCerrada] = useState(null);
    const [EsferaAbierta, setEsferaAbierta] = useState(null);
    /* Opacidad de imagenes */
    const [EsferaCerradaOpacidad, setEsferaCerradaOpacidad] = useState(0);
    const [EsferaAbiertaOpacidad, setEsferaAbiertaOpacidad] = useState(0);
    useEffect(()=>{
        const CargadoImagenes = (async () => {
            const EsferaCerradaImage = Asset.fromModule(require('../../assets/img/backgrounds/Esfera-Cerrada.png'))
            const EsferaAbiertaImage = Asset.fromModule(require('../../assets/img/backgrounds/Esfera-Abierta.png'))
            try {
                ListaImages = [EsferaCerradaImage.downloadAsync(),EsferaAbiertaImage.downloadAsync()]
                await Promise.all[ListaImages];
                setEsferaCerrada(EsferaCerradaImage);
                setEsferaAbierta(EsferaAbierta);
                setEsferaCerradaOpacidad(1);
                setReady(true);
            } catch (error) {
                console.error('Error al descargar las imágenes', error);
            }
        });CargadoImagenes();
    }, []);
    if(!ready){
        <View style={EstilosInicio.PreCarga}></View>
    }
    const Dialogos = () =>{
        navigation.navigate('Dialogos')
    }
    return(
        <>
        <StatusBar hidden={true}/>
        <View style={EstilosInicio.ContainerInicio}>
        <Image source={{...EsferaCerrada}} style={{...EstilosInicio.Esfera, opacity: EsferaCerradaOpacidad}}/>
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
