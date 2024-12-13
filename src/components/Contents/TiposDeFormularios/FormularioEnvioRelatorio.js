import React, { useState, useEffect, useContext } from 'react';
import './FormularioEnvioRelatorio.css';
import { UserContext } from '../../../contexts/UserContext';

const FormularioEnvioRelatorio = ({ relatorioId }) => {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    nomeAluno: '',
    nomeOrientador: '',
    numeroUSP: '',
    lattesLink: '',
    lattesUpdate: '',
    curso: '',
    mesAnoIngresso: '',
    avaliacaoAnterior: '',
    qualificacao: '',
    prazoQualificacao: '',
    prazoDeposito: '',
    producaoArtigos: '',
    atividadesAcademicas: '',
    resumoAtividades: '',
    declaracaoAdicional: '',
    apoioCoordenacao: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/formulario/?relatorioId=${relatorioId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${user.token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar dados do relatório');
        }

        const data = await response.json();
        setFormData({
          email: data.email || '',
          nomeAluno: data.nomeAluno || '',
          nomeOrientador: data.nomeOrientador || '',
          numeroUSP: data.numeroUSP || '',
          lattesLink: data.lattesLink || '',
          lattesUpdate: data.lattesUpdate || '',
          curso: data.curso || '',
          mesAnoIngresso: data.mesAnoIngresso || '',
          avaliacaoAnterior: data.avaliacaoAnterior || '',
          qualificacao: '',
          prazoQualificacao: '',
          prazoDeposito: '',
          producaoArtigos: '',
          atividadesAcademicas: '',
          resumoAtividades: '',
          declaracaoAdicional: '',
          apoioCoordenacao: '',
        });
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    fetchData();
  }, [relatorioId, user.token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting relatorio with ID:', relatorioId);  // Debugging

    if (!relatorioId) {
      setErrorMessage('Relatório ID is missing');
      return;
    }

    try {
      const dataToSend = {
        ...formData,
        relatorioId: relatorioId,
      };

      const response = await fetch(`http://localhost:8000/api/relatorio/?relatorioId=${relatorioId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${user.token}`,
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setSuccessMessage('Relatório enviado com sucesso!');
        setErrorMessage('');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao enviar relatório');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage('');
    }
  };
  return (
    <div className="Backgroung-envio-relatorio">
      <div className="Envio-relatorio-box-title">
        <h2 className="Envio-relatorio-title">Próximas entregas</h2>
      </div>

      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="Envio-relatorio-box-form">
        <form onSubmit={handleSubmit}>
          {/* Informações desabilitadas (questões 1 a 8) */}
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" disabled value={formData.email} /><br /><br />

          <label htmlFor="nomeAluno">Nome do(a) aluno(a):</label>
          <input type="text" id="nomeAluno" name="nomeAluno" disabled value={formData.nomeAluno} /><br /><br />

          <label htmlFor="nomeOrientador">Nome do(a) orientador(a):</label>
          <input type="text" id="nomeOrientador" name="nomeOrientador" disabled value={formData.nomeOrientador} /><br /><br />

          <label htmlFor="numeroUSP">Número USP:</label>
          <input type="text" id="numeroUSP" name="numeroUSP" disabled value={formData.numeroUSP} /><br /><br />

          <label htmlFor="lattesLink">Link para o Lattes:</label>
          <input type="url" id="lattesLink" name="lattesLink" disabled value={formData.lattesLink} /><br /><br />

          <label htmlFor="lattesUpdate">Data da última atualização do Lattes:</label>
          <input type="date" id="lattesUpdate" name="lattesUpdate" disabled value={formData.lattesUpdate} /><br /><br />

          <label htmlFor="curso">Qual é o seu curso?</label>
          <select id="curso" name="curso" disabled value={formData.curso}>
            <option value="mestrado">Mestrado</option>
            <option value="doutorado">Doutorado</option>
          </select><br /><br />

          <label htmlFor="mesAnoIngresso">Informe o mês e o ano de seu ingresso:</label>
          <input type="text" id="mesAnoIngresso" name="mesAnoIngresso" disabled value={formData.mesAnoIngresso} /><br /><br />

          <label htmlFor="avaliacaoAnterior">Qual foi o resultado da avaliação do seu último relatório?</label>
          <select id="avaliacaoAnterior" name="avaliacaoAnterior" disabled value={formData.avaliacaoAnterior}>
            <option value="aprovado">Aprovado</option>
            <option value="aprovado-ressalvas">Aprovado com ressalvas</option>
            <option value="insatisfatorio">Insatisfatório</option>
            <option value="nao-aplicavel">Não se aplica (é o meu primeiro relatório)</option>
          </select><br /><br />

          {/* Informações habilitadas (questões 9 em diante) */}
          <label htmlFor="qualificacao">Já realizou o exame de qualificação?</label><br />
          <input type="radio" id="qualificacao-sim" name="qualificacao" value="sim" onChange={handleChange} />
          <label htmlFor="qualificacao-sim">Sim</label><br />
          <input type="radio" id="qualificacao-nao" name="qualificacao" value="nao" onChange={handleChange} />
          <label htmlFor="qualificacao-nao">Não</label><br /><br />

          <label htmlFor="prazoQualificacao">Se ainda não qualificou, qual é o seu prazo máximo para inscrição?</label>
          <input type="text" id="prazoQualificacao" name="prazoQualificacao" placeholder="Exemplo: novembro/2024" value={formData.prazoQualificacao} onChange={handleChange} /><br /><br />

          <label htmlFor="prazoDeposito">Qual é o seu prazo máximo para depósito da dissertação?</label>
          <input type="text" id="prazoDeposito" name="prazoDeposito" placeholder="Exemplo: janeiro/2025" value={formData.prazoDeposito} onChange={handleChange} /><br /><br />

          <label htmlFor="producaoArtigos">Referente à produção de artigos durante o curso:</label><br />
          <input type="radio" id="artigos-escrita" name="producaoArtigos" value="fase-escrita" onChange={handleChange} />
          <label htmlFor="artigos-escrita">Artigos em fase de escrita</label><br />
          <input type="radio" id="artigos-submetidos" name="producaoArtigos" value="submetidos" onChange={handleChange} />
          <label htmlFor="artigos-submetidos">Artigos submetidos e em avaliação</label><br />
          <input type="radio" id="artigos-publicados" name="producaoArtigos" value="aceitos-publicados" onChange={handleChange} />
          <label htmlFor="artigos-publicados">Artigos aceitos ou publicados</label><br /><br />

          <label htmlFor="atividadesAcademicas">Relate aqui as atividades ou eventos acadêmicos que você participou no 1º semestre de 2024:</label><br />
          <textarea id="atividadesAcademicas" name="atividadesAcademicas" rows="4" cols="50" value={formData.atividadesAcademicas} onChange={handleChange} placeholder="Congresso, visita técnica, intercâmbio, estágio PAE, etc."></textarea><br /><br />

          <label htmlFor="resumoAtividades">Apresente um resumo das suas atividades de pesquisa até o momento:</label><br />
          <textarea id="resumoAtividades" name="resumoAtividades" rows="4" cols="50" value={formData.resumoAtividades} onChange={handleChange}></textarea><br /><br />

          <label htmlFor="declaracaoAdicional">Você tem algo adicional a declarar para a CCP - PPgSI?</label><br />
          <textarea id="declaracaoAdicional" name="declaracaoAdicional" rows="4" cols="50" value={formData.declaracaoAdicional} onChange={handleChange}></textarea><br /><br />

          <label htmlFor="apoioCoordenacao">Está enfrentando alguma dificuldade que precisa de apoio da coordenação do curso?</label><br />
          <textarea id="apoioCoordenacao" name="apoioCoordenacao" rows="4" cols="50" value={formData.apoioCoordenacao} onChange={handleChange}></textarea><br /><br />

          <button type="submit">Enviar relatório</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioEnvioRelatorio;
