import React, { useEffect, useState } from 'react';
import { Text, View, TouchableWithoutFeedback} from "react-native";
import { Image } from 'expo-image';
import { Asset } from 'expo-asset';
import {PlayerKurono, EnemyCebollense, EnemyMR, EnemyTanaka, JefeTanaka} from './../components/ClasesCombate'
import { EstilosCombate } from './Estilos';
import { Kurono } from '../components/ClasesDialogos';

const Combate = ({navigation}) => {
    const [ready, setReady] = useState(false);
    const [Player , setPlayer] = useState(null);
    const [Enemy , setEnemy] = useState(null);
    const [Fondo , setFondo] = useState(null);
    const [PlayerPV, setPlayerPV] = useState(PlayerKurono.PV);
    const [PlayerPA, setPlayerPA] = useState(PlayerKurono.PA);
    const [BloqueoBotones, setBloqueoBotones] = useState(false);
    const [PlayerOpacidad, setPlayerOpacidad] = useState(1);
    const [Narraccion, setNarraccion] = useState(null);
    const ComprobarEstado = () => {
        if(PlayerKurono.PA==0){
            EnemyTurn();
        }
    }
    const Golpear = () => {
        setNarraccion('Has decidido golpear al Cebollense')
        PlayerKurono.PerderPA(5);
        setPlayerPA(PlayerKurono.PA);
        ComprobarEstado();
    }
    const Disparar = () => {
        setNarraccion('Has decidido disparar al Cebollense')
        PlayerKurono.PerderPA(5);
        setPlayerPA(PlayerKurono.PA);
        ComprobarEstado();
    }
    const Radar = () => {
        setNarraccion('Has decidido usar el radar')
        PlayerKurono.PerderPA(5);
        setPlayerPA(PlayerKurono.PA);
        ComprobarEstado();
    }
    const Salir = () => {
        setNarraccion('Has decidido salir');
        setPlayerPA(PlayerKurono.PA);
        ComprobarEstado();
    }
    const EnemyTurn = () => {
        setNarraccion(' El cebollense intenta huir ')
        setBloqueoBotones(true)
        setTimeout(()=>{
            if(PlayerKurono.PV==0){
                navigation.navigate('Muerte')
            }else{
                PlayerKurono.RecuperarPA();
                setPlayerPA(PlayerKurono.PA);
            }
            setBloqueoBotones(false);
        },1000)
    }
    useEffect(()=>{
        const CargadoImagenes = (async () => {
            const KuronoAtaqueImage = Asset.fromModule(require('../../assets/img/characters/KuronoPoleronAtaque.png'))
            const MrCebollenseImage = Asset.fromModule(require('../../assets/img/characters/MisterCebollense.png'))
            const FondoImage = Asset.fromModule(require('../../assets/img/backgrounds/FondoCalle1.png'))
            try {
                ListaImages = [KuronoAtaqueImage.downloadAsync(),MrCebollenseImage.downloadAsync()]
                await Promise.all[ListaImages];
                setPlayer(KuronoAtaqueImage);
                setEnemy(MrCebollenseImage);
                setFondo(FondoImage);
                setReady(true);
            } catch (error) {
                console.error('Error al descargar las imágenes', error);
            }
        });CargadoImagenes();setNarraccion('El Cebollense te ofrece un cebollín en señal de amistad')
    }, []);
    if(!ready){
        <View>
            <Text>Cargando...</Text>
        </View>
    }
    return (
        <View style={EstilosCombate.contenedor}>
            <Image source={{...Fondo}} style={EstilosCombate.Fondo}/>
            <Image source={{...Player}}
            style={{...EstilosCombate.Player,opacity:PlayerOpacidad}}
            cachePolicy={'memory'}/>
            <Image source={{...Enemy}}
            style={EstilosCombate.Enemy}
            cachePolicy={'memory'}/>
            <View style={EstilosCombate.FondoRecuadroEstadisticas}></View>
            <View style={EstilosCombate.RecuadroNombre}>
            </View>
            <View style={{...EstilosCombate.Recuadros,...EstilosCombate.RecuadroEstadisticas}}>
                <Text
                style={EstilosCombate.Textos}>
                PV: {PlayerPV}{'\n'}PA: {PlayerPA}{'\n'}E: {PlayerKurono.E}
                </Text>
            </View>
            <View style={EstilosCombate.FondoRecuadroNarracion}></View>
            <View style={{...EstilosCombate.Recuadros,...EstilosCombate.RecuadroNarracion}}>
                <Text style={EstilosCombate.Narracion}>{Narraccion}</Text>
            </View>
            <View style={EstilosCombate.RecuadroTextoNombre}/>
            <Text style={{...EstilosCombate.Titulos, ...EstilosCombate.TextoNombre}}>Kei</Text>
            <View style={{...EstilosCombate.Recuadros,...EstilosCombate.RecuadroAcciones}}>
                <TouchableWithoutFeedback
                    onPress={Golpear}
                    disabled={BloqueoBotones}>
                    <Text style={{...EstilosCombate.Textos,...EstilosCombate.Acciones,...EstilosCombate.Golpear}}>Golpear</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={Disparar}
                    disabled={BloqueoBotones}>
                    <Text style={{...EstilosCombate.Textos,...EstilosCombate.Acciones,...EstilosCombate.Disparar}}>Disparar</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={Radar}
                    disabled={BloqueoBotones}>
                    <Text style={{...EstilosCombate.Textos,...EstilosCombate.Acciones,...EstilosCombate.Radar}}>Radar</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={Salir}
                    disabled={BloqueoBotones}>
                    <Text style={{...EstilosCombate.Textos,...EstilosCombate.Acciones,...EstilosCombate.Salir}}>Salir</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={EstilosCombate.RecuadroTextoAcciones}/>
            <Text style={{...EstilosCombate.Titulos,...EstilosCombate.TextoAcciones}}>Acciones</Text>
            </View>
        )
}
export default Combate