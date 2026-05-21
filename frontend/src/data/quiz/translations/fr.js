const fr = {
  pageTitle: "Quiz sécurité",
  readButton: "Lire la page",
  validateButton: "Valider",
  retryButton: "Retour aux règles de sécurité",
  whyLabel: "Pourquoi ?",

  questions: {
    driver_exit_vehicle: {
      question: "Qui est autorisé à sortir du véhicule ?",
      choices: ["Tout le monde", "Uniquement le chauffeur", "Les visiteurs"],
      why: "Seul le chauffeur est autorisé à sortir du véhicule.",
    },

    traffic_rules: {
      question: "Que doivent respecter les chauffeurs sur site ?",
      choices: [
        "Le sens de circulation et les limitations de vitesse",
        "Uniquement les règles de stationnement",
        "Rien de particulier",
      ],
      why: "Les chauffeurs doivent respecter le sens de circulation et les limitations de vitesse.",
    },

    site_priority: {
      question: "Qui est prioritaire sur site ?",
      choices: [
        "Les piétons",
        "Les engins et véhicules du site",
        "Les visiteurs",
      ],
      why: "Les chauffeurs doivent laisser la priorité aux engins et véhicules du site.",
    },

    ppe_mandatory: {
      question: "Les EPI sont-ils obligatoires sur site ?",
      choices: ["Non", "Uniquement pour les visiteurs", "Oui"],
      why: "Le port des équipements de protection individuelle est obligatoire.",
    },

    mobile_ladders: {
      question: "Les échelles mobiles sont-elles autorisées ?",
      choices: ["Oui", "Uniquement dehors", "Non"],
      why: "Les échelles mobiles sont interdites.",
    },

    smoking_allowed: {
      question: "Est-il autorisé de fumer sur site ?",
      choices: ["Oui", "Uniquement dehors", "Non"],
      why: "Fumer et vapoter sont interdits en raison du risque incendie.",
    },

    running_allowed: {
      question: "Est-il autorisé de courir sur site ?",
      choices: ["Oui", "Non", "Uniquement en urgence"],
      why: "Courir est interdit pour des raisons de sécurité.",
    },

    alcohol_drugs: {
      question: "L’alcool ou les drogues sont-ils autorisés sur site ?",
      choices: ["Oui", "Uniquement pendant les pauses", "Non"],
      why: "L’alcool et les drogues sont strictement interdits.",
    },

    emergency_number: {
      question: "Quel numéro peut être appelé en cas d’urgence en France ?",
      choices: ["118-218", "15 ou 112", "17"],
      why: "Le 15 ou le 112 peuvent être appelés en cas d’urgence en France.",
    },

    machine_distance: {
      question: "Que doit éviter le chauffeur près des engins ?",
      choices: [
        "S’approcher trop près des machines",
        "Porter ses EPI",
        "Utiliser ses rétroviseurs",
      ],
      why: "Le chauffeur doit éviter toute proximité dangereuse avec les engins.",
    },

    tautliner_arrimage_equipment: {
      question: "Quel matériel doit être utilisé en tautliner ?",
      choices: [
        "Un matériel d’arrimage adapté",
        "Uniquement une corde",
        "Aucun matériel si le trajet est court",
      ],
      why: "Un matériel d’arrimage adapté doit être utilisé pour sécuriser le chargement.",
    },

    tautliner_no_trailer_climbing: {
      question: "Peut-on monter dans la semi-remorque pendant le chargement ?",
      choices: ["Oui", "Avec autorisation", "Non"],
      why: "Il est interdit de monter dans la semi-remorque pendant le chargement.",
    },

    tautliner_check_after_distance: {
      question: "Quand faut-il vérifier l’arrimage ?",
      choices: [
        "Uniquement à l’arrivée",
        "Après quelques kilomètres",
        "Jamais si le chargement semble stable",
      ],
      why: "L’arrimage doit être vérifié après quelques kilomètres.",
    },

    tailgate_platform_check: {
      question: "Que faut-il vérifier avant d’utiliser le hayon ?",
      choices: [
        "Que la plateforme est dégagée et stable",
        "Uniquement que le moteur est coupé",
        "Que les portes sont ouvertes",
      ],
      why: "La zone du hayon doit être dégagée et stable avant utilisation.",
    },

    tailgate_under_platform: {
      question: "Peut-on se placer sous le hayon ?",
      choices: ["Oui", "Non", "Uniquement quelques secondes"],
      why: "Se placer sous le hayon est dangereux et interdit.",
    },

    tailgate_last_row: {
      question: "Quelle partie du chargement doit être obligatoirement arrimée ?",
      choices: [
        "La dernière rangée",
        "Uniquement le haut du chargement",
        "Aucune si les portes ferment",
      ],
      why: "La dernière rangée du chargement doit être obligatoirement arrimée.",
    },

    ampliroll_clear_area: {
      question: "Que faut-il vérifier avant de manipuler une benne ou un caisson ?",
      choices: [
        "Que la zone est dégagée",
        "Qu’un autre camion est proche",
        "Que le chauffeur est dans la benne",
      ],
      why: "La zone de manœuvre doit être dégagée avant toute manipulation.",
    },

    ampliroll_hook_only: {
      question: "Comment doit être manipulée la benne ou le caisson ?",
      choices: [
        "Par les chaînes latérales",
        "Uniquement par le crochet",
        "En poussant avec le véhicule",
      ],
      why: "La benne ou le caisson doit être manipulé uniquement par le crochet.",
    },

    ampliroll_raised_container: {
      question: "Le camion peut-il circuler avec la benne levée ?",
      choices: ["Oui", "Non", "Uniquement si elle est vide"],
      why: "Circuler avec une benne levée est interdit et dangereux.",
    },

    multi_chains_wheel_chocks: {
      question: "Que faut-il positionner avant le dételage ?",
      choices: [
        "Deux cales à l’avant et à l’arrière d’une roue",
        "Une seule cale derrière le camion",
        "Aucune cale si le sol est plat",
      ],
      why: "Deux cales doivent être positionnées à l’avant et à l’arrière d’une roue.",
    },

    multi_chains_tension: {
      question: "Que faut-il vérifier sur les chaînes ?",
      choices: [
        "Qu’elles soient posées au sol",
        "Qu’elles soient détendues",
        "Qu’elles soient correctement tendues",
      ],
      why: "Les chaînes doivent être correctement tendues pour sécuriser la benne.",
    },

    multi_chains_safe_distance: {
      question: "Où doivent se placer les personnes pendant les opérations ?",
      choices: [
        "À distance de sécurité",
        "Sous la charge",
        "Entre le camion et la benne",
      ],
      why: "Personne ne doit se placer sous ou près d’une charge en mouvement.",
    },
  },
};

export default fr;