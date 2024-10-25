import '../../css/ContentsCss/PerfilContent.css';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import AlunoInfo from './TiposDePerfil/AlunoInfo';
import ProfessorInfo from './TiposDePerfil/ProfessorInfo';

function PerfilContent() {  
    const { user } = useContext(UserContext);

    return (
        <div className="Backgroung-Perfil">
            <h2>Perfil: {user?.Usuario?.nome_completo}</h2>
            <p>Email: {user?.Usuario?.email}</p>
            {user?.Usuario?.tipo_usuario === "Aluno" ? (
                <AlunoInfo aluno={user} />
            ) : (
                <ProfessorInfo professor={user} />
            )}
        </div>
    );
}

export default PerfilContent;
