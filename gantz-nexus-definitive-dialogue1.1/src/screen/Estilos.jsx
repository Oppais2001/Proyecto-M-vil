
import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const vh = windowHeight * 0.01;
const vw = windowWidth * 0.01;
console.log(windowHeight,windowWidth)

const EstilosInicio = StyleSheet.create({
    PreCarga: {
        height: 100*vh,
        width: 107*vw,
        backgroundColor: '#B01F00'
    },
    ContainerInicio: {
        width:windowWidth + 7*vw,
        height: windowHeight,
        backgroundColor: '#B01F00'
    },
    Esfera: {
        height: 100*vh,
        width: 100*vh,
        position:'absolute',
        top: -20*vh,
        alignSelf:"center"
    },
    InicioTexto: {
        position:"absolute",
        top:1*vh,
        fontFamily:'Genjiro',
        fontSize: 24*vh,
        color:'white',
        textAlign: "center",
        lineHeight: 20*vh
    },
    Texto1: {
        width:8*vw,
        left:15*vw
    },
    Texto2: {
        width:7.5*vw,
        left: 82.5*vw
    },
    Botones: {
        height:8*vh,
        width: 30*vw,
        position:"relative",
        alignSelf:'center',
        textAlign: 'center',
        fontFamily: 'Genjiro',
        fontSize: 8*vh,
        color: "white",
        backgroundColor: "black",
        borderRadius: 5*vh
    },
    BotonInicio:{
        top: 62*vh
    },
    BotonContinuar:{
        top: 63*vh
    },
    BotonAjustes:{
        top: 64*vh
    },
    BotonSalir:{
        top: 65*vh
    }
})
const EstilosCarga = StyleSheet.create({
    PantallaCarga: {
        backgroundColor: "black",
        height: windowHeight,
        width: windowWidth + 7*vw,
        position:'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center'
    },
    TextoCarga: {
        fontFamily: 'Genjiro',
        fontSize:12*vh,
        color: '#B01F00',
        textAlign:'center',
    }
})
const EstilosDialogos = StyleSheet.create({
    ContainerDialogos: {
        backgroundColor: "black",
        height:100*vh,
        width: 107*vw,
    },
    Texto: {
        color:'white',
        textAlign: "center",
        marginTop:vh
    },
    TextoInicio:{
        fontFamily:'Genjiro',
        fontSize:10*vh,
        color:'#B01F00',
        textAlign:'center'
    },
    TextoEsfera: {
        fontFamily: 'Digital-7',
        fontSize: 6*vh,
        color:'#048A00',
        textAlign:'center',
        position: 'absolute',
        top: 14*vh,
        alignSelf: 'center'
    },
    Personajes: {
        height: 100*vh,
        width:40*vw,
        position:"absolute",
        top:0*vh,
        alignSelf:'center'
    },
    Perro: {
        height: 50*vh
    },
    AliensEsfera: {
        position: 'absolute',
        top: 29*vh,
        left: 35*vw,
        width: 38*vh,
        height: 38*vh,
        backgroundColor: '#048A00'
    },
    botonInicio: {
        height: '10%',
        width: '20%',
        backgroundColor: 'black',
        position:'absolute',
        top:'45%',
        left:'40%',
        justifyContent: 'center'
    },
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
    Fondo: {
        height: 100*vh,
        width: 107*vw,
        alignSelf: 'center',
        position:"absolute",
        top: 0,
        left:-10
    },
    HabitacionZoom: {
        height: 160*vh,
        width: 171.2*vw,
        position:"absolute",
        top: -40*vh,
        left: -35*vw
    },
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
        width:100*vw,
        position:"absolute",
        top:68*vh,
        alignSelf:'center',
        backgroundColor:"transparent"},
    Dialogos: {
        color: 'white',
        position: 'relative',
        top: 1*vh,
        textAlign: 'center',
        fontSize: 5*vh},
    IconDialogos: {
        position:'absolute',
        top: 22.5*vh,
        left: 95*vw,
    },
    Nombre: {
        color: 'white',
        position: 'relative',
        top: 20 *vh,
        fontSize: 5*vh,
        textAlign: 'center'
    },
    Decisiones: {
        width: 30*vw,
        height: 10*vh,
        color: 'white',
        borderRadius: 10*vh,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'black',
        fontSize: 4*vh
    },
    Decision1A: {
        position: 'absolute',
        top: 10*vh,
        left: 5*vw,
    },
    Decision1B: {
        position: 'absolute',
        top: 10*vh,
        left: 65*vw,
    },
    FlechaDecisionA: {
        position: 'absolute',
        top: 11.4*vh,
        left: 6.5*vw,
        textAlign: 'center'
    },
    FlechaDecisionB: {
        position: 'absolute',
        top: 11.4*vh,
        left: 66.4*vw,
        textAlign: 'center',
        textAlignVertical: 'center',
        opacity: 0
    }
});
const EstilosCombate = StyleSheet.create({
    contenedor: {
        width: 107*vw,
        height: 100*vh
    },
    Fondo: {
        position: 'absolute',
        top: 0*vh,
        left: 0*vh,
        height: 100*vh,
        width: 107*vw
    },
    Recuadros: {
        borderWidth: 1*vh,
        borderColor: 'white',
        borderRadius: 2.5*vh,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    RecuadroNombre:{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'black',
    },
    RecuadroEstadisticas: {
        width: 22*vh,
        height: 40*vh,
        position: 'absolute',
        top: 6*vh,
        left: 6*vh,
        borderRadius: 1*vh,
    },
    FondoRecuadroEstadisticas: {
        width: 22*vh,
        height: 40*vh,
        position: 'absolute',
        top: 6*vh,
        left: 6*vh,
        backgroundColor: 'black',
        borderRadius: 1*vh,
        opacity: 0.5,
    },
    RecuadroNarracion: {
        width: 100*vh,
        height: 25*vh,
        position: 'absolute',
        top: 70*vh,
        left: 100*vh,
    },
    FondoRecuadroNarracion: {
        width: 100*vh,
        height: 25*vh,
        position: 'absolute',
        top: 70*vh,
        left: 100*vh,
        backgroundColor: 'black',
        borderRadius: 2.5*vh,
        opacity: 0.6
    },
    RecuadroAcciones: {
        width: 72*vh,
        height: 22*vh,
        position: 'absolute',
        top: 10*vh,
        left: 50*vh,
    },
    RecuadroEnemy: {
        width: 25*vw,
        height: 25*vw,
        backgroundColor:'black',
        position: 'absolute',
        top: 10*vh,
        left: 60*vw,
        borderRadius: 50*vh,
    },
    Player: {
        height: 70*vh,
        width: 50*vw,
        position: 'absolute',
        top: 35*vh,
        left: 20*vh,
    },
    Enemy: {
        height:75*vh,
        width: 17.5*vw,
        position:'absolute',
        top: 10*vh,
        left: 65*vw,
        backgroundColor:'transparent',
    },
    Titulos: {
        height: 8*vh,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'fuentex',
        fontSize: 9*vh,
        borderRadius: 1*vh,
    },
    TextoNombre: {
        position: 'absolute',
        top: 2*vh,
        left: 9*vh
    },
    RecuadroTextoNombre: {
        width: 18*vh,
        height: 7*vh,
        position: 'absolute',
        top: 3*vh,
        left: 8*vh,
        backgroundColor: 'black'
    },
    TextoAcciones: {
        position: 'absolute',
        top: 5*vh,
        left: 64*vh
    },
    RecuadroTextoAcciones: {
        height: 7*vh,
        width: 44.5*vh,
        position: 'absolute',
        top: 6*vh,
        left: 63*vh,
        backgroundColor: 'black'
    },
    Textos: {
        color: 'white',
        fontSize: 8*vh,
        fontFamily: 'Digital-7',
    },
    Narracion: {
        position: 'absolute',
        top: 0,
        left: 1*vh,
        color: 'white',
        fontSize: 6*vh,
        fontFamily: 'Open24DisplaySt',
    },
    Acciones: {
        width: 35*vh,
        height: 10*vh,
        textAlign: 'center',
        textAlignVertical:'center',
        backgroundColor: 'black',
    },
    Golpear: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    Disparar: {
        position: 'absolute',
        top: 10*vh,
        left: 0,
    },
    Radar: {
        position: 'absolute',
        top: 0,
        left: 35*vh,
    },
    Salir: {
        position: 'absolute',
        top: 10*vh,
        left: 35*vh,
    }
})
const EstiloMuerte = StyleSheet.create({
    Contenedor: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignContent: 'center'
    },
    Texto: {
        fontFamily: 'Gantz',
        color: '#B01F00',
    },
    BotonInicio: {
        color: '#B01F00',
        backgroundColor: 'white'
    }
})

export {EstilosInicio, EstilosCarga, EstilosDialogos,EstilosCombate,EstiloMuerte};