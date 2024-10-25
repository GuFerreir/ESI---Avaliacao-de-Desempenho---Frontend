import React from 'react';

function ProfessorInfo({ professor }) {
    return (
        <div className="Professor-Info">
            <h3>Informações do Professor</h3>
            <p>Número de Alunos Orientados: {professor.Docente.numero_alunos_orientados}</p>

            <h4>Disciplinas Ministradas</h4>
            <ul>
                {professor.Disciplina.map((disciplina, index) => (
                    <li key={index}>
                        {disciplina.nome_disciplina} - {disciplina.descricao}
                    </li>
                ))}
            </ul>

            <h4>Oferecimentos</h4>
            <ul>
                {professor.Oferecimento.map((oferecimento, index) => (
                    <li key={index}>
                        Disciplina ID: {oferecimento.disciplina_id} - Período: {oferecimento.periodo} - Semestre: {oferecimento.semestre} - Sala: {oferecimento.sala}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProfessorInfo;
