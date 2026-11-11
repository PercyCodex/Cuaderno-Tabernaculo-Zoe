import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Encabezado from './Components/layout/Encabezado';
import Inicio from './Pages/Inicio';
import Canciones from './Pages/Cancionero';
import Herramientas from './Pages/Herramientas';
import Repertorios from './Pages/Repertorios';

function App() {
    return (
        <BrowserRouter>

            <Encabezado />

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/Cancionero" element={<Canciones />} />
                <Route path= "/Repertorios" element= {<Repertorios />} />
                <Route path= "/Herramientas" element= {<Herramientas />} />

            </Routes>

        </BrowserRouter>
    )
}


export default App;