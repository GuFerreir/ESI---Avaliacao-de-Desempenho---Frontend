import logo from '../imgs/Logo-usp.svg';
import '../css/Navbar.css';

function Navbar() {  
    return (
        <div className="Header">
            <header className="Header-navbar">
                <img src={logo} className="Header-navbar-logo" alt="logo" />
                <div>
                    <button className="Header-navbar-button">Acessar como aluno</button>
                    <button className="Header-navbar-button">Acessar como docente</button>
                </div>
            </header>
        </div>
    )
}

export default Navbar;