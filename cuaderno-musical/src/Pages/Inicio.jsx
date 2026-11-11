import imgf from '../assets/images/nube.jpeg'

import '../styles/inicio.css';

function Inicio(){
return(
    <div className="container ">
        <div className="row">
            <div className="imagen col-12  d-flex justify-content-center">
                    <img className='img-fluid' src={imgf} alt="imagen" />
            </div>
        </div>
    </div>
);
}

export default Inicio;