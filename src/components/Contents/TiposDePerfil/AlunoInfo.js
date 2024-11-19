import React from 'react';

function AlunoInfo({ aluno }) {
    return (
        <div className="Aluno-Info">
            <h3>Informações do Aluno</h3>
            <p>Matrícula: {aluno.Aluno.matricula}</p>
            <p>Curso: {aluno.Aluno.curso}</p>
            <p>Data de Matrícula: {aluno.Aluno.data_matricula}</p>
        </div>
    );
}

export default AlunoInfo;
