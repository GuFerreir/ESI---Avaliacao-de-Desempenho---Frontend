const alunoMock = {
  Usuario: {
    id: 1,
    nome_completo: "Carlos Eduardo Silva",
    email: "carlos.eduardo@universidade.com",
    senha: "hashed_password",
    tipo_usuario: "Aluno"
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
    {
      id: 1,
      nome_disciplina: "Estatística Avançada",
      descricao: "Estudo de estatísticas aplicadas em projetos de pesquisa."
    },
    {
      id: 2,
      nome_disciplina: "Metodologia de Pesquisa",
      descricao: "Curso sobre métodos e práticas de pesquisa científica."
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
      docente_id: 3,
      disciplina_id: 2,
      vagas_total: 30,
      vagas_remanescentes: 10,
      periodo: "Noturno",
      semestre: "2023/2",
      sala: "Sala 305"
    }
  ],
  Matricula: [
    {
      oferecimento_id: 1,
      aluno_id: 1,
      status: "Aprovado"
    },
    {
      oferecimento_id: 2,
      aluno_id: 1,
      status: "Reprovado"
    }
  ],
  Relatorio: [
    {
      id: 1,
      orientacao_id: 5,
      data_submissao: "2023-06-01",
      arquivo_relatorio: "relatorio_final_carlos_eduardo.pdf",
      semestre: "2023/1",
      reavaliacao: false
    },
    {
      id: 2,
      orientacao_id: 5,
      data_submissao: "2023-11-01",
      arquivo_relatorio: "relatorio_projeto_carlos_eduardo.pdf",
      semestre: "2023/2",
      reavaliacao: true
    },
    {
      id: 3,
      orientacao_id: 5,
      data_submissao: "2024-12-15", // Data futura para indicar pendência
      arquivo_relatorio: "relatorio_pendente_carlos_eduardo.pdf",
      semestre: "2023/2",
      reavaliacao: false
    }
  ],
  Avaliacao: [
    {
      id: 1,
      relatorio_id: 1,
      avaliador_id: 2,
      parecer: "Excelente desenvolvimento teórico, aprovado com louvor.",
      conceito: "Adequado",
      data_avaliacao: "2023-06-10",
      tipo_avaliador: "Orientador"
    },
    {
      id: 2,
      relatorio_id: 2,
      avaliador_id: 3,
      parecer: "Necessita aprofundamento em metodologia.",
      conceito: "Adequado com Ressalvas",
      data_avaliacao: "2023-11-25",
      tipo_avaliador: "Comissão"
    }
  ]
};

export default alunoMock;
