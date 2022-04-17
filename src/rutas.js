import { Route } from "react-router";
import { Routes } from "react-router";
import ProfesorUnico from "./components/ProfesorUnico";
import Inicio from "./components/Inicio";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import RequireAutenticacion from "./store/AuthRequired";
import AuthProvider from './store/AuthProvider'
import Close from './components/Close'

function CrearRutas() {
    return (
        <Routes>
            <Route
                path='/Rate_prof'
                element={<AuthProvider element={Inicio} />} />
            <Route path='/Rate_prof/signup' element={<AuthProvider element={Signup} />} />
            <Route path='/Rate_prof/signin' element={<AuthProvider element={Signin} />} />
            <Route
                path='/Rate_prof/profesores/:id'
                element={<RequireAutenticacion element={ProfesorUnico} />} />
            <Route path='/Rate_prof/close' element={<Close />} />
        </Routes>
    )
}

export default CrearRutas