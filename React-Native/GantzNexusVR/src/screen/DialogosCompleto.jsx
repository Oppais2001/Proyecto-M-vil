import React, {useEffect, useState} from 'react';
import { Text, View,TouchableWithoutFeedback, Animated} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { EstilosDialogos } from './Estilos.jsx';
import Carga from './atoms/Carga.jsx';
import { DialogosEsfera } from '../components/ListaDialogos.js'
import { Kurono, Kato, Kishimoto, Nishi, Perro, Hojo, Sadako, Cebollin, MrCebollin, decision1, decision2 , DialogosPrincipales} from '../components/ClasesDialogos';

const Main = ({navigation})=>{
    /* Animaciones */
    //const [Aparecer, setAparecer] = useState(new Animated.Value(0))
    /* identifica cuando la app esta lista para iniciar */
    const [ready, setReady] = useState(false);
    /* Indice de Dialogo */
    const [Indice, CambiarIndice] = useState(0);
    /* Indice Esfera*/
    const [IndiceEsfera, CambiarIndiceEsfera] = useState(0);
    /* Opacidad Alien Esfera */
    const [AlienEsferaOpacidad, setAlienEsferaOpacidad] = useState(0);
    /* Nombre del Personaje*/
    const [Nombre, CambiarNombre] = useState(null);
    /* Opacidad del panel de inicio */
    const [StartOpacidad, setStartOpacidad] = useState(1);
    /* Opacidad del panel de dialogos */
    const [DialogosOpacidad, setDialogosOpacidad] = useState(0);
    /* Opacidad del panel de decisiones */
    const [Decision1AOpacidad, setDecision1AOpacidad] = useState(0);
    const [Decision1BOpacidad, setDecision1BOpacidad] = useState(0);
    /* Opacidad Iconos */
    const [IconoDialogoOpacidad, setIconoDialogoOpacidad] = useState(0);
    const [IconoOpcionAOpacidad, setIconoOpacionAOpacidad] = useState(0);
    const [IconoOpcionBOpacidad, setIconoOpacionBOpacidad] = useState(0);
    /* Cargado de Imagenes */
    /* Fondos */
    const [Habitacion, setHabitacion] = useState(null);
    const [Calle1, setCalle1] = useState(null);
    /* Efectos */
    const [Censura, setCensura] = useState(null);
    const [CensuraOpacidad, setCensuraOpacidad] = useState(0);
    /* Ropas */
        /* Kurono */
    const [KuronoUniforme, setKuronoUniforme] = useState(null);
    const [KuronoUniformeEnojado, setKuronoUniformeEnojado] = useState(null);
    const [KuronoCamisa, setKuronoCamisa] = useState(null);
    const [KuronoCamisaEnojado, setKuronoCamisaEnojado] = useState(null);
    const [KuronoTraje, setKuronoTraje] = useState(null);
    const [KuronoTrajeEnojado, setKuronoTrajeEnojado] = useState(null);
    const [KuronoPoleron, setKuronoPoleron] = useState(null);
        /* Kato */
    const [KatoUniforme, setKatoUniforme] = useState(null);
    const [KatoTraje, setKatoTraje] = useState(null);
    const [KatoTrajeEnojado, setKatoTrajeEnojado] = useState(null);
        /* Kishimoto */
    const [KishimotoDesnuda, setKishimotoDesnuda] = useState(null);
    const [KishimotoUniforme, setKishimotoUniforme] = useState(null);
    const [KishimotoTraje, setKishimotoTraje] = useState(null);
    const [KishimotoColegial, setKishimotoColegial] = useState(null);
        /* Nishi */
    const [NishiTraje, setNishiTraje] = useState(null);
    /* Expresiones */
        /* Kurono */
    const [KuronoSerio, setKuronoSerio] = useState(null);
    const [KuronoNervioso, setKuronoNervioso] = useState(null);
    const [KuronoFeliz, setKuronoFeliz] = useState(null);
    const [KuronoTriste, setKuronoTriste] = useState(null);
    const [KuronoSorprendido, setKuronoSorprendido] = useState(null);
        /* Kato */
    const [KatoSerio, setKatoSerio] = useState(null);
    const [KatoNervioso, setKatoNervioso] = useState(null);
    const [KatoFeliz, setKatoFeliz] = useState(null);
    const [KatoTriste, setKatoTriste] = useState(null);
    const [KatoSorprendido, setKatoSorprendido] = useState(null);
        /* Kishimoto */
    const [KishimotoSeria, setKishimotoSeria] = useState(null);
    const [KishimotoNerviosa, setKishimotoNerviosa] = useState(null);
    const [KishimotoFeliz, setkishimotoFeliz] = useState(null);
    const [KishimotoTriste, setKishimotoTriste] = useState(null);
    const [KishimotoParpadeo1, setKishimotoParpadeo1] = useState(null);
    const [KishimotoParpadeo2, setKishimotoParpadeo2] = useState(null);
    const [KishimotoParpadeo3, setKishimotoParpadeo3] = useState(null);
        /* Nishi */
    const [NishiSerio, setNishiSerio] = useState(null);
        /* Perro */
    const [PerroImage, setPerroImage] = useState(null);
    /* Aliens */
    const [Cebollense, setCebollense] = useState(null);
    /* Opacidades de Imagenes */
    /* Fondo */
    const [HabitacionOpacidad, setHabitacionOpacidad] = useState(0);
    const [HabitacionZoomOpacidad, setHabitacionZoomOpacidad] = useState(0);
    const [Calle1Opacidad, setCalle1Opacidad] = useState(0);
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
    /* Expresiones */
        /* Kurono */
    const [KuronoSerioOpacidad, setKuronoSerioOpacidad] = useState(0);
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
        /* Perro */
    const [PerroOpacidad, setPerroOpacidad] = useState(0);
    /* Aliens */
    const [CebollinOpacidad, setCebollinOpacidad] = useState(0);
    /* Decisiones */
    const [Decision1, MostrarDecision1] = useState(0);
    const [Decision2, MostrarDecision2] = useState(0);
    const [BotonInicioDisable, setBotonInicioDisable] = useState(false);
    const [BotonDialogosDisable, setBotonDialogosDisable] = useState(true);
    /* Funcion que se activa al inicial y presionar Start */
    const Inicio = () =>{
        setStartOpacidad(0);
        setBotonInicioDisable(true);
        setDialogosOpacidad(1);
        setHabitacionOpacidad(1);
        MostrarPersonajes(1);
        setBotonDialogosDisable(false);
        setIconoDialogoOpacidad(1);
    }
    const BorrarFondos = () => {
        setHabitacionOpacidad(0);
        setCalle1Opacidad(0);
        setHabitacionZoomOpacidad(0);
    }/* Limpia el lienzo de cualquier personaje y su vestimenta */
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
    }/* Limpia del lienzo cualquier expresion */
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
    }/* Funcion encargada de tomar el indice y cambiar el personaje o mantenerlo en pantalla */
    const MostrarPersonajes = (IndiceActual) => {
        if(decision1.opcion){
            if(IndiceActual==161||IndiceActual==177||IndiceActual==220||IndiceActual==537||IndiceActual==564||IndiceActual==582){
                IniciaCombate = true;
                navigation.navigate('Combate')
            }
        }else if(!decision1.opcion){
            if(IndiceActual==141||IndiceActual==157||IndiceActual==200||IndiceActual==517||IndiceActual==544||IndiceActual==562){
                setTimeout(()=>{
                    navigation.navigate('Combate')
                },2000);
                }
        }
        if(Kurono.ComprobarIndice(IndiceActual)){
            console.log('Kurono');
            CambiarNombre('Kurono');
            if(IndiceActual<12||(IndiceActual>13&&IndiceActual<43)||IndiceActual==47||
            IndiceActual==57||(IndiceActual>59&&IndiceActual<69)||
            (IndiceActual>71&&IndiceActual<83)){
                if(IndiceActual==64){
                    BorrarFondos();
                    setHabitacionOpacidad(1);
                }
                console.log('Serio');
                if(KuronoSerioOpacidad==0){
                    BorrarExpresion();
                    setKuronoSerioOpacidad(1);
                }
            }else if(IndiceActual==43||IndiceActual==46||IndiceActual==58||IndiceActual==69||IndiceActual==71){
                console.log('Nervioso')
                if(KuronoNerviosoOpacidad==0){
                    BorrarExpresion();
                    setKuronoNerviosoOpacidad(1);
                }            
            }else if(IndiceActual==13){
                console.log('Feliz')
                if(KuronoFelizOpacidad==0){
                    BorrarExpresion();
                    setKuronoFelizOpacidad(1);
                }                  
            }else if(IndiceActual==50||IndiceActual==51||IndiceActual==54){
                console.log('Sorprendido')
                if(KuronoSorprendidoOpacidad==0){
                    BorrarExpresion();
                    setKuronoSorprendidoOpacidad(1);
                }   
            }else if(Indice<79){
                console.log('Expresion no definida')
            }                
            /*Eventos Referentes a la Ropa de los personajes independiente de las decisiones */
            if(IndiceActual<58){
                console.log('Uniforme');
                if(KuronoUniformeOpacidad==0){
                    BorrarRopa();
                    setKuronoUniformeOpacidad(1);
                }
            }else if(IndiceActual==58){
                console.log('Animación Camisa');
                if(KuronoCamisaOpacidad==0){
                    BorrarRopa();
                    setKuronoCamisaOpacidad(1);
                }
            }else if(IndiceActual<80){
                console.log('Camisa');
                if(KuronoCamisaOpacidad==0){
                    BorrarRopa();
                    setKuronoCamisaOpacidad(1);
                }
            }else if(Indice<79){
                console.log('Ropa no definida')
            }    
            /* Eventos dependientes de la toma de decisiones */
            if(decision1.opcion==true){
                console.log("*** True ***");
                /* Expresiones */
                if(IndiceActual==83||IndiceActual==141||(IndiceActual>118&&IndiceActual<126)||IndiceActual==176||
                IndiceActual==185||IndiceActual==186||(IndiceActual>187&&IndiceActual<205)){
                    if(KuronoNerviosoOpacidad==0){
                        BorrarExpresion();
                        setKuronoNerviosoOpacidad(1);
                    }
                }else if(IndiceActual==85||IndiceActual==87||(IndiceActual>87&&IndiceActual<103)||(IndiceActual>=105
                &&IndiceActual<119)||(IndiceActual>126&&IndiceActual<176)||IndiceActual==179||IndiceActual==180||
                IndiceActual==205||IndiceActual==206||(IndiceActual>208 && IndiceActual<213)){
                    if(KuronoSerioOpacidad==0){
                        BorrarExpresion();
                        setKuronoSerioOpacidad(1);
                    }
                }else if(IndiceActual==103){
                    if(KuronoFelizOpacidad==0){
                        BorrarExpresion();
                        setKuronoFelizOpacidad(1);
                    }
                }else if(IndiceActual==182||IndiceActual==187){
                    if(KuronoSorprendidoOpacidad==0){
                        BorrarExpresion();
                        setKuronoSorprendidoOpacidad(1);
                    }
                }else if(IndiceActual==207||IndiceActual==208){
                    BorrarExpresion();
                }else if(IndiceActual==213||IndiceActual==214){
                    if(KuronoTristeOpacidad==0){
                        setKuronoTristeOpacidad(1);
                    }
                }
                /* Ropa */
                if(IndiceActual<=87){
                    if(KuronoCamisaOpacidad==0){
                        BorrarRopa();
                        setKuronoCamisaOpacidad(1);
                    }
                }else if(IndiceActual==89){
                    console.log('Aqui deberia haber una animacion de cambio de ropa')
                    if(KuronoTrajeOpacidad==0){
                        BorrarRopa();
                        setKuronoTrajeOpacidad(1);
                    }
                }else if(IndiceActual<207 && IndiceActual>89 ||IndiceActual>208 && IndiceActual<343){
                    if(KuronoTrajeOpacidad==0){
                        BorrarRopa();
                        setKuronoTrajeOpacidad(1);
                    }
                }else if(IndiceActual==207||IndiceActual==208){
                    if(KuronoTrajeEnojadoOpacidad==0){
                        BorrarRopa();
                        setKuronoTrajeEnojadoOpacidad(1);
                    }
                }else if(IndiceActual>343){
                    if(KuronoCamisaOpacidad==0){
                        BorrarRopa();
                        setKuronoCamisaOpacidad(1);
                    }           
                 }
                /* Animaciones */
                /*if(IndiceActual==125){
                    Kurono.TeletransportarDesaparece();
                    AnimacionActiva = true;
                }else if(IndiceActual==126){
                    Kurono.TeletransportarAparece();
                    tiempoDeDialogo = 4000;
                }*/
            }
        }else if(Kato.ComprobarIndice(IndiceActual)){
            console.log('Kato');
            CambiarNombre('Kato');
            /* Muestra las decisiones junto a un dialogo del personaje */
            if(decision1.ComprobarIndice(IndiceActual)){
                console.log('Decisión 1');
                setDecision1AOpacidad(1);
                setDecision1BOpacidad(1);
            }
            /* Eventos relacionados a la ropa independientes de la decision */
            if(IndiceActual<91){
                console.log('Uniforme')
                if(KatoUniformeOpacidad==0){
                    BorrarRopa();
                    setKatoUniformeOpacidad(1);
                }
            } 
            /* Eventos relacionados a las expresiones independientes de la decision */
            if(IndiceActual==12||IndiceActual==15){
                console.log('Nervioso');
                if(KatoNerviosoOpacidad==0){
                    BorrarExpresion();
                    setKatoNerviosoOpacidad(1);
                }
            }else if(IndiceActual==4||IndiceActual==5||IndiceActual==39||IndiceActual==44||IndiceActual==48||
                IndiceActual==49||IndiceActual==61||IndiceActual>67 && IndiceActual<81){
                if(IndiceActual==61){
                    BorrarFondos();
                    setHabitacionOpacidad(1);
                }
                console.log('Serio');
                if(KatoSerioOpacidad==0){
                    BorrarExpresion();
                    setKatoSerioOpacidad(1);
                }
            }else if(IndiceActual==41||IndiceActual==45){
                console.log('Feliz');
                if(KatoFelizOpacidad==0){
                    BorrarExpresion();
                    setKatoFelizOpacidad(1);
                }            
            }else if(IndiceActual==52||IndiceActual==55){
                console.log('Sorprendido');
                if(KatoSorprendidoOpacidad==0){
                    BorrarExpresion();
                    setKatoSorprendidoOpacidad(1);
                }
            }else if(IndiceActual==62||IndiceActual==63){
                console.log('Dialogo paralelo a la esfera')
                BorrarRopa();
                BorrarExpresion();
                if (HabitacionZoomOpacidad==0){
                    BorrarFondos();
                    setHabitacionZoomOpacidad(1);
                }
                if(IndiceActual==62){
                    CambiarIndiceEsfera(0);
                }else{
                    CambiarIndiceEsfera(1);
                    setAlienEsferaOpacidad(1);
                }
            }else if(Indice<79){
                console.log('Expresion no definida')
            }    
            if(decision1.opcion==true){
                /*if(IndiceActual==12||IndiceActual==15){
                    console.log('Nervioso');
                    if(KatoNerviosoOpacidad==0){
                        BorrarExpresion();
                        setKatoNerviosoOpacidad(1);
                    }
                    */
                if(IndiceActual>=118&&IndiceActual<=124){
                    console.log('Sorprendido');
                    if(KatoSorprendidoOpacidad==0){
                            BorrarExpresion();
                            setKatoSorprendidoOpacidad(1);
                    }
                }
                else{
                    console.log('Serio');
                    if(KatoSerioOpacidad==0){
                        BorrarExpresion();
                        setKatoSerioOpacidad(1);
                    }
                }/*else if(IndiceActual==41||IndiceActual==45){
                    console.log('Feliz');
                    if(KatoFelizOpacidad==0){
                        BorrarExpresion();
                        setKatoFelizOpacidad(1);
                    }*/      
 
                if(IndiceActual<84){
                    if(KatoUniformeOpacidad==0){
                        BorrarRopa();
                        setKatoUniformeOpacidad(1);
                    }
                }else if(IndiceActual>=91){
                    if(IndiceActual==91){
                        console.log('Aqui deberia activar una animacion de Kato cambiandose')
                    }
                    console.log('Traje')
                    if(KatoTrajeOpacidad==0){
                        BorrarRopa();
                        setKatoTrajeOpacidad(1);
                    }
                }else if(IndiceActual==123){
                    console.log('Aqui deberia activar una animacion de Kato desapareciendo')
                }else if(IndiceActual==124){
                    console.log('Aqui deberia activar una animacion de Kato apareciendo')
                }
            }
        }else if(Kishimoto.ComprobarIndice(IndiceActual)){
            console.log('Kishimoto')
            CambiarNombre('Kishimoto')
            if(IndiceActual==53||IndiceActual==56){
                if(KishimotoDesnudaOpacidad==0){
                    BorrarRopa();
                    setKishimotoDesnudaOpacidad(1);
                    setCensuraOpacidad(1);
                }
            }else if(IndiceActual==59){
                console.log('Uniforme')
                if(KishimotoUniformeOpacidad==0){
                    BorrarRopa();
                    setKishimotoUniformeOpacidad(1);
                }
            }else if(IndiceActual<79){
                console.log('Falta Definir Ropa')
            }
            if(IndiceActual==53){
                console.log('Parpadeo1')
                if(KishimotoParpadeo1Opacidad==0){
                    BorrarExpresion();
                    setKishimotoParpadeo1Opacidad(1);
                }  
            }else if(IndiceActual==56){
                console.log('Parpadeo2')
                if(KishimotoParpadeo2Opacidad==0){
                    BorrarExpresion();
                    setKishimotoParpadeo2Opacidad(1);
                }
            }else if(IndiceActual==59){
                console.log('Seria')
                if(KishimotoSeriaOpacidad==0){
                    BorrarExpresion();
                    setKishimotoSeriaOpacidad(1);
                }
            }else if(IndiceActual<79){
                console.log('Falta Definir Expresion')
            }
            if(decision1.opcion==true){
                console.log('**TRUE**')
                if(IndiceActual<=97){
                    console.log('Uniforme')
                    if(KishimotoUniformeOpacidad==0){
                        BorrarRopa();
                        setKishimotoUniformeOpacidad(1);
                    }
                }else if(IndiceActual>=101){
                    if(KishimotoTrajeOpacidad==0){
                        BorrarRopa();
                        setKishimotoTrajeOpacidad(1);
                    }
                }
                if(IndiceActual==94||IndiceActual==97){
                    console.log('Nerviosa')
                    if(KishimotoNerviosaOpacidad==0){
                        BorrarExpresion();
                        setKishimotoNerviosaOpacidad(1);
                    }
                }else{
                    console.log('Seria');
                    if(KishimotoSeriaOpacidad==0){
                        BorrarExpresion();
                        setKishimotoSeriaOpacidad(1);
                    }

                }
            }
        }else if(Nishi.ComprobarIndice(IndiceActual)){
            console.log('Nishi')
            CambiarNombre('Nishi')
            if(NishiTrajeOpacidad==0){
                BorrarRopa();
                setNishiTrajeOpacidad(1);
            }
            if(NishiSerioOpacidad==0){
                BorrarExpresion();
                setNishiSerioOpacidad(1);
            }
        }else if(Perro.ComprobarIndice(IndiceActual)){
            console.log('Perro')
            CambiarNombre('Perro')
            if(PerroOpacidad == 0){
                BorrarRopa();
                BorrarExpresion();
                setPerroOpacidad(1);
            }
        }
        /*}else if(Hojo.ComprobarIndice(IndiceActual)){
            var rutaPersonaje = Hojo.MostrarPersonaje();
            var rutaExpresion = Hojo.MostrarExpresion();*/
        else if(Cebollin.ComprobarIndice(IndiceActual)){
            console.log('Cebollin')
            CambiarNombre('Cebollin');
            if(CebollinOpacidad==0){
                BorrarRopa();
                BorrarExpresion();
                setCebollinOpacidad(1);
            }
        }else{
            console.log('Falta el personaje')
        }

    }
    const Avanzar = () => {
        console.log('Avanzar', DialogosPrincipales.length)
        if(Indice<DialogosPrincipales.length&&Indice!=79){
            CambiarIndice(Indice+1)
            console.log('Indice del Dialogo: ' + String(Indice+1))
            console.log('Indice del Personaje: ' + String(Indice+2))
            MostrarPersonajes(Indice + 2);
            if(Indice==78){
                setIconoDialogoOpacidad(0);
            }
        }else if(Indice==79){
            if(IconoOpcionBOpacidad==0){
                console.log('Decision 1')
                setIconoOpacionAOpacidad(0);
                setIconoOpacionBOpacidad(1);
            }else{
                setIconoOpacionBOpacidad(0);
                setDecision1AOpacidad(0);
                setDecision1BOpacidad(0);
                decision1.ElegirDecision(false);
                CambiarIndice(Indice+1)
                console.log('Indice del Dialogo: ' + String(Indice+1))
                console.log('Indice del Personaje: ' + String(Indice+2))
                MostrarPersonajes(Indice + 2);
            }
        }
    }
    const Retroceder = () => {
        if(Indice>0&&Indice!=79&&Indice!=80){
            CambiarIndice(Indice-1)
            console.log('Indice del Dialogo: ' + String(Indice-1))
            console.log('Indice del Personaje: ' + String(Indice))
            MostrarPersonajes(Indice);

        }else if(Indice==79){
            if(IconoOpcionAOpacidad==0){
                console.log('Decision 1')
                setIconoOpacionAOpacidad(1);
                setIconoOpacionBOpacidad(0);
            }else{
                setIconoOpacionAOpacidad(0);
                setDecision1AOpacidad(0);
                setDecision1BOpacidad(0);
                decision1.ElegirDecision(true);
                CambiarIndice(Indice+1)
                console.log('Indice del Dialogo: ' + String(Indice+1))
                console.log('Indice del Personaje: ' + String(Indice+2))
                MostrarPersonajes(Indice + 2);
            }
        }
    }
    useEffect(() => {
        (async () => {
            console.log('***reseteado***')
            decision1.ResetearDecision();
            /* Fondos */
            const HabitacionImage = Asset.fromModule(require('../../assets/img/backgrounds/HabitacionNoche.png'))
            const Calle1Image = Asset.fromModule(require('../../assets/img/backgrounds/FondoCalle1.png'))
            /* Kurono */
            const KuronoUniformeImage = Asset.fromModule(require('../../assets/img/characters/KuronoUniforme.png'))
            const KuronoCamisaImage = Asset.fromModule(require('../../assets/img/characters/KuronoCamisa.png'))
            const KuronoTrajeImage = Asset.fromModule(require('../../assets/img/characters/KuronoTraje.png'))
            const KuronoSerioImage = Asset.fromModule(require('../../assets/img/characters/KuronoSerio.png'))
            const KuronoNerviosoImage = Asset.fromModule(require('../../assets/img/characters/KuronoNervioso.png'))
            const KuronoFelizImage = Asset.fromModule(require('../../assets/img/characters/KuronoFeliz.png'))
            const KuronoTristeImage = Asset.fromModule(require('../../assets/img/characters/KuronoTriste.png'))
            const KuronoSorprendidoImage = Asset.fromModule(require('../../assets/img/characters/KuronoSorprendido.png'))
            /* Kato */
            const KatoUniformeImage = Asset.fromModule(require('../../assets/img/characters/KatoUniforme.png'))
            const KatoTrajeImage = Asset.fromModule(require('../../assets/img/characters/KatoTraje.png'))
            const KatoSerioImage = Asset.fromModule(require('../../assets/img/characters/KatoSerio.png'))
            const KatoNerviosoImage = Asset.fromModule(require('../../assets/img/characters/KatoNervioso.png'))
            const KatoFelizImage = Asset.fromModule(require('../../assets/img/characters/KatoFeliz.png'))
            const KatoSorprendidoImage = Asset.fromModule(require('../../assets/img/characters/KatoSorprendido.png'))
            /* Kishimoto */
            const KishimotoDesnudaImage = Asset.fromModule(require('../../assets/img/characters/Kishimoto.png'))
            const KishimotoUniformeImage = Asset.fromModule(require('../../assets/img/characters/KishimotoUniforme.png'))
            const KishimotoTrajeImage = Asset.fromModule(require('../../assets/img/characters/KishimotoTraje.png'))
            const KishimotoSeriaImage = Asset.fromModule(require('../../assets/img/characters/KishimotoSeria.png'))
            const KishimotoNerviosaImage = Asset.fromModule(require('../../assets/img/characters/KishimotoNerviosa.png'))
            const KishimotoFelizImage = Asset.fromModule(require('../../assets/img/characters/KishimotoFeliz.png'))
            const KishimotoParpadeo1Image = Asset.fromModule(require('../../assets/img/characters/KishimotoParpadeo1.png'))
            const KishimotoParpadeo2Image = Asset.fromModule(require('../../assets/img/characters/KishimotoParpadeo2.png'))
            const KishimotoParpadeo3Image = Asset.fromModule(require('../../assets/img/characters/KishimotoParpadeo3.png'))
            /* Nishi */
            const NishiTrajeImage = Asset.fromModule(require('../../assets/img/characters/NishiTraje.png'))
            const NishiSerioImage = Asset.fromModule(require('../../assets/img/characters/NishiSerio.png'))
            /* Perro */
            const PerroImageload = Asset.fromModule(require('../../assets/img/characters/Perro.png'))
            /* Aliens */
            const CebollinImage = Asset.fromModule(require('../../assets/img/characters/Cebollense.png'))
            /* Efectos */
            const CensuraImage = Asset.fromModule(require('../../assets/img/effects/censura.png'))
            /* Lista de Imagenes de descarga asyncronica */
            const ListaImages = [HabitacionImage.downloadAsync(), Calle1Image.downloadAsync,CensuraImage.downloadAsync(),
                KuronoUniformeImage.downloadAsync(),KuronoCamisaImage.downloadAsync(),KuronoTrajeImage.downloadAsync(),
                KuronoSerioImage.downloadAsync(),KuronoNerviosoImage.downloadAsync(),KuronoFelizImage.downloadAsync(),
                KuronoSorprendidoImage.downloadAsync(),KuronoTristeImage.downloadAsync(),KatoUniformeImage.downloadAsync(),
                KatoTrajeImage.downloadAsync(),KatoSerioImage.downloadAsync(),KatoNerviosoImage.downloadAsync(),
                KatoFelizImage.downloadAsync(),KatoSorprendidoImage.downloadAsync(),KishimotoDesnudaImage.downloadAsync(),
                KishimotoUniformeImage.downloadAsync(),KishimotoTrajeImage.downloadAsync(),KishimotoSeriaImage.downloadAsync(),
                KishimotoNerviosaImage.downloadAsync(),KishimotoFelizImage.downloadAsync(),KishimotoParpadeo1Image.downloadAsync(),
                KishimotoParpadeo2Image.downloadAsync(),KishimotoParpadeo3Image.downloadAsync(),NishiTrajeImage.downloadAsync(),
                NishiSerioImage.downloadAsync(),PerroImageload.downloadAsync()];
            try {
                await Promise.all(ListaImages);
                console.log('Ha cargado');
                setHabitacion(HabitacionImage);
                setCalle1(Calle1Image);
                setCensura(CensuraImage);
                /* Kurono */
                setKuronoUniforme(KuronoUniformeImage);
                setKuronoCamisa(KuronoCamisaImage);
                setKuronoTraje(KuronoTrajeImage);
                setKuronoSerio(KuronoSerioImage);
                setKuronoNervioso(KuronoNerviosoImage);
                setKuronoFeliz(KuronoFelizImage);
                setKuronoSorprendido(KuronoSorprendidoImage);
                setKuronoTriste(KuronoTristeImage);
                /* Kato */
                setKatoUniforme(KatoUniformeImage);
                setKatoTraje(KatoTrajeImage);
                setKatoSerio(KatoSerioImage);
                setKatoNervioso(KatoNerviosoImage);
                setKatoFeliz(KatoFelizImage);
                setKatoSorprendido(KatoSorprendidoImage);
                /* Kishimoto */
                setKishimotoDesnuda(KishimotoDesnudaImage);
                setKishimotoUniforme(KishimotoUniformeImage);
                setKishimotoTraje(KishimotoTrajeImage);
                setKishimotoSeria(KishimotoSeriaImage);
                setKishimotoNerviosa(KishimotoNerviosaImage);
                setkishimotoFeliz(KishimotoFelizImage);
                setKishimotoParpadeo1(KishimotoParpadeo1Image);
                setKishimotoParpadeo2(KishimotoParpadeo2Image);
                setKishimotoParpadeo3(KishimotoParpadeo3Image);
                /*Nishi*/
                setNishiTraje(NishiTrajeImage);
                setNishiSerio(NishiSerioImage);
                /*Perro*/
                setPerroImage(PerroImageload);
                /* Aliens */
                setCebollense(CebollinImage)
                setReady(true);
            } catch (error) {
                console.error('Error al descargar las imágenes', error);
            }
        })();
    }, []);
    if(!ready){
        return (
            <Carga/>
        )
      }
    return (
        <>
            <StatusBar hidden={true} barStyle={'translucent'}/>
            <View style={EstilosDialogos.ContainerDialogos}>
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
                <Text
                style={{...EstilosDialogos.TextoEsfera,opacity: HabitacionZoomOpacidad}}>
                {DialogosEsfera[IndiceEsfera]}
                </Text>
                <Image
                source={{...Cebollense}}
                style={{...EstilosDialogos.AliensEsfera,opacity: AlienEsferaOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...Calle1}}
                style={{...EstilosDialogos.Fondo, opacity: Calle1Opacidad}}
                cachePolicy={'memory'}
                />
                {/* Ropa */}
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
                {/* Expresiones */}
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
                {/* Perro */}
                <Image
                source={{...PerroImage}}
                style={{...EstilosDialogos.Personajes,opacity:PerroOpacidad}}
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
                {/* Botones */}
                <TouchableWithoutFeedback
                    onPress={Avanzar}
                    disabled={BotonDialogosDisable}>
                    <View
                    style={{...EstilosDialogos.botonesDialogos,...EstilosDialogos.boton1,opacity:DialogosOpacidad}}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={Retroceder}
                    disabled={BotonDialogosDisable}>
                    <View
                    style={{...EstilosDialogos.botonesDialogos,...EstilosDialogos.boton2,opacity:DialogosOpacidad}}
                    />
                </TouchableWithoutFeedback>
            <Text style={EstilosDialogos.Texto}>Proyecto Gantz Nexus Version 1.3</Text>
            </View>
            <TouchableWithoutFeedback
                onPress={Inicio}
                disabled={BotonInicioDisable}
                >
                    <View style={{...EstilosDialogos.botonInicio, opacity: StartOpacidad}}>
                    <Text style={EstilosDialogos.TextoInicio}>Start</Text>
                    </View>
            </TouchableWithoutFeedback>
        </>
    );
};
export default Main