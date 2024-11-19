import React from 'react';

function ProfessorInfo({ professor }) {
    const alunosOrientados = professor.Alunos;

    return (
        <div className="Professor-Info">
            <h3>Informações do Professor</h3>
            <p>Número de Alunos Orientados: {alunosOrientados.length}</p>
            <h3>Orientados</h3>
            <table>
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Nome Completo</th>
                    </tr>
                </thead>
                <tbody>
                    {alunosOrientados.map((aluno, index) => (
                        <tr key={index}>
                            <td>{aluno.matricula}</td>
                            <td>{aluno.nome_completo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProfessorInfo;
