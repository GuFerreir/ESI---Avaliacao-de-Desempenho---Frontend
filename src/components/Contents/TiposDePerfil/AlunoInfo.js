import React from 'react';

function AlunoInfo({ aluno }) {
    return (
        <div className="Aluno-Info">
            <h3>Informações do Aluno</h3>
            <p>Matrícula: {aluno.Aluno.matricula}</p>
            <p>Curso: {aluno.Aluno.curso}</p>
            <p>Data de Matrícula: {aluno.Aluno.data_matricula}</p>
            <p>Data de Aprovação no Exame de Qualificação: {aluno.Aluno.data_aprov_exame_qualif}</p>
            <p>Data de Aprovação no Exame de Proficiência: {aluno.Aluno.data_aprov_exame_proficiencia}</p>

            <h4>Disciplinas Cursadas Aprovadas</h4>
            <ul>
                {aluno.Aluno.disciplinas_cursadas_aprovadas?.map((disciplina, index) => (
                    <li key={index}>
                        {disciplina.nome_disciplina} - {disciplina.descricao} (Status: {disciplina.status})
                    </li>
                ))}
            </ul>

            <h4>Disciplinas Cursadas Reprovadas</h4>
            <ul>
                {aluno.Aluno.disciplinas_cursadas_reprovadas?.map((disciplina, index) => (
                    <li key={index}>
                        {disciplina.nome_disciplina} - {disciplina.descricao} (Status: {disciplina.status})
                    </li>
                ))}
            </ul>

            <h4>Matrículas em Disciplinas</h4>
            <ul>
                {aluno.Matricula?.map((matricula, index) => {
                    const disciplina = aluno.Disciplina.find(d => d.id === matricula.oferecimento_id);
                    return (
                        <li key={index}>
                            Disciplina: {disciplina?.nome_disciplina || 'N/A'} - Status: {matricula.status}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default AlunoInfo;
