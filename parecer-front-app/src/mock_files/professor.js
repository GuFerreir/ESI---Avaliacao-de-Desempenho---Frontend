const professorMock = {
    Usuario: {
      id: 2,
      nome_completo: "Mariana Oliveira",
      email: "mariana.oliveira@universidade.com",
      senha: "hashed_password",
      tipo_usuario: "Docente"
    },
    Docente: {
      usuario_id: 2,
      numero_alunos_orientados: 3
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
      }
    ],
    Orientacao: [
      {
        id: 1,
        aluno_id: 1,
        docente_id: 2
      },
      {
        id: 2,
        aluno_id: 3,
        docente_id: 2
      }
    ],
    Relatorio: [
      {
        id: 1,
        orientacao_id: 1,
        data_submissao: "2023-06-01",
        arquivo_relatorio: "relatorio_aluno1.pdf",
        semestre: "2023/1",
        reavaliacao: false
      },
      {
        id: 2,
        orientacao_id: 2,
        data_submissao: "2023-11-01",
        arquivo_relatorio: "relatorio_aluno3.pdf",
        semestre: "2023/2",
        reavaliacao: true
      },
      {
        id: 3,
        orientacao_id: 2,
        data_submissao: "2023-12-05",
        arquivo_relatorio: "relatorio_pendente_aluno3.pdf",
        semestre: "2023/2",
        reavaliacao: false // Pendente de avaliação
      }
    ],
    Avaliacao: [
      {
        id: 1,
        relatorio_id: 1,
        avaliador_id: 2,
        parecer: "Ótima apresentação dos conceitos, com sugestões de melhoria.",
        conceito: "Adequado",
        data_avaliacao: "2023-06-15",
        tipo_avaliador: "Orientador"
      },
      {
        id: 2,
        relatorio_id: 2,
        avaliador_id: 2,
        parecer: "Precisa melhorar a fundamentação teórica.",
        conceito: "Adequado com Ressalvas",
        data_avaliacao: "2023-11-20",
        tipo_avaliador: "Comissão"
      }
    ]
  };
  
  export default professorMock;
  