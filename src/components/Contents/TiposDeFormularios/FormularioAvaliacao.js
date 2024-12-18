import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import './FormularioAvaliacao.css';

const FormularioAvaliacao = ({ relatorioId }) => {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    nomeParecerista: '',
    papelParecerista: '',
    nomeAluno: '',
    parecerDesempenho: '',
    avaliacaoDesempenho: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

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
          throw new Error(`Erro HTTP: ${response.status}`);
        }
        const data = await response.json();

        setFormData({
          nomeParecerista: data.nomeParecerista,
          papelParecerista: data.papelParecerista,
          nomeAluno: data.nomeAluno,
          parecerDesempenho: '',
          avaliacaoDesempenho: '',
        });
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [relatorioId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      relatorioId: relatorioId,
      nomeParecerista: formData.nomeParecerista,
      papelParecerista: formData.papelParecerista,
      parecerDesempenho: formData.parecerDesempenho,
      avaliacaoDesempenho: formData.avaliacaoDesempenho,
    };

    try {
      const response = await fetch(`http://localhost:8000/api/formulario/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${user.token}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccessMessage('Formulário enviado com sucesso!');
        console.log('Formulário enviado com sucesso');
        setFormData({
          ...formData,
          parecerDesempenho: '',
          avaliacaoDesempenho: '',
        });
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        console.error('Erro ao enviar formulário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <div className="Background-avaliacao-relatorio">
      <div className="Avaliacao-relatorio-box-title">
        <h2 className="Avaliacao-relatorio-title">Formulário de Avaliação</h2>
      </div>

      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="Avaliacao-relatorio-box-form">
        <form onSubmit={handleSubmit}>
          <table className="form-table">
            <tbody>
              <tr>
                <td><label htmlFor="nomeParecerista">Nome do parecerista:</label></td>
                <td><input type="text" id="nomeParecerista" name="nomeParecerista" disabled value={formData.nomeParecerista} /></td>
              </tr>
              <tr>
                <td><label htmlFor="papelParecerista">Papel neste parecer:</label></td>
                <td><input type="text" id="papelParecerista" name="papelParecerista" disabled value={formData.papelParecerista} /></td>
              </tr>
              <tr>
                <td><label htmlFor="nomeAluno">Nome do aluno avaliado:</label></td>
                <td><input type="text" id="nomeAluno" name="nomeAluno" disabled value={formData.nomeAluno} /></td>
              </tr>
              <tr>
                <td><label htmlFor="parecerDesempenho">Parecer sobre o desempenho do aluno:</label></td>
                <td>
                  <textarea
                    id="parecerDesempenho"
                    name="parecerDesempenho"
                    rows="4"
                    cols="50"
                    value={formData.parecerDesempenho}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <label>Desempenho do aluno com base em seu parecer:</label><br />
                  <input
                    type="radio"
                    id="adequado"
                    name="avaliacaoDesempenho"
                    value="Adequado"
                    checked={formData.avaliacaoDesempenho === 'Adequado'}
                    onChange={handleChange}
                  />
                  <label htmlFor="adequado">Adequado</label><br />
                  <input
                    type="radio"
                    id="adequadoRessalvas"
                    name="avaliacaoDesempenho"
                    value="Adequado com Ressalvas"
                    checked={formData.avaliacaoDesempenho === 'Adequado com Ressalvas'}
                    onChange={handleChange}
                  />
                  <label htmlFor="adequadoRessalvas">Adequado com ressalvas</label><br />
                  <input
                    type="radio"
                    id="insatisfatorio"
                    name="avaliacaoDesempenho"
                    value="Insatisfatório"
                    checked={formData.avaliacaoDesempenho === 'Insatisfatório'}
                    onChange={handleChange}
                  />
                  <label htmlFor="insatisfatorio">Insatisfatório</label><br />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit">Enviar avaliação</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default FormularioAvaliacao;
