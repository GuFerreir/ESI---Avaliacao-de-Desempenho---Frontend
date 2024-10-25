import imagemCampusEach from '../imgs/each-usp.jpg';
import '../css/Banner.css';

function Navbar() {  
    return (
        <div className="Backgroung-banner">
            <header className="Banner">
                <img src={imagemCampusEach} alt="Campus EACH/USP"/>
                <h1>Sistema de avaliações de pós</h1>
                <p>Programa de pós graduação da EACH/USP</p>
            </header>
        </div>
    )
}

export default Navbar;