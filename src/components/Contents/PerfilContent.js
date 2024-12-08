import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import ProfessorInfo from './TiposDePerfil/ProfessorInfo';
import AlunoInfo from './TiposDePerfil/AlunoInfo';

function PerfilContent() {
    const { user } = useContext(UserContext);
    const [alunosOrientados, setAlunosOrientados] = useState([]);

    useEffect(() => {
        if (user?.tipo === 'Orientador') {
            fetch('http://localhost:8000/api/orientador/alunos/', {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${user.token}`,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setAlunosOrientados(data.alunos || []);
                })
                .catch((error) => {
                    console.error('Error fetching alunos:', error);
                });
        }
    }, [user]);

    return (
        <div className="Backgroung-Perfil">
            <h2>Perfil: {user?.nome_completo}</h2>
            <p>Email: {user?.email}</p>
            {user?.tipo === 'Aluno' ? (
                <AlunoInfo aluno={user} />
            ) : (
                <ProfessorInfo professor={{ ...user, alunos: alunosOrientados }} />
            )}
        </div>
    );
}

export default PerfilContent;
