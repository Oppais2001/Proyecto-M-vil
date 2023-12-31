import React, {useState} from 'react';
import { Image } from 'expo-image';
import { EstilosDialogos } from '../Estilos.jsx';

const Fondos = ({ indice , Habitacion, Calle1}) => {
    const [HabitacionOpacidad, setHabitacionOpacidad] = useState(0);
    const [HabitacionZoomOpacidad, setHabitacionZoomOpacidad] = useState(0);
    const [Calle1Opacidad, setCalle1Opacidad] = useState(0);
    console.log('Indice Fondos:', indice)
    if ((indice >= 0 && indice<61)||indice>=63){
        console.log('Habitacion')
        if(HabitacionZoomOpacidad == 1){
            setHabitacionZoomOpacidad(0)
        }
        if(HabitacionOpacidad == 0){
            setHabitacionOpacidad(1);
        }
    }else if(indice==61||indice==62){
        console.log('Habitacion Zoom')
        if(HabitacionZoomOpacidad == 0){
            setHabitacionOpacidad(0);
            setHabitacionZoomOpacidad(1);
        }
    }
    return(
        <>
            <Image
            source={{...Habitacion}}
            style={{...EstilosDialogos.Fondo, opacity: HabitacionOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...Habitacion}}
            style={{...EstilosDialogos.HabitacionZoom, opacity: HabitacionZoomOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...Calle1}}
            style={{...EstilosDialogos.Fondo, opacity: Calle1Opacidad}}
            cachePolicy={'memory'}
            />
        </>
    )
}
export default Fondos;