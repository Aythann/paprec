const ro = {
  pageTitle: "Quiz de siguranță",
  readButton: "Citește pagina",
  validateButton: "Validează",
  retryButton: "Înapoi la regulile de siguranță",
  whyLabel: "De ce?",

  questions: {
    driver_exit_vehicle: {
      question: "Cine are voie să părăsească vehiculul?",
      choices: ["Oricine", "Doar șoferul", "Vizitatorii"],
      why: "Doar șoferul este autorizat să părăsească vehiculul.",
    },
    traffic_rules: {
      question: "Ce trebuie să respecte șoferii pe site?",
      choices: [
        "Sensul de circulație și limitele de viteză",
        "Doar regulile de parcare",
        "Nimic special",
      ],
      why: "Șoferii trebuie să respecte sensul de circulație și limitele de viteză.",
    },
    site_priority: {
      question: "Cine are prioritate pe site?",
      choices: ["Pietonii", "Utilajele și vehiculele site-ului", "Vizitatorii externi"],
      why: "Șoferii trebuie să acorde prioritate utilajelor și vehiculelor site-ului.",
    },
    ppe_mandatory: {
      question: "Echipamentele individuale de protecție sunt obligatorii pe site?",
      choices: ["Nu", "Doar pentru vizitatori", "Da"],
      why: "Purtarea echipamentelor individuale de protecție este obligatorie.",
    },
    mobile_ladders: {
      question: "Scările mobile sunt permise?",
      choices: ["Da", "Doar în exterior", "Nu"],
      why: "Scările mobile sunt interzise.",
    },
    smoking_allowed: {
      question: "Fumatul este permis pe site?",
      choices: ["Da", "Doar în exterior", "Nu"],
      why: "Fumatul și vapatul sunt interzise din cauza riscului de incendiu.",
    },
    running_allowed: {
      question: "Alergatul este permis pe site?",
      choices: ["Da", "Nu", "Doar în caz de urgență"],
      why: "Alergatul este interzis din motive de siguranță.",
    },
    alcohol_drugs: {
      question: "Alcoolul sau drogurile sunt permise pe site?",
      choices: ["Da", "Doar în pauze", "Nu"],
      why: "Alcoolul și drogurile sunt strict interzise.",
    },
    emergency_number: {
      question: "Ce număr de urgență poate fi apelat în Franța?",
      choices: ["118-218", "15 sau 112", "17"],
      why: "În Franța, 15 sau 112 pot fi apelate în caz de urgență.",
    },
    machine_distance: {
      question: "Ce trebuie să evite șoferii în apropierea utilajelor?",
      choices: [
        "Să se apropie prea mult de utilaje",
        "Să poarte EIP",
        "Să folosească oglinzile",
      ],
      why: "Șoferii trebuie să evite orice apropiere periculoasă de utilaje.",
    },
    tautliner_arrimage_equipment: {
      question: "Ce echipament trebuie folosit cu un tautliner?",
      choices: [
        "Echipament de fixare adecvat",
        "Doar o frânghie",
        "Niciun echipament dacă traseul este scurt",
      ],
      why: "Trebuie folosit echipament de fixare adecvat pentru securizarea încărcăturii.",
    },
    tautliner_no_trailer_climbing: {
      question: "Șoferul poate urca în semiremorcă în timpul încărcării?",
      choices: ["Da", "Cu autorizație", "Nu"],
      why: "Este interzisă urcarea în semiremorcă în timpul încărcării.",
    },
    tautliner_check_after_distance: {
      question: "Când trebuie verificată fixarea încărcăturii?",
      choices: [
        "Doar la sosire",
        "După câțiva kilometri",
        "Niciodată dacă încărcătura pare stabilă",
      ],
      why: "Fixarea încărcăturii trebuie verificată după câțiva kilometri.",
    },
    tailgate_platform_check: {
      question: "Ce trebuie verificat înainte de folosirea hayonului?",
      choices: [
        "Ca platforma să fie liberă și stabilă",
        "Doar ca motorul să fie oprit",
        "Ca ușile să fie deschise",
      ],
      why: "Zona hayonului trebuie să fie liberă și stabilă înainte de utilizare.",
    },
    tailgate_under_platform: {
      question: "Este permis să stai sub hayon?",
      choices: ["Da", "Nu", "Doar câteva secunde"],
      why: "Staționarea sub hayon este periculoasă și interzisă.",
    },
    tailgate_last_row: {
      question: "Ce parte a încărcăturii trebuie fixată obligatoriu?",
      choices: [
        "Ultimul rând",
        "Doar partea superioară a încărcăturii",
        "Nimic dacă ușile se închid",
      ],
      why: "Ultimul rând al încărcăturii trebuie fixat obligatoriu.",
    },
    ampliroll_clear_area: {
      question: "Ce trebuie verificat înainte de manipularea unei bene sau a unui container?",
      choices: [
        "Ca zona să fie liberă",
        "Ca un alt camion să fie aproape",
        "Ca șoferul să fie în container",
      ],
      why: "Zona de manevră trebuie să fie liberă înainte de orice operațiune.",
    },
    ampliroll_hook_only: {
      question: "Cum trebuie manipulată bena sau containerul?",
      choices: [
        "Cu lanțuri laterale",
        "Doar cu cârligul",
        "Împingând cu vehiculul",
      ],
      why: "Bena sau containerul trebuie manipulată numai cu cârligul.",
    },
    ampliroll_raised_container: {
      question: "Camionul poate circula cu bena ridicată?",
      choices: ["Da", "Nu", "Doar dacă este goală"],
      why: "Circulația cu bena ridicată este interzisă și periculoasă.",
    },
    multi_chains_wheel_chocks: {
      question: "Ce trebuie poziționat înainte de decuplare?",
      choices: [
        "Două cale în fața și în spatele unei roți",
        "O singură cală în spatele camionului",
        "Nicio cală dacă solul este plat",
      ],
      why: "Două cale trebuie poziționate în fața și în spatele unei roți.",
    },
    multi_chains_tension: {
      question: "Ce trebuie verificat la lanțuri?",
      choices: [
        "Să fie pe sol",
        "Să fie slăbite",
        "Să fie corect tensionate",
      ],
      why: "Lanțurile trebuie să fie corect tensionate pentru a securiza bena.",
    },
    multi_chains_safe_distance: {
      question: "Unde trebuie să stea persoanele în timpul operațiunilor?",
      choices: [
        "La o distanță de siguranță",
        "Sub încărcătură",
        "Între camion și benă",
      ],
      why: "Nimeni nu trebuie să stea sub sau aproape de o încărcătură în mișcare.",
    },
  },
};

export default ro;