import '../../css/ContentsCss/DisciplinasContent.css';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function DisciplinasContent() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [isCurrent, setIsCurrent] = useState(true); // Estado para alternar entre disciplinas atuais e antigas

    // Função para alternar o filtro de disciplinas
    const handleFilterChange = (isCurrentFilter) => {
        setIsCurrent(isCurrentFilter);
    };

    // Determina o tipo de disciplinas para exibir com base no tipo de usuário e no filtro
    const disciplinas = user?.Usuario?.tipo_usuario === "Aluno" 
        ? (isCurrent ? user.Aluno.disciplinas_cursadas_aprovadas : user.Aluno.disciplinas_cursadas_reprovadas) 
        : user.Oferecimento.filter(oferecimento => {
            const [ano, semestre] = oferecimento.semestre.split('/');
            return isCurrent 
                ? parseInt(ano) === new Date().getFullYear()
                : parseInt(ano) < new Date().getFullYear();
        });

    // Função para redirecionar o usuário ao clicar em "Acessar relatórios"
    const handleAcessarRelatorios = (disciplinaId) => {
        navigate(`/relatorio?disciplinaId=${disciplinaId}`);
    };

    return (
        <div className="Backgroung-disciplinas">
            {/* Parte 1: Filtro para disciplinas atuais e antigas */}
            <div className="Disciplina-type-session">
                <button 
                    className="Disciplina-type-session-button"
                    onClick={() => handleFilterChange(true)}
                >
                    Minhas disciplinas
                </button>
                <button 
                    className="Disciplina-type-session-button"
                    onClick={() => handleFilterChange(false)}
                >
                    Disciplinas antigas
                </button>
            </div>

            {/* Parte 2: Lista de disciplinas filtradas */}
            <div className="Disciplina-list-session">
                {disciplinas.map((oferecimento, index) => (
                    <div className="Disciplina-list-card" key={index}>
                        <h2 className="Disciplina-list-title">{oferecimento.nome_disciplina}</h2>
                        <p>{oferecimento.descricao}</p>
                        <p>Semestre: {oferecimento.semestre}</p>
                        <button 
                            className="Disciplina-list-bt"
                            onClick={() => handleAcessarRelatorios(oferecimento.disciplina_id)}
                        >
                            Acessar relatórios
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisciplinasContent;
