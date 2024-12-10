import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import logo from '../assets/Logo-usp.svg';
import '../css/Navbar.css';

function Navbar() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        setUser(null);
        navigate('/');
    };

    const isLoginPage = location.pathname ==='/login'

    return (
        <div className="Header">
            <header className="Header-navbar">
                <img src={logo} className="Header-navbar-logo" alt="logo" />

                <nav>
                    <ul className="header-nav">
                        <li><Link to="/">Home</Link></li>
                        {/* Display links only if the user is logged in */}
                        {user && (
                            <>
                                <li><Link to="/relatorios">Relatórios</Link></li>
                                <li><Link to="/perfil">Perfil</Link></li>
                            </>
                        )}
                    </ul>
                </nav>

                <div className="Header-navbar-buttons">
                    {!isLoginPage && (
                        <button className="Header-navbar-button" onClick={() => navigate('/login')}>
                            Login
                        </button>
                    )}
                    {user ? (
                        <button className="Header-navbar-button" onClick={handleLogout}>
                            Logout
                        </button>
                    ) : null}
                </div>
            </header>
        </div>
    );
}

export default Navbar;
