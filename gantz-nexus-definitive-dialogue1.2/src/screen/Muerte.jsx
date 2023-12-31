import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { EstiloMuerte } from "./Estilos";

const Muerte = ({navigation}) => {
    const Inicio = () =>{
        navigation.navigate('Inicio');
    }
    <View style={EstiloMuerte.Contenedor}>
        <Text style={EstiloMuerte.Texto}> Has muerto </Text>
        <TouchableWithoutFeedback onPress={Inicio}>
            <Text style={EstiloMuerte.BotonInicio}>volver al inicio</Text>
        </TouchableWithoutFeedback>
    </View>
}
export default Muerte