import '../../css/ContentsCss/DisciplinasContent.css';
import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function DisciplinasContent() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [isCurrent, setIsCurrent] = useState(true);

    // Função para alternar o filtro de disciplinas
    const handleFilterChange = (isCurrentFilter) => {
        setIsCurrent(isCurrentFilter);
    };

    // Função auxiliar para obter nome e descrição da disciplina com base no disciplina_id
    const getDisciplinaInfo = (disciplinaId) => {
        const disciplina = user.Disciplina.find(d => d.id === disciplinaId);
        return disciplina ? { nome: disciplina.nome_disciplina, descricao: disciplina.descricao } : {};
    };

    // Determina o tipo de disciplinas para exibir com base no filtro selecionado e `Oferecimento.semestre`
    const disciplinas = user.Oferecimento.filter(oferecimento => {
        const [ano, semestre] = oferecimento.semestre.split('/').map(Number);
        const currentYear = new Date().getFullYear();
        const currentSemester = new Date().getMonth() < 6 ? 1 : 2;

        return isCurrent 
            ? ano === currentYear && semestre === currentSemester // Disciplinas atuais
            : ano < currentYear || (ano === currentYear && semestre < currentSemester); // Disciplinas anteriores
    });

    // Função para redirecionar o usuário ao clicar em "Acessar relatórios"
    const handleAcessarRelatorios = (disciplinaId) => {
        navigate(`/relatorio`, { state: { disciplinaId } });
    };


    return (
        <div className="Backgroung-disciplinas">
            {/* Parte 1: Filtro para disciplinas atuais e antigas */}
            <div className="Disciplina-type-session">
                <button 
                    className="Disciplina-type-session-button"
                    onClick={() => handleFilterChange(true)}
                >
                    Disciplinas atuais
                </button>
                <button 
                    className="Disciplina-type-session-button"
                    onClick={() => handleFilterChange(false)}
                >
                    Disciplinas anteriores
                </button>
            </div>

            {/* Parte 2: Lista de disciplinas filtradas */}
            <div className="Disciplina-list-session">
                {disciplinas.map((oferecimento, index) => {
                    const { nome, descricao } = getDisciplinaInfo(oferecimento.disciplina_id);
                    return (
                        <div className="Disciplina-list-card" key={index}>
                            <h2 className="Disciplina-list-title">{nome}</h2>
                            <p>{descricao}</p>
                            <p>Semestre: {oferecimento.semestre}</p>
                            <button 
                                className="Disciplina-list-bt"
                                onClick={() => handleAcessarRelatorios(oferecimento.disciplina_id)}
                            >
                                Acessar relatórios
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DisciplinasContent;
