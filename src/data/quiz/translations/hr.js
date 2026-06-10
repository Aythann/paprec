const hr = {
  pageTitle: "Sigurnosni kviz",
  readButton: "Pročitaj stranicu",
  validateButton: "Potvrdi",
  retryButton: "Povratak na sigurnosna pravila",
  whyLabel: "Zašto?",

  questions: {
    driver_exit_vehicle: {
      question: "Tko smije izaći iz vozila?",
      choices: ["Bilo tko", "Samo vozač", "Posjetitelji"],
      why: "Samo vozač smije izaći iz vozila.",
    },
    traffic_rules: {
      question: "Što vozači moraju poštovati na lokaciji?",
      choices: [
        "Smjer kretanja i ograničenja brzine",
        "Samo pravila parkiranja",
        "Ništa posebno",
      ],
      why: "Vozači moraju poštovati smjer kretanja i ograničenja brzine.",
    },
    site_priority: {
      question: "Tko ima prednost na lokaciji?",
      choices: ["Pješaci", "Strojevi i vozila lokacije", "Vanjski posjetitelji"],
      why: "Vozači moraju dati prednost strojevima i vozilima lokacije.",
    },
    ppe_mandatory: {
      question: "Je li osobna zaštitna oprema obavezna na lokaciji?",
      choices: ["Ne", "Samo za posjetitelje", "Da"],
      why: "Nošenje osobne zaštitne opreme je obavezno.",
    },
    mobile_ladders: {
      question: "Jesu li pokretne ljestve dopuštene?",
      choices: ["Da", "Samo vani", "Ne"],
      why: "Pokretne ljestve su zabranjene.",
    },
    smoking_allowed: {
      question: "Je li pušenje dopušteno na lokaciji?",
      choices: ["Da", "Samo vani", "Ne"],
      why: "Pušenje i elektroničke cigarete zabranjeni su zbog opasnosti od požara.",
    },
    running_allowed: {
      question: "Je li trčanje dopušteno na lokaciji?",
      choices: ["Da", "Ne", "Samo u hitnom slučaju"],
      why: "Trčanje je zabranjeno iz sigurnosnih razloga.",
    },
    alcohol_drugs: {
      question: "Jesu li alkohol ili droge dopušteni na lokaciji?",
      choices: ["Da", "Samo tijekom pauza", "Ne"],
      why: "Alkohol i droge su strogo zabranjeni.",
    },
    emergency_number: {
      question: "Koji se hitni broj može nazvati u Francuskoj?",
      choices: ["118-218", "15 ili 112", "17"],
      why: "U Francuskoj se u hitnom slučaju mogu nazvati 15 ili 112.",
    },
    machine_distance: {
      question: "Što vozači moraju izbjegavati u blizini strojeva?",
      choices: [
        "Previše se približiti strojevima",
        "Nositi zaštitnu opremu",
        "Koristiti ogledala",
      ],
      why: "Vozači moraju izbjegavati opasnu blizinu strojeva.",
    },
    tautliner_arrimage_equipment: {
      question: "Koja se oprema mora koristiti s tautliner prikolicom?",
      choices: [
        "Odgovarajuća oprema za učvršćivanje tereta",
        "Samo uže",
        "Nikakva oprema ako je put kratak",
      ],
      why: "Za osiguranje tereta mora se koristiti odgovarajuća oprema za učvršćivanje.",
    },
    tautliner_no_trailer_climbing: {
      question: "Smije li se vozač popeti u prikolicu tijekom utovara?",
      choices: ["Da", "Uz dopuštenje", "Ne"],
      why: "Penjanje u prikolicu tijekom utovara je zabranjeno.",
    },
    tautliner_check_after_distance: {
      question: "Kada treba provjeriti učvršćenje tereta?",
      choices: [
        "Samo po dolasku",
        "Nakon nekoliko kilometara",
        "Nikada ako teret izgleda stabilno",
      ],
      why: "Učvršćenje tereta mora se provjeriti nakon nekoliko kilometara.",
    },
    tailgate_platform_check: {
      question: "Što treba provjeriti prije korištenja hidraulične rampe?",
      choices: [
        "Da je platforma slobodna i stabilna",
        "Samo da je motor ugašen",
        "Da su vrata otvorena",
      ],
      why: "Zona hidraulične rampe mora biti slobodna i stabilna prije korištenja.",
    },
    tailgate_under_platform: {
      question: "Smije li se stajati ispod hidraulične rampe?",
      choices: ["Da", "Ne", "Samo nekoliko sekundi"],
      why: "Stajanje ispod hidraulične rampe je opasno i zabranjeno.",
    },
    tailgate_last_row: {
      question: "Koji dio tereta mora biti obavezno učvršćen?",
      choices: [
        "Zadnji red",
        "Samo gornji dio tereta",
        "Ništa ako se vrata zatvaraju",
      ],
      why: "Zadnji red tereta mora biti obavezno učvršćen.",
    },
    ampliroll_clear_area: {
      question: "Što treba provjeriti prije rukovanja kontejnerom ili sandukom?",
      choices: [
        "Da je zona slobodna",
        "Da je drugi kamion u blizini",
        "Da je vozač u kontejneru",
      ],
      why: "Zona manevriranja mora biti slobodna prije svake operacije.",
    },
    ampliroll_hook_only: {
      question: "Kako se mora rukovati kontejnerom ili sandukom?",
      choices: [
        "Bočnim lancima",
        "Samo pomoću kuke",
        "Guranjem vozilom",
      ],
      why: "Kontejnerom ili sandukom mora se rukovati samo pomoću kuke.",
    },
    ampliroll_raised_container: {
      question: "Smije li kamion voziti s podignutim kontejnerom?",
      choices: ["Da", "Ne", "Samo ako je prazan"],
      why: "Vožnja s podignutim kontejnerom je zabranjena i opasna.",
    },
    multi_chains_wheel_chocks: {
      question: "Što treba postaviti prije odvajanja?",
      choices: [
        "Dva podmetača ispred i iza jednog kotača",
        "Jedan podmetač iza kamiona",
        "Ništa ako je tlo ravno",
      ],
      why: "Dva podmetača moraju biti postavljena ispred i iza jednog kotača.",
    },
    multi_chains_tension: {
      question: "Što treba provjeriti na lancima?",
      choices: [
        "Da leže na tlu",
        "Da su labavi",
        "Da su pravilno zategnuti",
      ],
      why: "Lanci moraju biti pravilno zategnuti kako bi se kontejner osigurao.",
    },
    multi_chains_safe_distance: {
      question: "Gdje se osobe moraju nalaziti tijekom operacija?",
      choices: [
        "Na sigurnoj udaljenosti",
        "Ispod tereta",
        "Između kamiona i kontejnera",
      ],
      why: "Nitko se ne smije nalaziti ispod ili blizu tereta u pokretu.",
    },
  },
};

export default hr;