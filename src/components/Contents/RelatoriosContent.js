import '../../css/ContentsCss/RelatoriosContent.css';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function RelatoriosContent() {
    const { user } = useContext(UserContext);
    const [alunoSelecionado, setAlunoSelecionado] = useState("");
    const [relatorios, setRelatorios] = useState([]);
    const [alunos, setAlunos] = useState([]);
    const [orientacoes, setOrientacoes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchRelatorios = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/relatorio/', {
                    headers: { Authorization: `Token ${user.token}` },
                });
                const data = await response.json();
                setRelatorios(data);
            } catch (error) {
                console.error('Error fetching relatorios:', error);
            }
        };

        fetchRelatorios();
    }, [user]);

    useEffect(() => {
        if (user?.tipo === 'Orientador') {
            const fetchAlunos = async () => {
                try {
                    const response = await fetch('http://localhost:8000/api/orientador/alunos/', {
                        headers: { Authorization: `Token ${user.token}` },
                    });
                    const data = await response.json();
                    setAlunos(data.alunos);
                } catch (error) {
                    console.error('Error fetching alunos:', error);
                }
            };

            fetchAlunos();
        }
    }, [user]);

    useEffect(() => {
        if (user?.tipo === 'Orientador') {
            const fetchOrientacoes = async () => {
                try {
                    const response = await fetch('http://localhost:8000/api/orientador/orientacoes/', {
                        headers: { Authorization: `Token ${user.token}` },
                    });
                    const data = await response.json();
                    setOrientacoes(data);
                } catch (error) {
                    console.error('Error fetching orientacoes:', error);
                }
            };

            fetchOrientacoes();
        }
    }, [user]);

    if (!user) {
        return <div>Carregando informações...</div>;
    }

    const proximasEntregas = user?.tipo === "Aluno"
        ? relatorios.filter(relatorio => !relatorio.avaliado)
        : [];

    const relatoriosAvaliadosAlunos = user?.tipo === "Aluno"
        ? relatorios.filter(relatorio => relatorio.avaliado)
        : [];

    const relatoriosParaAvaliar = user?.tipo === "Orientador"
    ? relatorios.filter((relatorio) =>
        (!alunoSelecionado || relatorio.matricula.toString() === alunoSelecionado) &&
        orientacoes.some((orientacao) => orientacao.matricula === relatorio.matricula) &&
        !relatorio.avaliado
    )
    : [];

    const relatoriosAvaliadosOrientadores = user?.tipo === "Orientador"
        ? relatorios.filter((relatorio) =>
            (!alunoSelecionado || relatorio.matricula.toString() === alunoSelecionado) &&
            orientacoes.some((orientacao) => orientacao.matricula === relatorio.matricula) &&
            relatorio.avaliado
        )
        : [];

    const getConceito = (relatorioId) => {
        const relatorio = relatorios.find(r => r.id === relatorioId);
        return relatorio?.avaliacao?.conceito || "Pendente";
    };

    const handleFormularioClick = (formularioType, relatorioId) => {
        navigate('/formulario', { state: { formType: formularioType, relatorioID: relatorioId } });
    };

    return (
        <div className="Background-relatorios">
            {/* Filtrar alunos para orientadores */}
            {user?.tipo === "Orientador" && (
                <div className="Relatorios-meus-relatorios-session">
                    <select id="filtro-aluno" onChange={(e) => setAlunoSelecionado(e.target.value)} defaultValue="">
                        <option value="">Todos os Alunos</option>
                        {alunos.map((aluno) => (
                            <option key={aluno.id_matricula} value={aluno.id_matricula}>
                                {aluno.nome_completo}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Relatórios para alunos - Próximas entregas */}
            {user?.tipo === "Aluno" && (
                <div className="Relatorios-proximas-entregas-session">
                    <Card>
                        <CardContent>
                            <h2 className="Relatorios-proximas-entregas-title">Próximas Entregas</h2>
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
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Relatórios para orientadores - Avaliação pendente */}
            {user?.tipo === "Orientador" && (
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

            {/* Relatórios avaliados */}
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
                        {(user?.tipo === "Aluno" ? relatoriosAvaliadosAlunos : relatoriosAvaliadosOrientadores).map((relatorio, index) => (
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
