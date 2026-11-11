import imgf from '../assets/images/nube.jpeg'

import '../styles/inicio.css';

function Inicio() {

    const ensayoSemana = [
        { id: 1, titulo: "Santo eres Tú", tono: "D" },
        { id: 2, titulo: "Sana tu pueblo", tono: "A" },
        { id: 3, titulo: "Aquí estoy", tono: "G" },
        { id: 4, titulo: "Jehová es mi pastor", tono: "C" },
        { id: 5, titulo: "Grande es tu fidelidad", tono: "E" }
    ];

    return (
        <div className="container ">
            <div className="row">
                <div className="imagen col-12  d-flex justify-content-center">
                    <img className='img-fluid' src={imgf} alt="imagen" />
                    <div className="col-12 d-flex flex-column justify-content-center g-4 tituloC">
                        <h1 className="titulo d-flex justify-content-center">
                            <span>B</span>
                            <span>I</span>
                            <span>E</span>
                            <span>N</span>
                            <span>V</span>
                            <span>E</span>
                            <span>N</span>
                            <span>I</span>
                            <span>D</span>
                            <span>O</span>
                            <span>S</span>
                        </h1>

                        <div className="tarjeta-ensayo mt-3 ">
                            <div className="ensayo-header d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-2">
                                    <span>📅</span>
                                    <span className="fw-semibold">Ensayo de esta semana</span>
                                </div>
                                <a href="#todos" className="ver-todos">Ver todos →</a>
                            </div>

                            <ul className="lista-canciones list-unstyled m-0 mt-2">
                                {ensayoSemana.map((cancion) => (
                                    <li key={cancion.id} className="cancion-item d-flex justify-content-between align-items-center py-2">
                                        <div className="d-flex align-items-center gap-3">
                                            <span className="numero-circulo">{cancion.id}</span>
                                            <span>{cancion.titulo}</span>
                                        </div>
                                        <span className="badge-tono">{cancion.tono}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;