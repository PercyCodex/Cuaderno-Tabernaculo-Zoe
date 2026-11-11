import imgf from '../assets/images/nube.jpeg'

import '../styles/inicio.css';

function Inicio() {
    return (
        <div className="container ">
            <div className="row">
                <div className="imagen col-12  d-flex justify-content-center">
                    <img className='img-fluid' src={imgf} alt="imagen" />
                    <div className="col-12 d-flex justify-content-center tituloC">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;