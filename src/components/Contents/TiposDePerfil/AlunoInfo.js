import React from 'react';

function AlunoInfo({ aluno }) {
    const alunoData = aluno.aluno;

    return (
        <div className="Aluno-Info">
            <h3>Informações do Aluno</h3>
            <p>Email: {alunoData.email}</p>
            <p>Matrícula: {alunoData.id_matricula}</p>
            <p>Curso: {alunoData.curso}</p>
            <p>Data de Matrícula: {alunoData.data_matricula}</p>
        </div>
    );
}

export default AlunoInfo;
