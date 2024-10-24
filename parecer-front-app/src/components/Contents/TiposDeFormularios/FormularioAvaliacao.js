import React, { useState } from 'react';
import '../../../css/ContentsCss/Formularios.css';

const FormularioAvaliacao = () => {
  const [formData, setFormData] = useState({
    nomeParecerista: 'Informação obtida via API',
    papelParecerista: 'Informação obtida via API',
    nomeAluno: 'Informação obtida via API',
    parecerDesempenho: '',  // Campo 4 editável
    avaliacaoDesempenho: ''  // Campo 5 editável
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para envio do formulário
    console.log('Dados do formulário:', formData);
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
            onChange={handleChange}
          />
          <label htmlFor="adequado">Adequado</label><br />
          <input
            type="radio"
            id="adequadoRessalvas"
            name="avaliacaoDesempenho"
            value="adequado-com-ressalvas"
            onChange={handleChange}
          />
          <label htmlFor="adequadoRessalvas">Adequado com ressalvas</label><br />
          <input
            type="radio"
            id="insatisfatorio"
            name="avaliacaoDesempenho"
            value="insatisfatorio"
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
