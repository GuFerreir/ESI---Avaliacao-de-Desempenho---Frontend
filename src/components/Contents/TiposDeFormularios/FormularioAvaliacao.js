import React, { useState, useEffect } from 'react';
import '../../../css/ContentsCss/Formularios.css';

const FormularioAvaliacao = ({ alunoId, relatorioId }) => {
  const [formData, setFormData] = useState({
    nomeParecerista: '',
    papelParecerista: '',
    nomeAluno: '',
    parecerDesempenho: '',
    avaliacaoDesempenho: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/user/1`);
        const data = await response.json();
        setFormData({
          nomeParecerista: data.nomeParecerista,
          papelParecerista: data.papelParecerista,
          nomeAluno: data.nomeAluno,
          parecerDesempenho: '',
          avaliacaoDesempenho: ''
        });
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, [alunoId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      nomeParecerista: formData.nomeParecerista,
      papelParecerista: formData.papelParecerista,
      nomeAluno: formData.nomeAluno,
      parecerDesempenho: formData.parecerDesempenho,
      avaliacaoDesempenho: formData.avaliacaoDesempenho
    };

    try {
      const response = await fetch(`http://localhost:8000/api/avaliacao/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log('Avaliacao enviada com sucesso');
      } else {
        console.error('Erro ao enviar avaliacao:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <div className="Backgroung-avaliacao-relatorio">
      <div className="Avaliacao-relatorio-box-title">
        <h2 className="Avaliacao-relatorio-title">Formulário de Avaliação</h2>
      </div>

      <div className="Avaliacao-relatorio-box-form">
        <form onSubmit={handleSubmit}>
          {/* Campos desabilitados (dados trazidos via API) */}
          <label htmlFor="nomeParecerista">Nome do parecerista:</label>
          <input type="text" id="nomeParecerista" name="nomeParecerista" disabled value={formData.nomeParecerista} /><br /><br />

          <label htmlFor="papelParecerista">Papel neste parecer:</label>
          <input type="text" id="papelParecerista" name="papelParecerista" disabled value={formData.papelParecerista} /><br /><br />

          <label htmlFor="nomeAluno">Nome do aluno avaliado:</label>
          <input type="text" id="nomeAluno" name="nomeAluno" disabled value={formData.nomeAluno} /><br /><br />

          {/* Campos editáveis (questões 4 e 5) */}
          <label htmlFor="parecerDesempenho">Parecer sobre o desempenho do aluno:</label><br />
          <textarea
            id="parecerDesempenho"
            name="parecerDesempenho"
            rows="4"
            cols="50"
            value={formData.parecerDesempenho}
            onChange={handleChange}
          ></textarea><br /><br />

          <label htmlFor="avaliacaoDesempenho">Desempenho do aluno com base em seu parecer:</label><br />
          <input
            type="radio"
            id="adequado"
            name="avaliacaoDesempenho"
            value="adequado"
            checked={formData.avaliacaoDesempenho === 'adequado'}
            onChange={handleChange}
          />
          <label htmlFor="adequado">Adequado</label><br />
          <input
            type="radio"
            id="adequadoRessalvas"
            name="avaliacaoDesempenho"
            value="adequado-com-ressalvas"
            checked={formData.avaliacaoDesempenho === 'adequado-com-ressalvas'}
            onChange={handleChange}
          />
          <label htmlFor="adequadoRessalvas">Adequado com ressalvas</label><br />
          <input
            type="radio"
            id="insatisfatorio"
            name="avaliacaoDesempenho"
            value="insatisfatorio"
            checked={formData.avaliacaoDesempenho === 'insatisfatorio'}
            onChange={handleChange}
          />
          <label htmlFor="insatisfatorio">Insatisfatório</label><br /><br />

          <button type="submit">Enviar avaliação</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioAvaliacao;
