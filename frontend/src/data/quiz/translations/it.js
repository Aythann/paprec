const it = {
  pageTitle: "Quiz di sicurezza",
  readButton: "Leggi la pagina",
  validateButton: "Convalida",
  retryButton: "Torna alle regole di sicurezza",
  whyLabel: "Perché?",

  questions: {
    driver_exit_vehicle: {
      question: "Chi è autorizzato a uscire dal veicolo?",
      choices: ["Chiunque", "Solo il conducente", "I visitatori"],
      why: "Solo il conducente è autorizzato a uscire dal veicolo.",
    },
    traffic_rules: {
      question: "Cosa devono rispettare i conducenti nel sito?",
      choices: [
        "Il senso di circolazione e i limiti di velocità",
        "Solo le regole di parcheggio",
        "Niente di particolare",
      ],
      why: "I conducenti devono rispettare il senso di circolazione e i limiti di velocità.",
    },
    site_priority: {
      question: "Chi ha la precedenza nel sito?",
      choices: ["I pedoni", "Le macchine e i veicoli del sito", "I visitatori esterni"],
      why: "I conducenti devono dare la precedenza alle macchine e ai veicoli del sito.",
    },
    ppe_mandatory: {
      question: "I dispositivi di protezione individuale sono obbligatori nel sito?",
      choices: ["No", "Solo per i visitatori", "Sì"],
      why: "L’uso dei dispositivi di protezione individuale è obbligatorio.",
    },
    mobile_ladders: {
      question: "Le scale mobili sono autorizzate?",
      choices: ["Sì", "Solo all’esterno", "No"],
      why: "Le scale mobili sono vietate.",
    },
    smoking_allowed: {
      question: "È consentito fumare nel sito?",
      choices: ["Sì", "Solo all’esterno", "No"],
      why: "Fumare e svapare sono vietati a causa del rischio di incendio.",
    },
    running_allowed: {
      question: "È consentito correre nel sito?",
      choices: ["Sì", "No", "Solo in caso di emergenza"],
      why: "Correre è vietato per motivi di sicurezza.",
    },
    alcohol_drugs: {
      question: "Alcol o droghe sono consentiti nel sito?",
      choices: ["Sì", "Solo durante le pause", "No"],
      why: "Alcol e droghe sono severamente vietati.",
    },
    emergency_number: {
      question: "Quale numero di emergenza può essere chiamato in Francia?",
      choices: ["118-218", "15 o 112", "17"],
      why: "In Francia si possono chiamare il 15 o il 112 in caso di emergenza.",
    },
    machine_distance: {
      question: "Cosa devono evitare i conducenti vicino alle macchine?",
      choices: [
        "Avvicinarsi troppo alle macchine",
        "Indossare i DPI",
        "Usare gli specchietti",
      ],
      why: "I conducenti devono evitare qualsiasi vicinanza pericolosa alle macchine.",
    },
    tautliner_arrimage_equipment: {
      question: "Quale attrezzatura deve essere usata con un tautliner?",
      choices: [
        "Attrezzatura di fissaggio adeguata",
        "Solo una corda",
        "Nessuna attrezzatura se il tragitto è breve",
      ],
      why: "Deve essere usata un’attrezzatura di fissaggio adeguata per mettere in sicurezza il carico.",
    },
    tautliner_no_trailer_climbing: {
      question: "Il conducente può salire nel semirimorchio durante il carico?",
      choices: ["Sì", "Con autorizzazione", "No"],
      why: "È vietato salire nel semirimorchio durante il carico.",
    },
    tautliner_check_after_distance: {
      question: "Quando deve essere controllato il fissaggio del carico?",
      choices: [
        "Solo all’arrivo",
        "Dopo alcuni chilometri",
        "Mai se il carico sembra stabile",
      ],
      why: "Il fissaggio del carico deve essere controllato dopo alcuni chilometri.",
    },
    tailgate_platform_check: {
      question: "Cosa deve essere controllato prima di usare la sponda idraulica?",
      choices: [
        "Che la piattaforma sia libera e stabile",
        "Solo che il motore sia spento",
        "Che le porte siano aperte",
      ],
      why: "La zona della sponda idraulica deve essere libera e stabile prima dell’uso.",
    },
    tailgate_under_platform: {
      question: "È consentito stare sotto la sponda idraulica?",
      choices: ["Sì", "No", "Solo per pochi secondi"],
      why: "Stare sotto la sponda idraulica è pericoloso e vietato.",
    },
    tailgate_last_row: {
      question: "Quale parte del carico deve essere obbligatoriamente fissata?",
      choices: [
        "L’ultima fila",
        "Solo la parte superiore del carico",
        "Nessuna se le porte si chiudono",
      ],
      why: "L’ultima fila del carico deve essere obbligatoriamente fissata.",
    },
    ampliroll_clear_area: {
      question: "Cosa deve essere controllato prima di movimentare un cassone o container?",
      choices: [
        "Che l’area sia libera",
        "Che un altro camion sia vicino",
        "Che il conducente sia dentro il container",
      ],
      why: "L’area di manovra deve essere libera prima di qualsiasi operazione.",
    },
    ampliroll_hook_only: {
      question: "Come deve essere movimentato il cassone o container?",
      choices: [
        "Con catene laterali",
        "Solo tramite il gancio",
        "Spingendolo con il veicolo",
      ],
      why: "Il cassone o container deve essere movimentato solo tramite il gancio.",
    },
    ampliroll_raised_container: {
      question: "Il camion può circolare con il cassone sollevato?",
      choices: ["Sì", "No", "Solo se è vuoto"],
      why: "Circolare con il cassone sollevato è vietato e pericoloso.",
    },
    multi_chains_wheel_chocks: {
      question: "Cosa deve essere posizionato prima dello sgancio?",
      choices: [
        "Due cunei davanti e dietro una ruota",
        "Un solo cuneo dietro il camion",
        "Nessun cuneo se il terreno è piano",
      ],
      why: "Devono essere posizionati due cunei davanti e dietro una ruota.",
    },
    multi_chains_tension: {
      question: "Cosa deve essere controllato sulle catene?",
      choices: [
        "Che siano appoggiate a terra",
        "Che siano allentate",
        "Che siano correttamente tese",
      ],
      why: "Le catene devono essere correttamente tese per mettere in sicurezza il cassone.",
    },
    multi_chains_safe_distance: {
      question: "Dove devono posizionarsi le persone durante le operazioni?",
      choices: [
        "A distanza di sicurezza",
        "Sotto il carico",
        "Tra il camion e il cassone",
      ],
      why: "Nessuno deve posizionarsi sotto o vicino a un carico in movimento.",
    },
  },
};

export default it;