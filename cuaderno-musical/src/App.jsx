import './App.css';

import { Routes, Route, useLocation } from "react-router-dom"
import Encabezado from './Components/layout/Encabezado';
import Inicio from './Pages/Inicio';
import Canciones from './Pages/Cancionero';
import Herramientas from './Pages/Herramientas';
import Repertorios from './Pages/Repertorios';
import Login from './Pages/IniciarSesion/Login';

function App() {
    const location = useLocation();
    const background = location.state?.background;

    return (
        <>
            <Encabezado />

            <Routes location={background || location}>
                <Route path="/" element={<Inicio />} />
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/Cancionero" element={<Canciones />} />
                <Route path="/Repertorios" element={<Repertorios />} />
                <Route path="/Herramientas" element={<Herramientas />} />
                <Route path="/Login" element={<Login />} />   {/* entrada directa o recarga */}
            </Routes>

            {background && (
                <Routes>
                    <Route path="/Login" element={<Login />} />
                </Routes>
            )}
        </>
    )
}

export default App;