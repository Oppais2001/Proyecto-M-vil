import React, {useEffect, useState} from 'react';
import { decision1 } from '../components/ClasesDialogos';
import BotonesDialogos from '../components/DialogoBoton';
import Fondos from '../components/Fondos';
import RecuadroDialogos from '../components/RecuadroDialogos';
import PersonajesExpresionDialogos from '../components/PersonajeExpresion';

const Dialogos = ({navigation})=>{
    /* Variables de uso general de la app*/
    const [Indice, setIndice] = useState(0);
    const [Animacion, setAnimacion] = useState(false);
    return (
        <>
            <Fondos indice={Indice}/>
            <PersonajesExpresionDialogos
            indice={Indice} setanimacion={setAnimacion}/>
            {/*<PersonajesAnimados indice={Indice} setanimacion={setAnimacion}/>
            <RecuadroDialogosEsfera indice = {Indice}/>*/}
            <RecuadroDialogos indice = {Indice}/>
            {/*<SistemaDecisiones indice={Indice} setindice={setIndice} animacion={Animacion}/>*/}
            <BotonesDialogos indice={Indice} setindice={setIndice} animacion={Animacion}/>
        </>
    )
}
export default Dialogos; 