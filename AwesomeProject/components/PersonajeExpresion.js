import React, {useState, useEffect} from 'react';
import { Kurono, Kato, Kishimoto, Nishi, Perro, Hojo, Sadako, Cebollin, MrCebollin, decision1, decision2 , DialogosPrincipales} from '../core/ClasesDialogos';
import { StyleSheet, Dimensions, View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Expresion, Ropa} from '../assets/Assets'


const PersonajesExpresionDialogos = ({ indice, setanimacion}) => {
    const[censura, setcensura] = useState(0);
    if(indice==52||indice==55){
        if(censura==0){
            setcensura(1)
        }
    }else{
        if(censura==1){
            setcensura(0)
        }
    }
    return (
        <View style={styles.container}>
            <FastImage
            source={Ropa[indice] ? { uri: Image.resolveAssetSource(Ropa[indice]).uri, priority: FastImage.priority.high,
                cache: FastImage.cacheOnly}: null}
            style={{...styles.Personajes}}
            />
            <FastImage
            source={Expresion[indice] ? {uri: Image.resolveAssetSource(Expresion[indice]).uri,priority: FastImage.priority.high,
                cache: FastImage.cacheOnly}: null}
            style={{...styles.Personajes}}
            resizeMode={FastImage.resizeMode.cover}
            />
            <Image source={require('../assets/img/effects/censura.png')} style={{...styles.Personajes,opacity:censura}}/>
        </View>
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
    container: {
        flex: 1,
        height: Alto,
        width: Ancho + 7*vw,
        alignItems: 'center',
    },
    Personajes: {
        height: 100*vh,
        width:40*vw,
        position: 'absolute',
        borderWidth: 1*vh,
        borderColor: 'red',
    }
})
export default PersonajesExpresionDialogos;