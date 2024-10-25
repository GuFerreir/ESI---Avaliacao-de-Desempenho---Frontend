const professorMock = {
  Usuario: {
    id: 2,
    nome_completo: "Marcelo Eler",
    email: "marcelo@universidade.com",
    senha: "hashed_password",
    tipo_usuario: "Docente"
  },
  Docente: {
    usuario_id: 2,
    numero_alunos_orientados: 10
  },
  Disciplina: [
    {
      id: 1,
      nome_disciplina: "Inteligência Artificial",
      descricao: "Introdução aos conceitos de IA e aprendizado de máquina."
    },
    {
      id: 2,
      nome_disciplina: "Algoritmos Avançados",
      descricao: "Estudo de algoritmos e estruturas de dados complexas."
    },
    {
      id: 3,
      nome_disciplina: "Modelagem de Dados",
      descricao: "Curso sobre técnicas de modelagem de banco de dados."
    }
  ],
  Oferecimento: [
    {
      id: 1,
      docente_id: 2,
      disciplina_id: 1,
      vagas_total: 40,
      vagas_remanescentes: 5,
      periodo: "Matutino",
      semestre: "2023/1",
      sala: "Sala 201"
    },
    {
      id: 2,
      docente_id: 2,
      disciplina_id: 2,
      vagas_total: 30,
      vagas_remanescentes: 10,
      periodo: "Vespertino",
      semestre: "2023/2",
      sala: "Sala 305"
    },
    {
      id: 3,
      docente_id: 2,
      disciplina_id: 3,
      vagas_total: 30,
      vagas_remanescentes: 10,
      periodo: "Noturno",
      semestre: "2024/2",
      sala: "Sala 308"
    }
  ],
  Orientacao: [
    { id: 1, aluno_id: 1, docente_id: 2 },
    { id: 2, aluno_id: 2, docente_id: 2 },
    { id: 3, aluno_id: 3, docente_id: 2 },
    { id: 4, aluno_id: 4, docente_id: 2 },
    { id: 5, aluno_id: 5, docente_id: 2 },
    { id: 6, aluno_id: 6, docente_id: 2 },
    { id: 7, aluno_id: 7, docente_id: 2 },
    { id: 8, aluno_id: 8, docente_id: 2 },
    { id: 9, aluno_id: 9, docente_id: 2 },
    { id: 10, aluno_id: 10, docente_id: 2 }
  ],
  Relatorio: [
    // Relatórios para alunos 1 a 5 em disciplinas diversas
    { id: 1, orientacao_id: 1, data_submissao: "2023-06-01", arquivo_relatorio: "relatorio_aluno1_ai.pdf", semestre: "2023/1", reavaliacao: false },
    { id: 2, orientacao_id: 2, data_submissao: "2023-09-01", arquivo_relatorio: "relatorio_aluno2_algoritmos.pdf", semestre: "2023/2", reavaliacao: false },
    { id: 3, orientacao_id: 3, data_submissao: "2023-12-05", arquivo_relatorio: "relatorio_aluno3_modelagem.pdf", semestre: "2023/2", reavaliacao: true },
    { id: 4, orientacao_id: 4, data_submissao: "2023-11-10", arquivo_relatorio: "relatorio_aluno4_ai.pdf", semestre: "2023/1", reavaliacao: false },
    { id: 5, orientacao_id: 5, data_submissao: "2024-03-15", arquivo_relatorio: "relatorio_aluno5_algoritmos.pdf", semestre: "2024/1", reavaliacao: false },

    // Relatórios para alunos 6 a 10
    { id: 6, orientacao_id: 6, data_submissao: "2023-06-20", arquivo_relatorio: "relatorio_aluno6_modelagem.pdf", semestre: "2023/1", reavaliacao: false },
    { id: 7, orientacao_id: 7, data_submissao: "2023-10-15", arquivo_relatorio: "relatorio_aluno7_ai.pdf", semestre: "2023/2", reavaliacao: true },
    { id: 8, orientacao_id: 8, data_submissao: "2024-01-10", arquivo_relatorio: "relatorio_aluno8_algoritmos.pdf", semestre: "2024/1", reavaliacao: false },
    { id: 9, orientacao_id: 9, data_submissao: "2024-05-20", arquivo_relatorio: "relatorio_aluno9_modelagem.pdf", semestre: "2024/2", reavaliacao: true },
    { id: 10, orientacao_id: 10, data_submissao: "2024-06-01", arquivo_relatorio: "relatorio_aluno10_ai.pdf", semestre: "2024/2", reavaliacao: false }
  ],
  Avaliacao: [
    { id: 1, relatorio_id: 1, avaliador_id: 2, parecer: "Ótima apresentação dos conceitos, com sugestões de melhoria.", conceito: "Adequado", data_avaliacao: "2023-06-15", tipo_avaliador: "Orientador" },
    { id: 2, relatorio_id: 3, avaliador_id: 2, parecer: "Precisa melhorar a fundamentação teórica.", conceito: "Adequado com Ressalvas", data_avaliacao: "2023-11-20", tipo_avaliador: "Comissão" },
    { id: 3, relatorio_id: 5, avaliador_id: 2, parecer: "Bom entendimento dos algoritmos avançados.", conceito: "Adequado", data_avaliacao: "2024-03-20", tipo_avaliador: "Orientador" },
    { id: 4, relatorio_id: 7, avaliador_id: 2, parecer: "Excelente análise de IA.", conceito: "Adequado", data_avaliacao: "2023-10-25", tipo_avaliador: "Orientador" },
    { id: 5, relatorio_id: 9, avaliador_id: 2, parecer: "Requer aprimoramento em modelagem de dados.", conceito: "Insatisfatório", data_avaliacao: "2024-05-25", tipo_avaliador: "Comissão" }
  ]
};

export default professorMock;
