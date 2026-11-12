import React from 'react'
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import '../../styles/encabezado.css';
import { useState } from 'react';
import Inicio from '../../Pages/Inicio';

function Encabezado() {

    const [modoOscuro, setModoOscuro] = useState(false);

    return (
        <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
            <div className="container-fluid">

                
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <div className="logo-icon">
                        <img className='imagen-logo' src={logo} width={75} alt="logo" />
                    </div>

                    <div >
                        <h6 className="mb-0">Cancionero</h6>
                        <h5>ZOE</h5>
                    </div>
                </Link>

                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menuNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                <div className="collapse navbar-collapse" id="menuNavbar">

                    <ul className="navbar-nav mx-auto gap-lg-3">

                        <li className='nav-item'>
                            <Link className='nav-link' to="/Inicio">Inicio</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Cancionero">Canciones</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Repertorios">Repertorios</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Herramientas">Herramientas</Link>
                        </li>

                    </ul>

                    
                    <div className="d-flex align-items-center gap-2">

                        <button
                            className="theme-button"
                            onClick={() => setModoOscuro(!modoOscuro)}
                        >
                            <i className="bi bi-sun"></i>

                            <span className={`theme-switch ${modoOscuro ? 'active' : ''}`}>
                            </span>

                            <i className="bi bi-moon"></i>
                        </button>

                        <button className="btn btn-login">
                            Iniciar sesión
                        </button>

                        <button className="btn btn-register">
                            Registrarse
                        </button>

                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Encabezado;