import React, {useEffect, useState} from 'react';
import { Image, View } from 'react-native';
import { EstilosDialogos } from '../Estilos.jsx';
import { Kurono, Kato, Kishimoto, Nishi, Perro, Hojo, Sadako, Cebollin, MrCebollin, decision1, decision2 , DialogosPrincipales} from '../../components/ClasesDialogos.js';

const PersonajesRopaDialogos = ({ indice, setanimacion , KuronoUniforme, KuronoUniformeEnojado, KuronoCamisa, KuronoCamisaEnojado, KuronoTraje, KuronoTrajeEnojado,
    KatoUniforme, KatoTraje, KishimotoDesnuda, KishimotoUniforme, KishimotoTraje,  KishimotoColegial, NishiTraje, PerroImage, Cebollense, Censura}) => {
    /* Opacidades de Imagenes */
        /* Kurono */
    const [KuronoUniformeOpacidad, setKuronoUniformeOpacidad] = useState(0);
    const [KuronoUniformeEnojadoOpacidad, setKuronoUniformeEnojadoOpacidad] = useState(0);
    const [KuronoCamisaOpacidad, setKuronoCamisaOpacidad] = useState(0);
    const [KuronoCamisaEnojadoOpacidad, setKuronoCamisaEnojadoOpacidad] = useState(0);
    const [KuronoTrajeOpacidad, setKuronoTrajeOpacidad] = useState(0);
    const [KuronoTrajeEnojadoOpacidad, setKuronoTrajeEnojadoOpacidad] = useState(0);
    const [KuronoPoleronOpacidad, setKuronoPoleronOpacidad] = useState(0);
        /* Kato */
    const [KatoUniformeOpacidad, setKatoUniformeOpacidad] = useState(0);
    const [KatoTrajeOpacidad, setKatoTrajeOpacidad] = useState(0);
    const [KatoTrajeEnojadoOpacidad, setKatoTrajeEnojadoOpacidad] = useState(0);
        /* Kishimoto */
    const [KishimotoDesnudaOpacidad, setKishimotoDesnudaOpacidad] = useState(0);
    const [KishimotoUniformeOpacidad, setKishimotoUniformeOpacidad] = useState(0);
    const [KishimotoTrajeOpacidad, setKishimotoTrajeOpacidad] = useState(0);
    const [KishimotoColegialOpacidad, setKishimotoColegialOpacidad] = useState(0);
        /* Nishi */
    const [NishiTrajeOpacidad, setNishiTrajeOpacidad] = useState(0);
        /* Perro */
    const [PerroOpacidad, setPerroOpacidad] = useState(0);
        /* Cebollin */
    const [CebollinOpacidad, setCebollinOpacidad] = useState(0);
        /* Efectos */
    const [CensuraOpacidad, setCensuraOpacidad] = useState(0);
    /* Funcion que limpia la pantalla de imagenes*/
    const BorrarRopa = () =>{
        console.log('Borrado Ropa')
        /*Kurono*/
        setKuronoUniformeOpacidad(0);
        setKuronoUniformeEnojadoOpacidad(0);
        setKuronoCamisaOpacidad(0);
        setKuronoCamisaEnojadoOpacidad(0);
        setKuronoTrajeOpacidad(0);
        setKuronoTrajeEnojadoOpacidad(0);
        setKuronoPoleronOpacidad(0);
        /*Kato*/
        setKatoUniformeOpacidad(0);
        setKatoTrajeOpacidad(0);
        setKatoTrajeEnojadoOpacidad(0);
        /*Kishimoto*/
        setKishimotoDesnudaOpacidad(0);
        setKishimotoUniformeOpacidad(0);
        setKishimotoTrajeOpacidad(0);
        setKishimotoColegialOpacidad(0);
        /*Nishi*/
        setNishiTrajeOpacidad(0);
        /*Perro*/
        setPerroOpacidad(0);
        /*Aliens*/
        setCebollinOpacidad(0);
        /* Efectos */
        setCensuraOpacidad(0);
    }
    /* Funcion encargada de tomar el indice y cambiar el personaje o mantenerlo en pantalla */
    indice = indice + 1;
    console.log('Indice del Personaje Ropa: ' + String(indice))
    if(Kurono.ComprobarIndice(indice)){
        console.log('Kurono');              
        if(indice<58){
            console.log('Uniforme');
            if(KuronoUniformeOpacidad==0){
                BorrarRopa();
                setKuronoUniformeOpacidad(1);
            }
        }else if(indice==58){
            console.log('Animación Camisa');
            if(KuronoUniformeOpacidad==1){
                setKuronoUniformeOpacidad(0);
            }else if(KishimotoUniformeOpacidad==1){
                setKishimotoUniformeOpacidad(0);
            }
        }else if(indice<80){
            console.log('Camisa');
            if(KuronoCamisaOpacidad==0){
                BorrarRopa();
                setKuronoCamisaOpacidad(1);
            }
        }else if(indice<79){
            console.log('Ropa no definida')
        }    
        if(decision1.opcion==true){
            console.log("*** True ***");
            if(indice<=87||indice>343){
                console.log('Camisa')
                if(KuronoCamisaOpacidad==0){
                    BorrarRopa();
                    setKuronoCamisaOpacidad(1);
                }
            }else if(indice==89){
                console.log('Aqui deberia haber una animacion de cambio de ropa')
                if(KuronoTrajeOpacidad==0){
                    BorrarRopa();
                    setKuronoTrajeOpacidad(1);
                }
            }else if(indice<207 && indice>89 ||indice>208 && indice<343){
                console.log('Traje')
                if(KuronoTrajeOpacidad==0){
                    BorrarRopa();
                    setKuronoTrajeOpacidad(1);
                }
            }else if(indice==207||indice==208){
                console.log('TrajeEnojado')
                if(KuronoTrajeEnojadoOpacidad==0){
                    BorrarRopa();
                    setKuronoTrajeEnojadoOpacidad(1);
                }
            }
        }
    }else if(Kato.ComprobarIndice(indice)){
        console.log('Kato');
        if(indice==62){
            console.log('Dialogo paralelo a la esfera')
            if(KatoUniformeOpacidad==1){
                setKatoUniformeOpacidad(0);
            }
        }else if(indice==63){
            if(KuronoCamisaOpacidad==1){
                setKuronoCamisaOpacidad(0);
            }
        }else if(indice<91){
            console.log('Uniforme')
            if(KatoUniformeOpacidad==0){
                BorrarRopa();
                setKatoUniformeOpacidad(1);
            }
        }
        if(decision1.opcion==true){ 
            console.log("***TRUE***")  
            if(indice<84){
                console.log('Uniforme')
                if(KatoUniformeOpacidad==0){
                    BorrarRopa();
                    setKatoUniformeOpacidad(1);
                }
            }else if(indice>=91){
                console.log('Traje')
                if(indice==91){
                    console.log('Aqui deberia activar una animacion de Kato cambiandose')
                }
                if(KatoTrajeOpacidad==0){
                    BorrarRopa();
                    setKatoTrajeOpacidad(1);
                }
            }else if(indice==123){
                console.log('Aqui deberia activar una animacion de Kato desapareciendo')
            }else if(indice==124){
                console.log('Aqui deberia activar una animacion de Kato apareciendo')
            }
        }
    }else if(Kishimoto.ComprobarIndice(indice)){
        console.log('Kishimoto')
        if(indice==53||indice==56){
            console.log(KishimotoDesnudaOpacidad, CensuraOpacidad)
            if(KishimotoDesnudaOpacidad==0){
                BorrarRopa();
                setKishimotoDesnudaOpacidad(1);
                setCensuraOpacidad(1);
            }
        }else if(indice==59){
            console.log('Uniforme')
            if(KishimotoUniformeOpacidad==0){
                BorrarRopa();
                setKishimotoUniformeOpacidad(1);
            }
        }else if(indice<79){
            console.log('Falta Definir Ropa')
        }
        if(decision1.opcion==true){
            console.log('**TRUE**')
            if(indice<=97){
                console.log('Kishimoto cambiandose')
                console.log('Uniforme')
                if(KishimotoUniformeOpacidad==0){
                    BorrarRopa();
                    setKishimotoUniformeOpacidad(1);
                }
            }else if(indice>=101){
                console.log('Traje')
                if(KishimotoTrajeOpacidad==0){
                    BorrarRopa();
                    setKishimotoTrajeOpacidad(1);
                }
            }
        }
    }else if(Nishi.ComprobarIndice(indice)){
        console.log('Nishi')
        if(NishiTrajeOpacidad==0){
            BorrarRopa();
            setNishiTrajeOpacidad(1);
        }
    }else if(Perro.ComprobarIndice(indice)){
        console.log('Perro Imagen')
        if(PerroOpacidad == 0){
            BorrarRopa();
            setPerroOpacidad(1);
        }
    }
    else if(Cebollin.ComprobarIndice(indice)){
        console.log('Cebollin Imagen')
        if(CebollinOpacidad==0){
            BorrarRopa();
            setCebollinOpacidad(1);
        }
    }else{
        console.log('Falta el personaje')
    }
    return (
        <>
            {/* Kurono */}
            <Image
            source={{...KuronoUniforme}}
            style={{...EstilosDialogos.Personajes,opacity:KuronoUniformeOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KuronoUniformeEnojado}}
            style={{...EstilosDialogos.Personajes,opacity:KuronoUniformeEnojadoOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KuronoCamisa}}
            style={{...EstilosDialogos.Personajes,opacity:KuronoCamisaOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KuronoCamisaEnojado}}
            style={{...EstilosDialogos.Personajes,opacity:KuronoCamisaEnojadoOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KuronoTraje}}
            style={{...EstilosDialogos.Personajes,opacity:KuronoTrajeOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KuronoTrajeEnojado}}
            style={{...EstilosDialogos.Personajes,opacity:KuronoTrajeEnojadoOpacidad}}
            cachePolicy={'memory'}
            />
            {/* Kato */}
            <Image
            source={{...KatoUniforme}}
            style={{...EstilosDialogos.Personajes,opacity:KatoUniformeOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KatoTraje}}
            style={{...EstilosDialogos.Personajes,opacity:KatoTrajeOpacidad}}
            cachePolicy={'memory'}
            />
            {/*Kishimoto*/}
            <Image
            source={{...KishimotoDesnuda}}
            style={{...EstilosDialogos.Personajes,opacity:KishimotoDesnudaOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KishimotoUniforme}}
            style={{...EstilosDialogos.Personajes,opacity:KishimotoUniformeOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KishimotoTraje}}
            style={{...EstilosDialogos.Personajes,opacity:KishimotoTrajeOpacidad}}
            cachePolicy={'memory'}
            />
            <Image
            source={{...KishimotoColegial}}
            style={{...EstilosDialogos.Personajes,opacity:KishimotoColegialOpacidad}}
            cachePolicy={'memory'}
            />
            {/* Nishi */}
            <Image
            source={{...NishiTraje}}
            style={{...EstilosDialogos.Personajes,opacity:NishiTrajeOpacidad}}
            cachePolicy={'memory'}
            />
            {/* Perro */}
            <Image
            source={{...PerroImage}}
            style={{opacity:PerroOpacidad}}
            cachePolicy={'memory'}
            />
            {/* Aliens */}
            <Image
            source={{...Cebollense}}
            style={{...EstilosDialogos.Personajes,opacity:CebollinOpacidad}}
            cachePolicy={'memory'}
            />
            {/* Efectos */}
            <Image
            source={{...Censura}}
            style={{...EstilosDialogos.Personajes,opacity:CensuraOpacidad}}
            cachePolicy={'memory'}
            />
        </>
    )
}

export default PersonajesRopaDialogos;