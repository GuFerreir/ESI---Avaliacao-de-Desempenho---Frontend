import '../../css/ContentsCss/RelatoriosContent.css';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function RelatoriosContent() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    // Filtrar os relatórios para exibir apenas os pendentes e os avaliados
    const proximasEntregas = user.Usuario.tipo_usuario === "Aluno"
        ? user.Relatorio.filter(relatorio => !user.Avaliacao.some(avaliacao => avaliacao.relatorio_id === relatorio.id))
        : [];

    const relatoriosParaAvaliar = user.Usuario.tipo_usuario === "Docente"
        ? user.Relatorio.filter(relatorio => !user.Avaliacao.some(avaliacao => avaliacao.relatorio_id === relatorio.id))
        : [];

    const relatoriosAvaliados = user.Relatorio.filter(relatorio =>
        user.Avaliacao.some(avaliacao => avaliacao.relatorio_id === relatorio.id)
    );

    // Função para obter o conceito do relatório
    const getConceito = (relatorioId) => {
        const avaliacao = user.Avaliacao.find(avaliacao => avaliacao.relatorio_id === relatorioId);
        return avaliacao ? avaliacao.conceito : "Pendente";
    };

    // Função para redirecionar para o formulário de entrega ou avaliação com o tipo de formulário e relatorioId
    const handleFormularioClick = (formularioType, relatorioId) => {
        navigate('/formulario', { state: { formularioType, relatorioId } });
    };

    return (
        <div className="Backgroung-relatorios">
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
                                            onClick={() => handleFormularioClick('entrega', relatorio.id)}
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
                                            onClick={() => handleFormularioClick('avaliacao', relatorio.id)}
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

            {/* Parte 3: Relatórios Avaliados (Visível para ambos os tipos de usuários) */}
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
                        {relatoriosAvaliados.map((relatorio, index) => (
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
        </div>
    );
}

export default RelatoriosContent;
