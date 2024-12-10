import React from 'react';

function ProfessorInfo({ professor }) {
    const alunosOrientados = professor.alunos || [];

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
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {alunosOrientados.map((aluno, index) => (
                        <tr key={index}>
                            <td>{aluno.id_matricula}</td>
                            <td>{aluno.nome_completo}</td>
                            <td>{aluno.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProfessorInfo;
