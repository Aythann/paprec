const lt = {
  pageTitle: "Saugos testas",
  readButton: "Perskaityti puslapį",
  validateButton: "Patvirtinti",
  retryButton: "Grįžti prie saugos taisyklių",
  whyLabel: "Kodėl?",

  questions: {
    driver_exit_vehicle: {
      question: "Kas turi teisę išlipti iš transporto priemonės?",
      choices: ["Bet kas", "Tik vairuotojas", "Lankytojai"],
      why: "Tik vairuotojas turi teisę išlipti iš transporto priemonės.",
    },
    traffic_rules: {
      question: "Ko vairuotojai turi laikytis teritorijoje?",
      choices: [
        "Eismo krypties ir greičio apribojimų",
        "Tik stovėjimo taisyklių",
        "Nieko konkretaus",
      ],
      why: "Vairuotojai turi laikytis eismo krypties ir greičio apribojimų.",
    },
    site_priority: {
      question: "Kas turi pirmumo teisę teritorijoje?",
      choices: ["Pėstieji", "Teritorijos technika ir transporto priemonės", "Išoriniai lankytojai"],
      why: "Vairuotojai turi suteikti pirmenybę teritorijos technikai ir transporto priemonėms.",
    },
    ppe_mandatory: {
      question: "Ar asmeninės apsaugos priemonės privalomos teritorijoje?",
      choices: ["Ne", "Tik lankytojams", "Taip"],
      why: "Asmeninių apsaugos priemonių dėvėjimas yra privalomas.",
    },
    mobile_ladders: {
      question: "Ar mobilios kopėčios leidžiamos?",
      choices: ["Taip", "Tik lauke", "Ne"],
      why: "Mobilios kopėčios yra draudžiamos.",
    },
    smoking_allowed: {
      question: "Ar teritorijoje leidžiama rūkyti?",
      choices: ["Taip", "Tik lauke", "Ne"],
      why: "Rūkyti ir naudoti elektronines cigaretes draudžiama dėl gaisro pavojaus.",
    },
    running_allowed: {
      question: "Ar teritorijoje leidžiama bėgti?",
      choices: ["Taip", "Ne", "Tik avariniu atveju"],
      why: "Bėgti draudžiama dėl saugumo priežasčių.",
    },
    alcohol_drugs: {
      question: "Ar teritorijoje leidžiamas alkoholis arba narkotikai?",
      choices: ["Taip", "Tik per pertraukas", "Ne"],
      why: "Alkoholis ir narkotikai yra griežtai draudžiami.",
    },
    emergency_number: {
      question: "Kokiu pagalbos numeriu galima skambinti Prancūzijoje?",
      choices: ["118-218", "15 arba 112", "17"],
      why: "Prancūzijoje avariniu atveju galima skambinti 15 arba 112.",
    },
    machine_distance: {
      question: "Ko vairuotojai turi vengti šalia technikos?",
      choices: [
        "Per arti priartėti prie technikos",
        "Dėvėti AAP",
        "Naudoti veidrodžius",
      ],
      why: "Vairuotojai turi vengti pavojingo artumo prie technikos.",
    },
    tautliner_arrimage_equipment: {
      question: "Kokia įranga turi būti naudojama su tautliner tipo priekaba?",
      choices: [
        "Tinkama krovinio tvirtinimo įranga",
        "Tik virvė",
        "Jokios įrangos, jei kelionė trumpa",
      ],
      why: "Kroviniui apsaugoti turi būti naudojama tinkama tvirtinimo įranga.",
    },
    tautliner_no_trailer_climbing: {
      question: "Ar vairuotojas gali lipti į priekabą pakrovimo metu?",
      choices: ["Taip", "Su leidimu", "Ne"],
      why: "Lipti į priekabą pakrovimo metu draudžiama.",
    },
    tautliner_check_after_distance: {
      question: "Kada reikia patikrinti krovinio tvirtinimą?",
      choices: [
        "Tik atvykus",
        "Po kelių kilometrų",
        "Niekada, jei krovinys atrodo stabilus",
      ],
      why: "Krovinio tvirtinimą reikia patikrinti po kelių kilometrų.",
    },
    tailgate_platform_check: {
      question: "Ką reikia patikrinti prieš naudojant keltuvą?",
      choices: [
        "Kad platforma būtų laisva ir stabili",
        "Tik kad variklis būtų išjungtas",
        "Kad durys būtų atidarytos",
      ],
      why: "Keltuvo zona prieš naudojimą turi būti laisva ir stabili.",
    },
    tailgate_under_platform: {
      question: "Ar galima stovėti po keltuvu?",
      choices: ["Taip", "Ne", "Tik kelias sekundes"],
      why: "Stovėti po keltuvu yra pavojinga ir draudžiama.",
    },
    tailgate_last_row: {
      question: "Kuri krovinio dalis turi būti būtinai pritvirtinta?",
      choices: [
        "Paskutinė eilė",
        "Tik viršutinė krovinio dalis",
        "Nereikia, jei durys užsidaro",
      ],
      why: "Paskutinė krovinio eilė turi būti būtinai pritvirtinta.",
    },
    ampliroll_clear_area: {
      question: "Ką reikia patikrinti prieš manipuliuojant konteineriu arba dėže?",
      choices: [
        "Kad zona būtų laisva",
        "Kad šalia būtų kitas sunkvežimis",
        "Kad vairuotojas būtų konteineryje",
      ],
      why: "Manevravimo zona prieš bet kokią operaciją turi būti laisva.",
    },
    ampliroll_hook_only: {
      question: "Kaip turi būti manipuliuojama konteineriu arba dėže?",
      choices: [
        "Šoninėmis grandinėmis",
        "Tik kabliu",
        "Stumiant transporto priemone",
      ],
      why: "Konteineris arba dėžė turi būti manipuliuojami tik kabliu.",
    },
    ampliroll_raised_container: {
      question: "Ar sunkvežimis gali važiuoti su pakeltu konteineriu?",
      choices: ["Taip", "Ne", "Tik jei jis tuščias"],
      why: "Važiuoti su pakeltu konteineriu draudžiama ir pavojinga.",
    },
    multi_chains_wheel_chocks: {
      question: "Ką reikia pastatyti prieš atkabinimą?",
      choices: [
        "Du ratų pleištus priešais ir už vieno rato",
        "Vieną pleištą už sunkvežimio",
        "Nieko, jei pagrindas lygus",
      ],
      why: "Du ratų pleištai turi būti pastatyti priešais ir už vieno rato.",
    },
    multi_chains_tension: {
      question: "Ką reikia patikrinti grandinėse?",
      choices: [
        "Kad jos gulėtų ant žemės",
        "Kad jos būtų laisvos",
        "Kad jos būtų tinkamai įtemptos",
      ],
      why: "Grandinės turi būti tinkamai įtemptos, kad konteineris būtų saugus.",
    },
    multi_chains_safe_distance: {
      question: "Kur žmonės turi stovėti operacijų metu?",
      choices: [
        "Saugiu atstumu",
        "Po kroviniu",
        "Tarp sunkvežimio ir konteinerio",
      ],
      why: "Niekas neturi stovėti po judančiu kroviniu arba šalia jo.",
    },
  },
};

export default lt;