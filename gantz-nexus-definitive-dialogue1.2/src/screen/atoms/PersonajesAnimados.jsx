import { MotiImage } from "moti";
import { EstilosDialogos } from "../Estilos";
import { Dimensions } from "react-native";
import { useEffect } from "react";

const PersonajesAnimados = ({indice, setanimacion , KuronoSerio, KuronoCamisa}) => {
    const windowHeight = Dimensions.get('window').height;
    const vh = windowHeight * 0.01;
    indice = indice + 1;
    useEffect(()=>{
        if(indice==58){
            setanimacion(true);
            setTimeout(() => {
                setanimacion(false);
            }, 2000);
        }
    },[indice])
    if(indice==58){
        return(
        <>
            <MotiImage
            source={{...KuronoCamisa}}
            style={{...EstilosDialogos.Personajes}}
            from={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                type: 'timing',
                duration: 1000
            }}
            />
            <MotiImage
            source={{...KuronoSerio}}
            style={{...EstilosDialogos.Personajes}}
            from={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                type: 'timing',
                duration: 1000
            }}
            />

    </>
        )
    }
}
export default PersonajesAnimados;