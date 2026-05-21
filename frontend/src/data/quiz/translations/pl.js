const pl = {
  pageTitle: "Quiz bezpieczeństwa",
  readButton: "Przeczytaj stronę",
  validateButton: "Zatwierdź",
  retryButton: "Powrót do zasad bezpieczeństwa",
  whyLabel: "Dlaczego?",

  questions: {
    driver_exit_vehicle: {
      question: "Kto może opuścić pojazd?",
      choices: ["Każdy", "Tylko kierowca", "Goście"],
      why: "Tylko kierowca jest upoważniony do opuszczenia pojazdu.",
    },
    traffic_rules: {
      question: "Czego muszą przestrzegać kierowcy na terenie zakładu?",
      choices: [
        "Kierunku ruchu i ograniczeń prędkości",
        "Tylko zasad parkowania",
        "Nic szczególnego",
      ],
      why: "Kierowcy muszą przestrzegać kierunku ruchu i ograniczeń prędkości.",
    },
    site_priority: {
      question: "Kto ma pierwszeństwo na terenie zakładu?",
      choices: ["Piesi", "Maszyny i pojazdy zakładowe", "Goście zewnętrzni"],
      why: "Kierowcy muszą ustępować pierwszeństwa maszynom i pojazdom zakładowym.",
    },
    ppe_mandatory: {
      question: "Czy środki ochrony indywidualnej są obowiązkowe na terenie zakładu?",
      choices: ["Nie", "Tylko dla gości", "Tak"],
      why: "Noszenie środków ochrony indywidualnej jest obowiązkowe.",
    },
    mobile_ladders: {
      question: "Czy drabiny mobilne są dozwolone?",
      choices: ["Tak", "Tylko na zewnątrz", "Nie"],
      why: "Drabiny mobilne są zabronione.",
    },
    smoking_allowed: {
      question: "Czy palenie jest dozwolone na terenie zakładu?",
      choices: ["Tak", "Tylko na zewnątrz", "Nie"],
      why: "Palenie i używanie e-papierosów są zabronione ze względu na ryzyko pożaru.",
    },
    running_allowed: {
      question: "Czy bieganie jest dozwolone na terenie zakładu?",
      choices: ["Tak", "Nie", "Tylko w sytuacji awaryjnej"],
      why: "Bieganie jest zabronione ze względów bezpieczeństwa.",
    },
    alcohol_drugs: {
      question: "Czy alkohol lub narkotyki są dozwolone na terenie zakładu?",
      choices: ["Tak", "Tylko podczas przerw", "Nie"],
      why: "Alkohol i narkotyki są surowo zabronione.",
    },
    emergency_number: {
      question: "Jaki numer alarmowy można wybrać we Francji?",
      choices: ["118-218", "15 lub 112", "17"],
      why: "We Francji w nagłych wypadkach można dzwonić pod numer 15 lub 112.",
    },
    machine_distance: {
      question: "Czego powinni unikać kierowcy w pobliżu maszyn?",
      choices: [
        "Zbliżania się zbyt blisko do maszyn",
        "Noszenia środków ochrony",
        "Używania lusterek",
      ],
      why: "Kierowcy muszą unikać niebezpiecznej bliskości maszyn.",
    },
    tautliner_arrimage_equipment: {
      question: "Jakiego sprzętu należy używać w tautlinerze?",
      choices: [
        "Odpowiedniego sprzętu do zabezpieczania ładunku",
        "Tylko liny",
        "Żadnego sprzętu, jeśli trasa jest krótka",
      ],
      why: "Do zabezpieczenia ładunku należy używać odpowiedniego sprzętu.",
    },
    tautliner_no_trailer_climbing: {
      question: "Czy kierowca może wejść do naczepy podczas załadunku?",
      choices: ["Tak", "Za zgodą", "Nie"],
      why: "Wchodzenie do naczepy podczas załadunku jest zabronione.",
    },
    tautliner_check_after_distance: {
      question: "Kiedy należy sprawdzić zabezpieczenie ładunku?",
      choices: [
        "Tylko po przyjeździe",
        "Po kilku kilometrach",
        "Nigdy, jeśli ładunek wygląda stabilnie",
      ],
      why: "Zabezpieczenie ładunku należy sprawdzić po kilku kilometrach.",
    },
    tailgate_platform_check: {
      question: "Co należy sprawdzić przed użyciem windy załadowczej?",
      choices: [
        "Czy platforma jest wolna i stabilna",
        "Tylko czy silnik jest wyłączony",
        "Czy drzwi są otwarte",
      ],
      why: "Obszar windy załadowczej musi być wolny i stabilny przed użyciem.",
    },
    tailgate_under_platform: {
      question: "Czy można stać pod windą załadowczą?",
      choices: ["Tak", "Nie", "Tylko przez kilka sekund"],
      why: "Stanie pod windą załadowczą jest niebezpieczne i zabronione.",
    },
    tailgate_last_row: {
      question: "Która część ładunku musi być obowiązkowo zabezpieczona?",
      choices: [
        "Ostatni rząd",
        "Tylko górna część ładunku",
        "Żadna, jeśli drzwi się zamykają",
      ],
      why: "Ostatni rząd ładunku musi być obowiązkowo zabezpieczony.",
    },
    ampliroll_clear_area: {
      question: "Co należy sprawdzić przed obsługą kontenera lub muldy?",
      choices: [
        "Czy obszar jest wolny",
        "Czy inny ciężarowy pojazd jest blisko",
        "Czy kierowca jest w kontenerze",
      ],
      why: "Obszar manewrowy musi być wolny przed każdą operacją.",
    },
    ampliroll_hook_only: {
      question: "Jak należy obsługiwać kontener lub muldę?",
      choices: [
        "Za pomocą bocznych łańcuchów",
        "Wyłącznie za pomocą haka",
        "Popychając pojazdem",
      ],
      why: "Kontener lub muldę należy obsługiwać wyłącznie za pomocą haka.",
    },
    ampliroll_raised_container: {
      question: "Czy ciężarówka może jechać z podniesioną muldą?",
      choices: ["Tak", "Nie", "Tylko jeśli jest pusta"],
      why: "Jazda z podniesioną muldą jest zabroniona i niebezpieczna.",
    },
    multi_chains_wheel_chocks: {
      question: "Co należy ustawić przed odłączeniem?",
      choices: [
        "Dwa kliny przed i za jednym kołem",
        "Jeden klin za ciężarówką",
        "Żadnego klina, jeśli podłoże jest płaskie",
      ],
      why: "Dwa kliny muszą być ustawione przed i za jednym kołem.",
    },
    multi_chains_tension: {
      question: "Co należy sprawdzić na łańcuchach?",
      choices: [
        "Czy leżą na ziemi",
        "Czy są luźne",
        "Czy są prawidłowo napięte",
      ],
      why: "Łańcuchy muszą być prawidłowo napięte, aby zabezpieczyć muldę.",
    },
    multi_chains_safe_distance: {
      question: "Gdzie powinny znajdować się osoby podczas operacji?",
      choices: [
        "W bezpiecznej odległości",
        "Pod ładunkiem",
        "Między ciężarówką a muldą",
      ],
      why: "Nikt nie może znajdować się pod ani w pobliżu poruszającego się ładunku.",
    },
  },
};

export default pl;