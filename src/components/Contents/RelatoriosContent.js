import '../../css/ContentsCss/RelatoriosContent.css';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function RelatoriosContent() {
    const { user } = useContext(UserContext);
    const [alunoSelecionado, setAlunoSelecionado] = React.useState(""); // Estado para armazenar a matrícula selecionada
    const navigate = useNavigate();

    // Verifica se o usuário é válido
    if (!user || !user.Usuario) {
        return <div>Carregando informações...</div>;
    }

    // Filtra relatórios para alunos
    const proximasEntregas = user.Usuario.tipo_usuario === "Aluno"
        ? user.Relatorios.filter(relatorio => !relatorio.avaliado)
        : [];

    const relatoriosAvaliadosAlunos = user.Usuario.tipo_usuario === "Aluno"
        ? user.Relatorios.filter(relatorio => relatorio.avaliado)
        : [];

    // Filtra relatórios para docentes
    const relatoriosParaAvaliar = user.Usuario.tipo_usuario === "Docente"
    ? user.Relatorios.filter((relatorio) =>
        (!alunoSelecionado || relatorio.matricula === parseInt(alunoSelecionado)) &&
        user.Orientacao.some((orientacao) => orientacao.matricula === relatorio.matricula) &&
        !relatorio.avaliado
    )
    : [];

    const relatoriosAvaliadosDocentes = user.Usuario.tipo_usuario === "Docente"
    ? user.Relatorios.filter((relatorio) =>
        (!alunoSelecionado || relatorio.matricula === parseInt(alunoSelecionado)) &&
        user.Orientacao.some((orientacao) => orientacao.matricula === relatorio.matricula) &&
        relatorio.avaliado
    )
    : [];

    // Obtém o conceito do relatório
    const getConceito = (relatorioId) => {
        const avaliacao = user.Avaliacao.find(avaliacao => avaliacao.relatorio_id === relatorioId);
        return avaliacao ? avaliacao.conceito : "Pendente";
    };

    // Redireciona para o formulário com os dados necessários
    const handleFormularioClick = (formularioType, relatorioId) => {
        navigate('/formulario', { state: { formType: formularioType, relatorioID: relatorioId } });
    };

    return (
        <div className="Backgroung-relatorios">

            {/* Relatórios para Docentes */}
            {user.Usuario.tipo_usuario === "Docente" && (
                <div className="Relatorios-meus-relatorios-session">
                    <select id="filtro-aluno" onChange={(e) => setAlunoSelecionado(e.target.value)} defaultValue="">
                        <option value="">Todos os Alunos</option>
                        {user.Alunos.map((aluno) => (
                            <option key={aluno.matricula} value={aluno.matricula}>
                                {aluno.nome_completo}
                            </option>
                        ))}
                    </select>
                </div>
            )}
                        
            {/* Relatórios para Alunos */}
            {user.Usuario.tipo_usuario === "Aluno" && (
                <div className="Relatorios-proximas-entregas-session">
                    <h2 className="Relatorios-proximas-entregas-title">Próximas entregas</h2>
                    <table className="Relatorios-proximas-entregas-table">
                        <thead>
                            <tr>
                                <th>Relatório</th>
                                <th>Semestre</th>
                                <th>Data de Submissão</th>
                                <th>Status</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proximasEntregas.map((relatorio, index) => (
                                <tr key={index}>
                                    <td>{relatorio.id}</td>
                                    <td>{relatorio.semestre}</td>
                                    <td>{new Date(relatorio.data_submissao).toLocaleDateString()}</td>
                                    <td>{getConceito(relatorio.id)}</td>
                                    <td>
                                        <button onClick={() => handleFormularioClick('EnvioDeRelatorio', relatorio.id)}>
                                            Entregar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Relatórios para Docentes */}
            {user.Usuario.tipo_usuario === "Docente" && (
                <div className="Relatorios-meus-relatorios-session">
                    <h2 className="Relatorios-meus-relatorios-title">Relatórios para Avaliação</h2>
                    <table className="Relatorios-meus-relatorios-table">
                        <thead>
                            <tr>
                                <th>Relatório</th>
                                <th>Semestre</th>
                                <th>Data de Submissão</th>
                                <th>Conceito</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {relatoriosParaAvaliar.map((relatorio, index) => (
                                <tr key={index}>
                                    <td>{relatorio.id}</td>
                                    <td>{relatorio.semestre}</td>
                                    <td>{new Date(relatorio.data_submissao).toLocaleDateString()}</td>
                                    <td>{getConceito(relatorio.id)}</td>
                                    <td>
                                        <button onClick={() => handleFormularioClick('AvaliacaoDeRelatorio', relatorio.id)}>
                                            Avaliar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Relatórios Avaliados */}
            <div className="Relatorios-avaliados-session">
                <h2 className="Relatorios-avaliados-title">Relatórios Avaliados</h2>
                <table className="Relatorios-avaliados-table">
                    <thead>
                        <tr>
                            <th>Relatório</th>
                            <th>Semestre</th>
                            <th>Data de Submissão</th>
                            <th>Conceito</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(user.Usuario.tipo_usuario === "Aluno" ? relatoriosAvaliadosAlunos : relatoriosAvaliadosDocentes).map((relatorio, index) => (
                            <tr key={index}>
                                <td>{relatorio.id}</td>
                                <td>{relatorio.semestre}</td>
                                <td>{new Date(relatorio.data_submissao).toLocaleDateString()}</td>
                                <td>{getConceito(relatorio.id)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RelatoriosContent;
