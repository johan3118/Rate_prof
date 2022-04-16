import React from "react";
import { FaSearch } from 'react-icons/fa';
import "./Inicio.css"


export function Buscador({placeholder, data}){
  

    return(
        <div className="inicio-input"> 
            <div className='inicio-search'>
                <div className='search-icon'> <FaSearch/> </div>
                <input className='search' type="text" name='nombre' placeholder={placeholder}></input>
            </div>
            <div className="inicio-resultado-data"></div>
        </div>
    );
}