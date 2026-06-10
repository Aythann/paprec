const pt = {
  pageTitle: "Questionário de segurança",
  readButton: "Ler a página",
  validateButton: "Validar",
  retryButton: "Voltar às regras de segurança",
  whyLabel: "Porquê?",

  questions: {
    driver_exit_vehicle: {
      question: "Quem está autorizado a sair do veículo?",
      choices: ["Qualquer pessoa", "Apenas o condutor", "Visitantes"],
      why: "Apenas o condutor está autorizado a sair do veículo.",
    },
    traffic_rules: {
      question: "O que devem respeitar os condutores no local?",
      choices: [
        "O sentido de circulação e os limites de velocidade",
        "Apenas as regras de estacionamento",
        "Nada em particular",
      ],
      why: "Os condutores devem respeitar o sentido de circulação e os limites de velocidade.",
    },
    site_priority: {
      question: "Quem tem prioridade no local?",
      choices: ["Peões", "Máquinas e veículos do local", "Visitantes externos"],
      why: "Os condutores devem dar prioridade às máquinas e veículos do local.",
    },
    ppe_mandatory: {
      question: "Os equipamentos de proteção individual são obrigatórios no local?",
      choices: ["Não", "Apenas para visitantes", "Sim"],
      why: "O uso de equipamentos de proteção individual é obrigatório.",
    },
    mobile_ladders: {
      question: "As escadas móveis são permitidas?",
      choices: ["Sim", "Apenas no exterior", "Não"],
      why: "As escadas móveis são proibidas.",
    },
    smoking_allowed: {
      question: "É permitido fumar no local?",
      choices: ["Sim", "Apenas no exterior", "Não"],
      why: "Fumar e vaporizar são proibidos devido ao risco de incêndio.",
    },
    running_allowed: {
      question: "É permitido correr no local?",
      choices: ["Sim", "Não", "Apenas em emergência"],
      why: "Correr é proibido por razões de segurança.",
    },
    alcohol_drugs: {
      question: "Álcool ou drogas são permitidos no local?",
      choices: ["Sim", "Apenas durante as pausas", "Não"],
      why: "Álcool e drogas são estritamente proibidos.",
    },
    emergency_number: {
      question: "Que número de emergência pode ser chamado em França?",
      choices: ["118-218", "15 ou 112", "17"],
      why: "O 15 ou o 112 podem ser chamados em caso de emergência em França.",
    },
    machine_distance: {
      question: "O que devem evitar os condutores perto das máquinas?",
      choices: [
        "Aproximar-se demasiado das máquinas",
        "Usar EPI",
        "Utilizar os espelhos",
      ],
      why: "Os condutores devem evitar qualquer proximidade perigosa com as máquinas.",
    },
    tautliner_arrimage_equipment: {
      question: "Que equipamento deve ser usado com um tautliner?",
      choices: [
        "Equipamento de amarração adequado",
        "Apenas uma corda",
        "Nenhum equipamento se o trajeto for curto",
      ],
      why: "Deve ser usado equipamento de amarração adequado para proteger a carga.",
    },
    tautliner_no_trailer_climbing: {
      question: "O condutor pode subir ao reboque durante o carregamento?",
      choices: ["Sim", "Com autorização", "Não"],
      why: "É proibido subir ao reboque durante o carregamento.",
    },
    tautliner_check_after_distance: {
      question: "Quando deve ser verificada a amarração da carga?",
      choices: [
        "Apenas à chegada",
        "Após alguns quilómetros",
        "Nunca se a carga parecer estável",
      ],
      why: "A amarração da carga deve ser verificada após alguns quilómetros.",
    },
    tailgate_platform_check: {
      question: "O que deve ser verificado antes de usar a plataforma elevatória?",
      choices: [
        "Que a plataforma está livre e estável",
        "Apenas que o motor está desligado",
        "Que as portas estão abertas",
      ],
      why: "A zona da plataforma elevatória deve estar livre e estável antes da utilização.",
    },
    tailgate_under_platform: {
      question: "É permitido ficar debaixo da plataforma elevatória?",
      choices: ["Sim", "Não", "Apenas por alguns segundos"],
      why: "Ficar debaixo da plataforma elevatória é perigoso e proibido.",
    },
    tailgate_last_row: {
      question: "Que parte da carga deve ser obrigatoriamente amarrada?",
      choices: [
        "A última fila",
        "Apenas a parte superior da carga",
        "Nenhuma se as portas fecharem",
      ],
      why: "A última fila da carga deve ser obrigatoriamente amarrada.",
    },
    ampliroll_clear_area: {
      question: "O que deve ser verificado antes de manusear uma caçamba ou contentor?",
      choices: [
        "Que a zona está livre",
        "Que outro camião está próximo",
        "Que o condutor está dentro do contentor",
      ],
      why: "A zona de manobra deve estar livre antes de qualquer operação.",
    },
    ampliroll_hook_only: {
      question: "Como deve ser manuseada a caçamba ou o contentor?",
      choices: [
        "Com correntes laterais",
        "Apenas pelo gancho",
        "Empurrando com o veículo",
      ],
      why: "A caçamba ou o contentor deve ser manuseado apenas pelo gancho.",
    },
    ampliroll_raised_container: {
      question: "O camião pode circular com a caçamba levantada?",
      choices: ["Sim", "Não", "Apenas se estiver vazia"],
      why: "Circular com a caçamba levantada é proibido e perigoso.",
    },
    multi_chains_wheel_chocks: {
      question: "O que deve ser colocado antes do desengate?",
      choices: [
        "Dois calços à frente e atrás de uma roda",
        "Um único calço atrás do camião",
        "Nenhum calço se o solo for plano",
      ],
      why: "Devem ser colocados dois calços à frente e atrás de uma roda.",
    },
    multi_chains_tension: {
      question: "O que deve ser verificado nas correntes?",
      choices: [
        "Que estão no chão",
        "Que estão soltas",
        "Que estão corretamente tensionadas",
      ],
      why: "As correntes devem estar corretamente tensionadas para proteger a caçamba.",
    },
    multi_chains_safe_distance: {
      question: "Onde devem ficar as pessoas durante as operações?",
      choices: [
        "A uma distância de segurança",
        "Debaixo da carga",
        "Entre o camião e a caçamba",
      ],
      why: "Ninguém deve ficar debaixo ou perto de uma carga em movimento.",
    },
  },
};

export default pt;