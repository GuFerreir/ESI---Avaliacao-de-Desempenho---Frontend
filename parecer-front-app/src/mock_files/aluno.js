const professorMock = {
  Usuario: {
    id: 1,
    nome_completo: "Gustavo Silva",
    email: "gustavo@universidade.com",
    senha: "hashed_password",
    tipo_usuario: "Aluno"
  },
  Docente: {
    usuario_id: 1,
    numero_alunos_orientados: 0
  },
  Aluno: {
    usuario_id: 1,
    matricula: "2023200401",
    data_nascimento: "1995-08-15",
    rg: "123456789",
    local_nascimento: "São Paulo, SP",
    nacionalidade: "Brasileiro",
    curso: "Mestrado",
    link_lattes: "http://lattes.cnpq.br/1234567890",
    data_matricula: "2023-03-01",
    data_aprov_exame_qualif: "2023-12-15",
    data_aprov_exame_proficiencia: "2023-10-20",
    data_limite_trabalho_final: "2025-03-01",
    disciplinas_cursadas_aprovadas: [
      {
        disciplina_id: 1,
        nome_disciplina: "Estatística Avançada",
        descricao: "Estudo de estatísticas aplicadas em projetos de pesquisa.",
        status: "Aprovado"
      },
      {
        disciplina_id: 2,
        nome_disciplina: "Metodologia de Pesquisa",
        descricao: "Curso sobre métodos e práticas de pesquisa científica.",
        status: "Aprovado"
      }
    ],
    disciplinas_cursadas_reprovadas: [
      {
        disciplina_id: 3,
        nome_disciplina: "Modelagem de Dados",
        descricao: "Curso sobre técnicas de modelagem de banco de dados.",
        status: "Reprovado"
      }
    ]
  },
  Disciplina: [
    { id: 1, nome_disciplina: "Inteligência Artificial", descricao: "Introdução aos conceitos de IA e aprendizado de máquina." },
    { id: 2, nome_disciplina: "Algoritmos Avançados", descricao: "Estudo de algoritmos e estruturas de dados complexas." },
    { id: 3, nome_disciplina: "Modelagem de Dados", descricao: "Curso sobre técnicas de modelagem de banco de dados." }
  ],
  Oferecimento: [
    { id: 1, docente_id: 2, disciplina_id: 1, vagas_total: 40, vagas_remanescentes: 5, periodo: "Matutino", semestre: "2023/1", sala: "Sala 201" },
    { id: 2, docente_id: 2, disciplina_id: 2, vagas_total: 30, vagas_remanescentes: 10, periodo: "Vespertino", semestre: "2023/2", sala: "Sala 305" },
    { id: 3, docente_id: 2, disciplina_id: 3, vagas_total: 30, vagas_remanescentes: 10, periodo: "Noturno", semestre: "2024/2", sala: "Sala 308" }
  ],
  Orientacao: [
    { id: 1, aluno_id: 1, docente_id: 2 },
    { id: 2, aluno_id: 1, docente_id: 2 }
  ],
  Relatorio: [
    // Relatórios para a disciplina 1: Inteligência Artificial
    { id: 1, disciplina_id: 1, orientacao_id: 1, data_submissao: "2023-06-01", arquivo_relatorio: "relatorio_ai_aluno1.pdf", semestre: "2023/1", reavaliacao: false },
    { id: 3, disciplina_id: 1, orientacao_id: 1, data_submissao: "2023-08-10", arquivo_relatorio: "relatorio_ai_avancado.pdf", semestre: "2023/2", reavaliacao: true },
    { id: 4, disciplina_id: 1, orientacao_id: 1, data_submissao: "2024-01-20", arquivo_relatorio: "relatorio_ai_final.pdf", semestre: "2024/1", reavaliacao: false },
    { id: 5, disciplina_id: 1, orientacao_id: 2, data_submissao: "2023-09-15", arquivo_relatorio: "relatorio_ai_parcial.pdf", semestre: "2023/2", reavaliacao: false },

    // Relatórios para a disciplina 2: Algoritmos Avançados
    { id: 2, disciplina_id: 2, orientacao_id: 2, data_submissao: "2023-09-01", arquivo_relatorio: "relatorio_algoritmos_aluno2.pdf", semestre: "2023/2", reavaliacao: false },
    { id: 6, disciplina_id: 2, orientacao_id: 2, data_submissao: "2023-11-20", arquivo_relatorio: "relatorio_algoritmos_analise.pdf", semestre: "2023/2", reavaliacao: true },
    { id: 7, disciplina_id: 2, orientacao_id: 2, data_submissao: "2024-04-05", arquivo_relatorio: "relatorio_algoritmos_final.pdf", semestre: "2024/1", reavaliacao: false },
    { id: 8, disciplina_id: 2, orientacao_id: 1, data_submissao: "2023-10-10", arquivo_relatorio: "relatorio_algoritmos_basico.pdf", semestre: "2023/2", reavaliacao: false },

    // Relatórios para a disciplina 3: Modelagem de Dados
    { id: 9, disciplina_id: 3, orientacao_id: 1, data_submissao: "2024-02-15", arquivo_relatorio: "relatorio_modelagem_introducao.pdf", semestre: "2024/1", reavaliacao: false },
    { id: 10, disciplina_id: 3, orientacao_id: 1, data_submissao: "2024-06-01", arquivo_relatorio: "relatorio_modelagem_parcial.pdf", semestre: "2024/2", reavaliacao: true },
    { id: 11, disciplina_id: 3, orientacao_id: 2, data_submissao: "2024-08-10", arquivo_relatorio: "relatorio_modelagem_final.pdf", semestre: "2024/2", reavaliacao: false },
    { id: 12, disciplina_id: 3, orientacao_id: 2, data_submissao: "2024-10-05", arquivo_relatorio: "relatorio_modelagem_avancado.pdf", semestre: "2024/2", reavaliacao: false }
  ],
  Avaliacao: [
    { id: 1, relatorio_id: 1, avaliador_id: 2, parecer: "Ótima apresentação dos conceitos.", conceito: "Adequado", data_avaliacao: "2023-06-15", tipo_avaliador: "Orientador" },
    { id: 2, relatorio_id: 3, avaliador_id: 2, parecer: "Análise detalhada, precisa melhorar.", conceito: "Adequado com Ressalvas", data_avaliacao: "2023-08-20", tipo_avaliador: "Orientador" },
    { id: 3, relatorio_id: 6, avaliador_id: 2, parecer: "Bom entendimento dos algoritmos avançados.", conceito: "Adequado", data_avaliacao: "2023-11-25", tipo_avaliador: "Comissão" },
    { id: 4, relatorio_id: 10, avaliador_id: 2, parecer: "Aprofundamento necessário.", conceito: "Insatisfatório", data_avaliacao: "2024-06-10", tipo_avaliador: "Orientador" }
  ]
};

export default professorMock;
