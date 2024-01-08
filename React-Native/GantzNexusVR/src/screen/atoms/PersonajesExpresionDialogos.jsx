import React, {useState, useEffect} from 'react';
import { EstilosDialogos } from '../Estilos.jsx';
import { Kurono, Kato, Kishimoto, Nishi, Perro, Hojo, Sadako, Cebollin, MrCebollin, decision1, decision2 , DialogosPrincipales} from '../../components/ClasesDialogos.js';


const PersonajesExpresionDialogos = ({ indice, setanimacion , KuronoSerio, KuronoNervioso, KuronoFeliz, KuronoTriste, KuronoSorprendido, KatoSerio,
    KatoNervioso, KatoFeliz, KatoTriste, KatoSorprendido, KishimotoSeria, KishimotoNerviosa, KishimotoFeliz,  KishimotoTriste,
    KishimotoParpadeo1, KishimotoParpadeo2, KishimotoParpadeo3, NishiSerio}) => {
    /* Opacidades de Imagenes */
        /* Kurono */
    const [KuronoSerioOpacidad, setKuronoSerioOpacidad] = useState(0);
    const [AKuronoSerioOpacidad, setAKuronoSerioOpacidad] = useState(0);
    const [KuronoNerviosoOpacidad, setKuronoNerviosoOpacidad] = useState(0);
    const [KuronoFelizOpacidad, setKuronoFelizOpacidad] = useState(0);
    const [KuronoTristeOpacidad, setKuronoTristeOpacidad] = useState(0);
    const [KuronoSorprendidoOpacidad, setKuronoSorprendidoOpacidad] = useState(0);
        /* Kato */
    const [KatoSerioOpacidad, setKatoSerioOpacidad] = useState(0);
    const [KatoNerviosoOpacidad, setKatoNerviosoOpacidad] = useState(0);
    const [KatoFelizOpacidad, setKatoFelizOpacidad] = useState(0);
    const [KatoTristeOpacidad, setKatoTristeOpacidad] = useState(0);
    const [KatoSorprendidoOpacidad, setKatoSorprendidoOpacidad] = useState(0);
        /* Kishimoto */
    const [KishimotoSeriaOpacidad, setKishimotoSeriaOpacidad] = useState(0);
    const [KishimotoNerviosaOpacidad, setKishimotoNerviosaOpacidad] = useState(0);
    const [KishimotoFelizOpacidad, setkishimotoFelizOpacidad] = useState(0);
    const [KishimotoTristeOpacidad, setKishimotoTristeOpacidad] = useState(0);
    const [KishimotoParpadeo1Opacidad, setKishimotoParpadeo1Opacidad] = useState(0);
    const [KishimotoParpadeo2Opacidad, setKishimotoParpadeo2Opacidad] = useState(0);
    const [KishimotoParpadeo3Opacidad, setKishimotoParpadeo3Opacidad] = useState(0);
        /* Nishi */
    const [NishiSerioOpacidad, setNishiSerioOpacidad] = useState(0);
    /* Funciones */
    /* Funcion que limpia la pantalla de imagenes*/
    const BorrarExpresion = () =>{
        console.log('Borrado Expresion')
        /*Kurono*/
        setKuronoSerioOpacidad(0);
        setKuronoFelizOpacidad(0);
        setKuronoNerviosoOpacidad(0);
        setKuronoSorprendidoOpacidad(0);
        setKuronoTristeOpacidad(0);
        /*Kato*/
        setKatoSerioOpacidad(0);
        setKatoFelizOpacidad(0);
        setKatoNerviosoOpacidad(0);
        setKatoSorprendidoOpacidad(0);
        setKatoTristeOpacidad(0);
        /*Kishimoto*/
        setKishimotoSeriaOpacidad(0);
        setkishimotoFelizOpacidad(0);
        setKishimotoNerviosaOpacidad(0);
        setKishimotoTristeOpacidad(0);
        setKishimotoParpadeo1Opacidad(0);
        setKishimotoParpadeo2Opacidad(0);
        setKishimotoParpadeo3Opacidad(0);
        /*Nishi*/
        setNishiSerioOpacidad(0);
    }
    /* Funcion encargada de tomar el indice y cambiar el personaje o mantenerlo en pantalla */
    indice = indice + 1;
    let indiceDecisiones;
    if (decision1.opcion){
        if(indice>80){
            indiceDecisiones = 8;
        }else if(indice>90){
            indiceDecisiones = 21;
        }else if(indice>281){
            indiceDecisiones = 23;
        }
    }else{
        if(indice>80){
            indiceDecisiones = 2;
        }
    }
    console.log('Indice del Personaje Expresion: ' + String(indice))
    if (Kurono.ComprobarIndice(indice)){
        console.log('Kurono')
        console.log('Expresion:')
        if (indice<81){
            if(indice==2||indice==54||indice==64||indice==67){
                console.log('Angustiado')
                if(KuronoSerioOpacidad==0){
                    BorrarExpresion();
                    setKuronoSerioOpacidad(1);
                }
            }else if(indice==13){
                console.log('Feliz')
                if(KuronoFelizOpacidad==0){
                    BorrarExpresion();
                    setKuronoFelizOpacidad(1);
                }
            }else if(indice==19||indice>49&&indice<52){
                console.log('Sorprendido')
                if(KuronoSorprendidoOpacidad==0){
                    BorrarExpresion();
                    setKuronoSorprendidoOpacidad(1);
                }
            }else if(indice==43||indice==69||indice==71){
                console.log('Nervioso')
                if(KuronoNerviosoOpacidad==0){
                    BorrarExpresion();
                    setKuronoNerviosoOpacidad(1);
                }
            }else{
                if(indice==58){
                    if(KuronoSerioOpacidad==1){
                        setKuronoSerioOpacidad(0);
                    }else if(KishimotoSeriaOpacidad==1){
                        setKishimotoSeriaOpacidad(0);
                    }
                    console.log('Animacion')
                }else{
                    console.log('Serio por defecto')
                    if(KuronoSerioOpacidad==0){
                        BorrarExpresion();
                        setKuronoSerioOpacidad(1);
                    }
                }
            }
        }else{
            if(decision1.opcion){
                console.log('Expresion de la Decision A:' + decision1.MostrarOpcionA())
                if (indice>80&&indice<88){
                    console.log('Serio')
                    if(KuronoSerioOpacidad==0){
                        BorrarExpresion();
                        setKuronoSerioOpacidad(1);
                    }
                }else{
                    console.log('No definido en Decision A' + decision1.MostrarOpcionA())
                    if(KuronoSerioOpacidad==0){
                        BorrarExpresion();
                        setKuronoSerioOpacidad(1);
                    }
                }
            }else{
                if(indice==81){
                    console.log('Serio')
                    if(KuronoSerioOpacidad==0){
                        BorrarExpresion();
                        setKuronoSerioOpacidad(1);
                    }
                }else{
                    console.log('No definido en Decision B'+ decision1.MostrarOpcionB())
                    if(KuronoSerioOpacidad==0){
                        BorrarExpresion();
                        setKuronoSerioOpacidad(1);
                    }
                }
            }
            if(indice<97+indiceDecisiones){
                console.log('Serio')
                if(KuronoSerioOpacidad==0){
                    BorrarExpresion();
                    setKuronoSerioOpacidad(1);
                }
            }else{
                console.log('No definido despues de las decisiones')
                if(KuronoSerioOpacidad==0){
                    BorrarExpresion();
                    setKuronoSerioOpacidad(1);
                }
            }
        }
    }else if (Kato.ComprobarIndice(indice)){
        console.log('Kato')
        if(indice<81){
            if(indice<6||indice==44||indice==55){
                console.log('Arrepentimiento-Angustia')
                if (KatoSerioOpacidad==0){
                    BorrarExpresion();
                    setKatoSerioOpacidad(1);
                }
            }else if(indice==12||indice==41||indice==45){
                console.log('Feliz')
                if(KatoFelizOpacidad==0){
                    BorrarExpresion();
                    setKatoFelizOpacidad(1);
                }
            }else if (indice==62){
                if(KatoSerioOpacidad==1){
                    console.log('Dialogo paralelo a la esfera')
                    setKatoSerioOpacidad(0);
                }
            }else if(indice==63){
                if(KuronoSerioOpacidad==1){
                    console.log('Dialogo paralelo a la esfera')
                    setKuronoSerioOpacidad(0);
                }
            }else if (indice==49||indice==52){
                console.log('Sorprendido')
                if(KatoSorprendidoOpacidad==0){
                    BorrarExpresion();
                    setKatoSorprendidoOpacidad(1);
                }
            }else{
                if (KatoSerioOpacidad==0){
                    console.log('Serio')
                    BorrarExpresion();
                    setKatoSerioOpacidad(1);
                }
            }
        }else{
            if(decision1.opcion){
                console.log('Expresion de la Decision A:' + decision1.MostrarOpcionA())
                if (indice>81&&indice<85){
                    console.log('Serio')
                    if (KatoSerioOpacidad==0){
                        BorrarExpresion();
                        setKatoSerioOpacidad(1);
                    }
                }else{
                    console.log('No definido en Decision A' + decision1.MostrarOpcionA())
                    if (KatoSerioOpacidad==0){
                        BorrarExpresion();
                        setKatoSerioOpacidad(1);
                    }
                }
            }else{
                console.log('Expresion de la Decision B:' + decision1.MostrarOpcionB())
                if (KatoSerioOpacidad == 0){
                    console.log('Serio')
                    BorrarExpresion();
                    setKatoSerioOpacidad(1);
                }
            }
        }
    }else if(Kishimoto.ComprobarIndice(indice)){
        if(indice==53){
            console.log('Animacion: Entre abre los ojos')
            if (KishimotoParpadeo1Opacidad==0){
                BorrarExpresion();
                setKishimotoParpadeo1Opacidad(1);
            }
        }else if(indice==56){
            console.log('Animacion: Abre los ojos por completo')
            if(KishimotoParpadeo2Opacidad==0){
                BorrarExpresion();
                setKishimotoParpadeo2Opacidad(1);
            }
        }else if(indice==59){
            console.log('Seria')
            if (KishimotoSeriaOpacidad==0){
                BorrarExpresion();
                setKishimotoSeriaOpacidad(1);
            }
        }else{
            console.log('Seria')
            if (KishimotoSeriaOpacidad==0){
                BorrarExpresion();
                setKishimotoSeriaOpacidad(1);
            }
        }
        if(decision1.opcion){
            if (indice==86||indice==88){
                console.log('Seria')
                if (KishimotoSeriaOpacidad==0){
                    BorrarExpresion();
                    setKishimotoSeriaOpacidad(1);
                }
            }else if(indice==94){
                console.log('Sorprendida')
                if (KishimotoSeriaOpacidad==0){
                    BorrarExpresion();
                    setKishimotoSeriaOpacidad(1);
                }
            }else{
                console.log('Seria')
                if (KishimotoSeriaOpacidad==0){
                    BorrarExpresion();
                    setKishimotoSeriaOpacidad(1);
                }
            }
        }
    }else if (Nishi.ComprobarIndice(indice)){
        if(indice==65){
            console.log('Feliz')
            if (NishiSerioOpacidad==0){
                BorrarExpresion();
                setNishiSerioOpacidad(1);
            }
        }else if(indice==66||indice==76){
            console.log('Serio')
            if (NishiSerioOpacidad==0){
                BorrarExpresion();
                setNishiSerioOpacidad(1);
            }
        }else{
            console.log('Serio')
            if (NishiSerioOpacidad==0){
                BorrarExpresion();
                setNishiSerioOpacidad(1);
            }
        }
    }else if(Perro.ComprobarIndice(indice)){
        console.log('Perro')
        if(NishiSerioOpacidad==1){
            setNishiSerioOpacidad(0);
        }
    }
    return (
        <>
            {/*Kurono*/}
            <Image
            source={{...KuronoSerio}}
            style={{...EstilosDialogos.Personajes,opacity:KuronoSerioOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KuronoNervioso}}
            style={{...EstilosDialogos.Personajes,opacity:KuronoNerviosoOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KuronoFeliz}}
            style={{...EstilosDialogos.Personajes,opacity:KuronoFelizOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KuronoTriste}}
            style={{...EstilosDialogos.Personajes,opacity:KuronoTristeOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KuronoSorprendido}}
            style={{...EstilosDialogos.Personajes,opacity:KuronoSorprendidoOpacidad}}
            cachePolicy={'memory'}
            />
            {/*Kato*/}
            <Image
            source={{...KatoSerio}}
            style={{...EstilosDialogos.Personajes,opacity:KatoSerioOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KatoNervioso}}
            style={{...EstilosDialogos.Personajes,opacity:KatoNerviosoOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KatoFeliz}}
            style={{...EstilosDialogos.Personajes,opacity:KatoFelizOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KatoTriste}}
            style={{...EstilosDialogos.Personajes,opacity:KatoTristeOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KatoSorprendido}}
            style={{...EstilosDialogos.Personajes,opacity:KatoSorprendidoOpacidad}}
            cachePolicy={'memory'}
            />
            {/* Kishimoto */}
            <Image
            source={{...KishimotoSeria}}
            style={{...EstilosDialogos.Personajes,opacity:KishimotoSeriaOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KishimotoNerviosa}}
            style={{...EstilosDialogos.Personajes,opacity:KishimotoNerviosaOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KishimotoTriste}}
            style={{...EstilosDialogos.Personajes,opacity:KishimotoTristeOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KishimotoParpadeo1}}
            style={{...EstilosDialogos.Personajes,opacity:KishimotoParpadeo1Opacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KishimotoParpadeo2}}
            style={{...EstilosDialogos.Personajes,opacity:KishimotoParpadeo2Opacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KishimotoParpadeo3}}
            style={{...EstilosDialogos.Personajes,opacity:KishimotoParpadeo3Opacidad}}
            cachePolicy={'memory'}
            />
            {/* Nishi */}
            <Image
            source={{...NishiSerio}}
            style={{...EstilosDialogos.Personajes,opacity:NishiSerioOpacidad}}
            cachePolicy={'memory'}
            />
        </>
    )
}

export default PersonajesExpresionDialogos;