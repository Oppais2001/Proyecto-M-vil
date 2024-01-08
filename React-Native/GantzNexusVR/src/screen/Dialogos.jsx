import React, {useEffect, useState} from 'react';
import Carga from './atoms/Carga.jsx';
import { decision1 } from '../components/ClasesDialogos';
import RecuadroDialogos from './atoms/RecuadroDialogos.jsx'
import PersonajesRopaDialogos from './atoms/PersonajesRopaDialogos.jsx'
import PersonajesExpresionDialogos from './atoms/PersonajesExpresionDialogos.jsx'
import BotonesDialogos from './atoms/BotonesDialogos.jsx';
import Fondos from './atoms/Fondos.jsx';
import RecuadroDialogosEsfera from './atoms/RecuadroDialogosEsfera.jsx';
import SistemaDecisiones from './atoms/SistemaDecisiones.jsx';
import PersonajesAnimados from './atoms/PersonajesAnimados.jsx';

const Main = ({navigation})=>{
    /* Variables de uso general de la app*/
    const [Indice, setIndice] = useState(0);
    const [ready, setReady] = useState(false);
    const [Animacion, setAnimacion] = useState(false);
     /* Cargado de Imagenes */
    /* Fondos */
    const [Habitacion, setHabitacion] = useState(null);
    const [Calle1, setCalle1] = useState(null);
    /* Efectos */
    const [Censura, setCensura] = useState(null);
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
    const [Cebollense1, setCebollense1] = useState(null);
    const [Cebollense2, setCebollense2] = useState(null);
    const [CebollenseEsfera, setCebollenseEsfera] = useState(null);
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
            const Cebollin1Image = Asset.fromModule(require('../../assets/img/characters/Cebollin1.png'))
            const Cebollin2Image = Asset.fromModule(require('../../assets/img/characters/Cebollin2.png'))
            const CebollinEsfera = Asset.fromModule(require('../../assets/img/characters/CebollinEsfera.png'))
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
                NishiSerioImage.downloadAsync(),PerroImageload.downloadAsync(), Cebollin1Image.downloadAsync(),
                Cebollin2Image.downloadAsync(), CebollinEsfera.downloadAsync()];
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
                setCebollense1(Cebollin1Image);
                setCebollense2(Cebollin2Image);
                setCebollenseEsfera(CebollinEsfera);
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
            <Fondos indice={Indice} Habitacion={Habitacion} Calle1={Calle1}/>
            <PersonajesRopaDialogos
            indice={Indice} setanimacion={setAnimacion} KuronoUniforme={KuronoUniforme} KuronoUniformeEnojado={KuronoUniformeEnojado} KuronoCamisa={KuronoCamisa}
            KuronoCamisaEnojado={KuronoCamisaEnojado} KuronoTraje={KuronoTraje} KuronoTrajeEnojado={KuronoTrajeEnojado}
            KatoUniforme={KatoUniforme} KatoTraje={KatoTraje} KishimotoDesnuda={KishimotoDesnuda} KishimotoUniforme={KishimotoUniforme}
            KishimotoTraje={KishimotoTraje} KishimotoColegial={KishimotoColegial} NishiTraje={NishiTraje} Censura={Censura}
            PerroImage={PerroImage}/>
            <PersonajesExpresionDialogos
            indice={Indice} setanimacion={setAnimacion} KuronoSerio={KuronoSerio} KuronoNervioso={KuronoNervioso} KuronoFeliz={KuronoFeliz}
            KuronoTriste={KuronoTriste} KuronoSorprendido={KuronoSorprendido} KatoSerio={KatoSerio} KatoNervioso={KatoNervioso}KatoFeliz={KatoFeliz}
            KatoTriste={KatoTriste} KatoSorprendido={KatoSorprendido} KishimotoSeria={KishimotoSeria} KishimotoNerviosa={KishimotoSeria}
            KishimotoFeliz={KishimotoFeliz} KishimotoTriste={KishimotoTriste} KishimotoParpadeo1={KishimotoParpadeo1}
            KishimotoParpadeo2={KishimotoParpadeo2} KishimotoParpadeo3={KishimotoParpadeo3} NishiSerio={NishiSerio}/>
            <PersonajesAnimados indice={Indice} setanimacion={setAnimacion} KuronoSerio={KuronoSerio} KuronoCamisa={KuronoCamisa}/>
            <RecuadroDialogosEsfera indice = {Indice} Cebollin={CebollenseEsfera} />
            <RecuadroDialogos indice = {Indice}/>
            <SistemaDecisiones indice={Indice} setindice={setIndice} animacion={Animacion}/>
            <BotonesDialogos indice={Indice} setindice={setIndice} animacion={Animacion}/>
        </>
    )
}
export default Main; 