const de = {
  pageTitle: "Sicherheitsquiz",
  readButton: "Seite vorlesen",
  validateButton: "Bestätigen",
  retryButton: "Zurück zu den Sicherheitsregeln",
  whyLabel: "Warum?",

  questions: {
    driver_exit_vehicle: {
      question: "Wer darf das Fahrzeug verlassen?",
      choices: ["Jeder", "Nur der Fahrer", "Besucher"],
      why: "Nur der Fahrer ist berechtigt, das Fahrzeug zu verlassen.",
    },
    traffic_rules: {
      question: "Was müssen Fahrer auf dem Gelände beachten?",
      choices: [
        "Fahrtrichtung und Geschwindigkeitsbegrenzungen",
        "Nur Parkregeln",
        "Nichts Besonderes",
      ],
      why: "Fahrer müssen die Fahrtrichtung und die Geschwindigkeitsbegrenzungen beachten.",
    },
    site_priority: {
      question: "Wer hat auf dem Gelände Vorrang?",
      choices: ["Fußgänger", "Maschinen und Fahrzeuge des Standorts", "Externe Besucher"],
      why: "Fahrer müssen Maschinen und Fahrzeugen des Standorts Vorrang gewähren.",
    },
    ppe_mandatory: {
      question: "Ist persönliche Schutzausrüstung auf dem Gelände Pflicht?",
      choices: ["Nein", "Nur für Besucher", "Ja"],
      why: "Das Tragen persönlicher Schutzausrüstung ist Pflicht.",
    },
    mobile_ladders: {
      question: "Sind mobile Leitern erlaubt?",
      choices: ["Ja", "Nur draußen", "Nein"],
      why: "Mobile Leitern sind verboten.",
    },
    smoking_allowed: {
      question: "Ist Rauchen auf dem Gelände erlaubt?",
      choices: ["Ja", "Nur draußen", "Nein"],
      why: "Rauchen und Dampfen sind wegen Brandgefahr verboten.",
    },
    running_allowed: {
      question: "Ist Rennen auf dem Gelände erlaubt?",
      choices: ["Ja", "Nein", "Nur im Notfall"],
      why: "Rennen ist aus Sicherheitsgründen verboten.",
    },
    alcohol_drugs: {
      question: "Sind Alkohol oder Drogen auf dem Gelände erlaubt?",
      choices: ["Ja", "Nur in Pausen", "Nein"],
      why: "Alkohol und Drogen sind streng verboten.",
    },
    emergency_number: {
      question: "Welche Notrufnummer kann in Frankreich angerufen werden?",
      choices: ["118-218", "15 oder 112", "17"],
      why: "In Frankreich können im Notfall die 15 oder 112 angerufen werden.",
    },
    machine_distance: {
      question: "Was müssen Fahrer in der Nähe von Maschinen vermeiden?",
      choices: [
        "Maschinen zu nahe kommen",
        "PSA tragen",
        "Spiegel benutzen",
      ],
      why: "Fahrer müssen gefährliche Nähe zu Maschinen vermeiden.",
    },
    tautliner_arrimage_equipment: {
      question: "Welche Ausrüstung muss bei einem Tautliner verwendet werden?",
      choices: [
        "Geeignete Ladungssicherungsausrüstung",
        "Nur ein Seil",
        "Keine Ausrüstung bei kurzer Strecke",
      ],
      why: "Geeignete Ladungssicherungsausrüstung muss verwendet werden, um die Ladung zu sichern.",
    },
    tautliner_no_trailer_climbing: {
      question: "Darf der Fahrer während des Beladens in den Auflieger steigen?",
      choices: ["Ja", "Mit Erlaubnis", "Nein"],
      why: "Das Betreten des Aufliegers während des Beladens ist verboten.",
    },
    tautliner_check_after_distance: {
      question: "Wann muss die Ladungssicherung überprüft werden?",
      choices: [
        "Nur bei Ankunft",
        "Nach einigen Kilometern",
        "Nie, wenn die Ladung stabil wirkt",
      ],
      why: "Die Ladungssicherung muss nach einigen Kilometern überprüft werden.",
    },
    tailgate_platform_check: {
      question: "Was muss vor der Nutzung der Ladebordwand geprüft werden?",
      choices: [
        "Dass die Plattform frei und stabil ist",
        "Nur dass der Motor ausgeschaltet ist",
        "Dass die Türen offen sind",
      ],
      why: "Der Bereich der Ladebordwand muss vor der Nutzung frei und stabil sein.",
    },
    tailgate_under_platform: {
      question: "Darf man sich unter der Ladebordwand aufhalten?",
      choices: ["Ja", "Nein", "Nur für ein paar Sekunden"],
      why: "Der Aufenthalt unter der Ladebordwand ist gefährlich und verboten.",
    },
    tailgate_last_row: {
      question: "Welcher Teil der Ladung muss gesichert werden?",
      choices: [
        "Die letzte Reihe",
        "Nur der obere Teil der Ladung",
        "Keiner, wenn die Türen schließen",
      ],
      why: "Die letzte Reihe der Ladung muss gesichert werden.",
    },
    ampliroll_clear_area: {
      question: "Was muss vor dem Bewegen einer Mulde oder eines Containers geprüft werden?",
      choices: [
        "Dass der Bereich frei ist",
        "Dass ein anderer Lkw in der Nähe ist",
        "Dass der Fahrer im Container ist",
      ],
      why: "Der Manövrierbereich muss vor jeder Bedienung frei sein.",
    },
    ampliroll_hook_only: {
      question: "Wie muss die Mulde oder der Container bewegt werden?",
      choices: [
        "Mit seitlichen Ketten",
        "Nur mit dem Haken",
        "Durch Schieben mit dem Fahrzeug",
      ],
      why: "Die Mulde oder der Container darf nur mit dem Haken bewegt werden.",
    },
    ampliroll_raised_container: {
      question: "Darf der Lkw mit angehobener Mulde fahren?",
      choices: ["Ja", "Nein", "Nur wenn sie leer ist"],
      why: "Fahren mit angehobener Mulde ist verboten und gefährlich.",
    },
    multi_chains_wheel_chocks: {
      question: "Was muss vor dem Abkuppeln positioniert werden?",
      choices: [
        "Zwei Unterlegkeile vor und hinter einem Rad",
        "Ein einzelner Keil hinter dem Lkw",
        "Kein Keil, wenn der Boden eben ist",
      ],
      why: "Zwei Unterlegkeile müssen vor und hinter einem Rad positioniert werden.",
    },
    multi_chains_tension: {
      question: "Was muss an den Ketten geprüft werden?",
      choices: [
        "Dass sie auf dem Boden liegen",
        "Dass sie locker sind",
        "Dass sie richtig gespannt sind",
      ],
      why: "Die Ketten müssen richtig gespannt sein, um die Mulde zu sichern.",
    },
    multi_chains_safe_distance: {
      question: "Wo müssen sich Personen während der Arbeiten aufhalten?",
      choices: [
        "In sicherem Abstand",
        "Unter der Last",
        "Zwischen Lkw und Mulde",
      ],
      why: "Niemand darf sich unter oder nahe einer bewegten Last aufhalten.",
    },
  },
};

export default de;