import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native";

const InicioBoton = (props) => {
    const { onPress, text } = props

    return(
        <TouchableOpacity
            style = {styles.buttonContainer}
            onPress={ onPress }>
            <Text style={styles.buttonText}>{ text }</Text>
        </TouchableOpacity>
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
    buttonContainer: {
        backgroundColor: 'black',
        marginBottom: 1*vh,
        paddingHorizontal: 1*vh,
        paddingVertical: 1*vh,
        borderRadius: 5*vh,
        position: 'relative',
        top: 61* vh,
        height: 8*vh,
        width: 30*vw,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText : {
        height: 8*vh,
        fontSize: 8*vh,
        color: "white",
        fontFamily: 'Genjiro',
        position: 'relative',
        top: -0.5*vh,
    }
})

export default InicioBoton;

