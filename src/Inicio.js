import './Inicio.css'
import Logo from './Logo.PNG';
import InicioImg from './inicio.PNG';
import {Buscador} from './Buscador.js';
import { useEffect, useState } from 'react';
import { db } from "./Firebase"



export function Inicio(){

    const [Profesor, setProfesores] = useState()


    useEffect(() => {
        db.collection('profesores').onSnapshot(snap => {
            setProfesores(snap.docs.map(doc => doc.data()))
        })
    }, [])



return (
    <div>
        <h1>HOLA</h1>
        {Profesor.map((profe) => (
            <div>
                <h2>{profe.area}</h2>
                <h2>{profe.nombre}</h2>
            </div>
        ))}
    </div>
        




        // <div className="inicio-background-color">
        //     <div className="inicio-background">
        //         <div className="inicio-appbar">
        //             <div className='inicio-appbar-diseño'>
        //                 <span></span>
        //                 <span></span>
        //                 <span></span>
        //             </div>
        //             <div className='inicio-appbar-logout'>2</div>
        //         </div>
        //         <div className="inicio-logo-search">
        //             <div className='inicio-logo'>
        //                 <img className='logo' src={Logo} alt="Logo"/>
        //                 <div className='nombre'>
        //                     <span>B</span>
        //                     <span>e</span>
        //                     <span>e</span>
        //                     <span>l</span>
        //                     <span>S</span>
        //                     <span>t</span>
        //                     <span>o</span>
        //                     <span>p</span>
        //                 </div>
        //             </div>
        //             <Buscador placeholder="Buscar un Profesor..."/>
        //         </div>    
        //         <div className="inicio-imagen-linea">
        //             <div className='inicio-imagen'>
        //             <img className='inicio-img' src={InicioImg} alt="inicio-img"/>
        //             </div>
        //             <div className='inicio-linea'>
        //                 <hr></hr>
        //                 <hr></hr>
        //                 <hr></hr>
        //                 <hr></hr>
        //             </div>
        //         </div>    
        //     </div>
        // </div>
    );
}

