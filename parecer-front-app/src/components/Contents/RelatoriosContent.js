import '../../css/ContentsCss/RelatoriosContent.css';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';

function RelatoriosContent() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Obtém o disciplinaId do estado de navegação
    const { disciplinaId } = location.state || {};

    // Busca a disciplina correspondente ao disciplinaId
    const disciplina = user.Disciplina.find(disc => disc.id === disciplinaId);

    // Filtra orientações para obter orientacao_id correspondente ao disciplinaId
    const orientacoes = user.Orientacao.filter(orientacao => {
        const oferecimento = user.Oferecimento.find(
            (of) => of.disciplina_id === disciplinaId && of.docente_id === user.Docente.usuario_id
        );
        return orientacao.docente_id === user.Usuario.id && oferecimento;
    });

    const orientacaoIds = orientacoes.map(orientacao => orientacao.id);

    // Filtra os relatórios associados à disciplina selecionada para Aluno e Docente
    const proximasEntregas = user.Usuario.tipo_usuario === "Aluno"
        ? user.Relatorio.filter(relatorio => 
            relatorio.disciplina_id === disciplinaId && 
            !user.Avaliacao.some(avaliacao => avaliacao.relatorio_id === relatorio.id)
        )
        : [];

    const relatoriosParaAvaliar = user.Usuario.tipo_usuario === "Docente"
        ? user.Relatorio.filter(relatorio => 
            orientacaoIds.includes(relatorio.orientacao_id) && 
            !user.Avaliacao.some(avaliacao => avaliacao.relatorio_id === relatorio.id)
        )
        : [];

    const relatoriosAvaliadosAlunos = user.Relatorio.filter(relatorio =>
        relatorio.disciplina_id === disciplinaId && 
        user.Avaliacao.some(avaliacao => avaliacao.relatorio_id === relatorio.id)
    );

    const relatoriosAvaliadosDocentes = user.Relatorio.filter(relatorio =>
        orientacaoIds.includes(relatorio.orientacao_id) && 
        user.Avaliacao.some(avaliacao => avaliacao.relatorio_id === relatorio.id)
    );

    // Função para obter o conceito do relatório
    const getConceito = (relatorioId) => {
        const avaliacao = user.Avaliacao.find(avaliacao => avaliacao.relatorio_id === relatorioId);
        return avaliacao ? avaliacao.conceito : "Pendente";
    };

    // Função para redirecionar para o formulário de entrega ou avaliação com o tipo de formulário e relatorioId
    const handleFormularioClick = (formularioType, relatorioId) => {
        navigate('/formulario', { state: { formType: formularioType, relatorioID: relatorioId } });
    };

    return (
        <div className="Backgroung-relatorios">
            <h3>Disciplina: {disciplina ? disciplina.nome_disciplina : "Disciplina não encontrada"}</h3>

            {/* Parte 1: Próximas Entregas (Alunos) */}
            {user.Usuario.tipo_usuario === "Aluno" && (
                <div className="Relatorios-proximas-entregas-session">
                    <div className="Relatorios-proximas-entregas-box-title">
                        <h2 className="Relatorios-proximas-entregas-title">Próximas entregas</h2>
                    </div>
                    <table className="Relatorios-proximas-entregas-table">
                        <thead className="Relatorios-proximas-entregas-thead">
                            <tr className="Relatorios-proximas-entregas-thead-tr">
                                <th>Relatório</th>
                                <th>Semestre</th>
                                <th>Vencimento</th>
                                <th>Status</th>
                                <th>Realizar Entrega</th>
                            </tr>
                        </thead>
                        <tbody className="Relatorios-proximas-entregas-tbody">
                            {proximasEntregas.map((relatorio, index) => (
                                <tr className="Relatorios-proximas-entregas-tbody-tr" key={index}>
                                    <td>{relatorio.id}</td>
                                    <td>{relatorio.semestre}</td>
                                    <td>{new Date(relatorio.data_submissao).toLocaleDateString()}</td>
                                    <td>{getConceito(relatorio.id)}</td>
                                    <td>
                                        <button 
                                            className="Relatorios-entrega-button"
                                            onClick={() => handleFormularioClick('EnvioDeRelatorio', relatorio.id)}
                                        >
                                            Entregar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Parte 2: Avaliação de Relatórios (Professores) */}
            {user.Usuario.tipo_usuario === "Docente" && (
                <div className="Relatorios-meus-relatorios-session">
                    <div className="Relatorios-meus-relatorios-box-title">
                        <h2 className="Relatorios-meus-relatorios-title">Relatórios para Avaliação</h2>
                    </div>
                    <table className="Relatorios-meus-relatorios-table">
                        <thead className="Relatorios-meus-relatorios-thead">
                            <tr className="Relatorios-meus-relatorios-thead-tr">
                                <th>Relatório</th>
                                <th>Semestre</th>
                                <th>Data de Submissão</th>
                                <th>Conceito</th>
                                <th>Avaliar</th>
                            </tr>
                        </thead>
                        <tbody className="Relatorios-meus-relatorios-tbody">
                            {relatoriosParaAvaliar.map((relatorio, index) => (
                                <tr className="Relatorios-meus-relatorios-tbody-tr" key={index}>
                                    <td>{relatorio.id}</td>
                                    <td>{relatorio.semestre}</td>
                                    <td>{new Date(relatorio.data_submissao).toLocaleDateString()}</td>
                                    <td>{getConceito(relatorio.id)}</td>
                                    <td>
                                        <button 
                                            className="Relatorios-avaliacao-button"
                                            onClick={() => handleFormularioClick('AvaliacaoDeRelatorio', relatorio.id)}
                                        >
                                            Avaliar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Parte 3: Relatórios Avaliados Docente */}
            {user.Usuario.tipo_usuario === "Docente" && (
                <div className="Relatorios-avaliados-session">
                    <div className="Relatorios-avaliados-box-title">
                        <h2 className="Relatorios-avaliados-title">Relatórios Avaliados</h2>
                    </div>
                    <table className="Relatorios-avaliados-table">
                        <thead className="Relatorios-avaliados-thead">
                            <tr className="Relatorios-avaliados-thead-tr">
                                <th>Relatório</th>
                                <th>Semestre</th>
                                <th>Data de Submissão</th>
                                <th>Conceito</th>
                            </tr>
                        </thead>
                        <tbody className="Relatorios-avaliados-tbody">
                            {relatoriosAvaliadosDocentes.map((relatorio, index) => (
                                <tr className="Relatorios-avaliados-tbody-tr" key={index}>
                                    <td>{relatorio.id}</td>
                                    <td>{relatorio.semestre}</td>
                                    <td>{new Date(relatorio.data_submissao).toLocaleDateString()}</td>
                                    <td>{getConceito(relatorio.id)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Parte 3: Relatórios Avaliados Docente */}
            {user.Usuario.tipo_usuario === "Aluno" && (
                <div className="Relatorios-avaliados-session">
                    <div className="Relatorios-avaliados-box-title">
                        <h2 className="Relatorios-avaliados-title">Relatórios Avaliados</h2>
                    </div>
                    <table className="Relatorios-avaliados-table">
                        <thead className="Relatorios-avaliados-thead">
                            <tr className="Relatorios-avaliados-thead-tr">
                                <th>Relatório</th>
                                <th>Semestre</th>
                                <th>Data de Submissão</th>
                                <th>Conceito</th>
                            </tr>
                        </thead>
                        <tbody className="Relatorios-avaliados-tbody">
                            {relatoriosAvaliadosAlunos.map((relatorio, index) => (
                                <tr className="Relatorios-avaliados-tbody-tr" key={index}>
                                    <td>{relatorio.id}</td>
                                    <td>{relatorio.semestre}</td>
                                    <td>{new Date(relatorio.data_submissao).toLocaleDateString()}</td>
                                    <td>{getConceito(relatorio.id)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default RelatoriosContent;