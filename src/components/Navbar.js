import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import logo from '../assets/Logo-usp.svg';
import '../css/Navbar.css';
import alunoMock from '../mock_files/aluno'
import professorMock from '../mock_files/professor'

function Navbar() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    // Função para carregar os dados do JSON e definir o usuário logado
    const handleLogin = async (userType) => {
        try {
            let data;

            // Verifica o tipo de usuário e atribui os dados correspondentes
            if (userType === 'aluno') {
                data = alunoMock;
            } else if (userType === 'professor') {
                data = professorMock;
            }

            console.log("Usuário logado:", data);
            setUser(data); // Define o usuário no contexto
        } catch (error) {
            console.error('Erro ao carregar os dados do usuário:', error);
        }
    };

    // Função para logout, limpa o usuário do contexto
    const handleLogout = () => {
        setUser(null); // Remove o usuário do contexto
        navigate('/'); // Redireciona o usuário para a página Home
    };

    return (
        <div className="Header">
            <header className="Header-navbar">
                <img src={logo} className="Header-navbar-logo" alt="logo" />

                <nav>
                    <ul className="header-nav">
                        <li><Link to="/">Home</Link></li>
                        {/* Exibir links somente se o usuário estiver logado */}
                        {user && (
                            <>
                                <li><Link to="/disciplinas">Disciplinas</Link></li>
                                <li><Link to="/perfil">Perfil</Link></li>
                            </>
                        )}
                    </ul>
                </nav>

                <div className="Header-navbar-buttons">
                    {user ? (
                        <button
                            className="Header-navbar-button"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <button
                                className="Header-navbar-button"
                                onClick={() => handleLogin('aluno')}
                            >
                                Acessar como aluno
                            </button>
                            <button
                                className="Header-navbar-button"
                                onClick={() => handleLogin('professor')}
                            >
                                Acessar como docente
                            </button>
                        </>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Navbar;
