const alunoMock = {
  Usuario: {
    id: 1,
    nome_completo: "Gustavo Silva",
    email: "gustavo@universidade.com",
    senha: "hashed_password",
    tipo_usuario: "Aluno"
  },
  Aluno: {
    usuario_id: 1,
    matricula: 2023200401,
    data_nascimento: "1995-08-15",
    rg: "123456789",
    local_nascimento: "São Paulo, SP",
    nacionalidade: "Brasileiro",
    curso: "Mestrado",
    link_lattes: "http://lattes.cnpq.br/1234567890",
    data_matricula: "2023-03-01"
  },
  Relatorios: [
    // Relatórios para a disciplina 1: Inteligência Artificial
    { id: 1, aluno_id:1, data_submissao: "2023-06-01", semestre: "2023/1", avaliado: true },
    { id: 3, aluno_id:1, data_submissao: "2023-08-10", semestre: "2023/2", avaliado: true },
    { id: 4, aluno_id:1, data_submissao: "2024-01-20", semestre: "2024/1", avaliado: false },
    { id: 5, aluno_id:1, data_submissao: "2023-09-15", semestre: "2023/2", avaliado: false },

    // Relatórios para a disciplina 2: Algoritmos Avançados
    { id: 2, aluno_id:1, data_submissao: "2023-09-01", semestre: "2023/2", avaliado: false },
    { id: 6, aluno_id:1, data_submissao: "2023-11-20", semestre: "2023/2", avaliado: true },
    { id: 7, aluno_id:1, data_submissao: "2024-04-05", semestre: "2024/1", avaliado: false },
    { id: 8, aluno_id:1, data_submissao: "2023-10-10", semestre: "2023/2", avaliado: false },

    // Relatórios para a disciplina 3: Modelagem de Dados
    { id: 9, aluno_id:1, data_submissao: "2024-02-15", semestre: "2024/1", avaliado: false },
    { id: 10, aluno_id:1, data_submissao: "2024-06-01", semestre: "2024/2", avaliado: true },
    { id: 11, aluno_id:1, data_submissao: "2024-08-10", semestre: "2024/2", avaliado: false },
    { id: 12, aluno_id:1, data_submissao: "2024-10-05", semestre: "2024/2", avaliado: false }
  ],
  Avaliacao: [
    { id: 1, relatorio_id: 1, docente_id: 2, parecer: "Ótima apresentação dos conceitos.", conceito: "Adequado", data_avaliacao: "2023-06-15", tipo_avaliador: "Orientador" },
    { id: 2, relatorio_id: 3, docente_id: 2, parecer: "Análise detalhada, precisa melhorar.", conceito: "Adequado com Ressalvas", data_avaliacao: "2023-08-20", tipo_avaliador: "Orientador" },
    { id: 3, relatorio_id: 6, docente_id: 2, parecer: "Bom entendimento dos algoritmos avançados.", conceito: "Adequado", data_avaliacao: "2023-11-25", tipo_avaliador: "Orientador" },
    { id: 4, relatorio_id: 10, docente_id: 2, parecer: "Aprofundamento necessário.", conceito: "Insatisfatório", data_avaliacao: "2024-06-10", tipo_avaliador: "Orientador" }
  ]
};

export default alunoMock;
