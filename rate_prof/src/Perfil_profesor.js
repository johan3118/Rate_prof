import './Perfil_profesor.css';
import Logo from './Logo.PNG';
import Perfil from './perfilF.PNG';

function Perfil_profesor(){
    return (
        <div className="perfil_profesor">
            <header className='perfil_appbar'>
                <img  className='perfil_logo' src={Logo} alt="logo"/>
                <img  className='perfil_perfil' src={Perfil} alt="logo"/>
            </header>
            <body className='perfil_body'>
                <div className='perfil_profesor_nombre_area'>
                    <h1 className="perfil_nombre">Nehomar Lezama</h1>
                    <div className="perfil_separador_na"></div>
                    <h2 className="perfil_area">Ciencias Basicas y Ambientales</h2>
                </div>
                <div className='perfil_filtro'>
                        <button>Ejemplo</button>
                </div>
                <div className='perfil_rate_comm'>
                    <div className='perfil_rate_dif'>
                        <div className="perfil_rate">
                            <h3 className="perfil_rate_letter">Rendimiento</h3>
                            <div className="perfil_rate_number">
                                <h1 className="rate">5.0</h1>
                            </div>
                        </div>
                        <div className="perfil_dif">
                            <h3 className="perfil_dif_letter">Dificultad</h3>
                            <div className="perfil_dif_number">
                                <h1 className="dif">4.0</h1>
                            </div>
                        </div>
                    </div>
                    <div className='perfil_comm'></div>
                </div>
            </body>
        </div>
    );
}


export default Perfil_profesor;