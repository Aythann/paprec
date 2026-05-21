const SpecificRulesTranslations = {
  fr: {
    pageTitle: "Règles spécifiques",
    intro:
      "Ces consignes complètent les règles générales selon le type d’équipement sélectionné.",
    buttonText: "Continuer",
    backButton: "Retour au véhicule",
    emptyText: "Aucun équipement valide sélectionné.",

    equipmentRules: {
      tautliner: {
        title: "Arrimage en tautliner",
        sections: {
          mandatorySecuring: "Arrimage obligatoire",
          duringLoading: "Pendant le chargement",
        },
        items: {
          ppe: "Port des EPI obligatoire.",
          equipmentAdapted: "Utiliser un matériel d’arrimage adapté.",
          strapPerRow:
            "Prévoir au minimum une sangle par rang de balles, caisses ou palettes.",
          checkAfterDistance:
            "Vérifier l’arrimage après quelques kilomètres.",
          conePosition:
            "Restez visible à côté du cône pendant le chargement.",
          noClimbing:
            "Ne montez pas dans la semi-remorque pendant le chargement.",
          noWalkingArea:
            "Ne circulez jamais à pied dans la zone de chargement.",
          loadingAllowed:
            "Le chargement ne démarre que si le chauffeur est correctement positionné.",
        },
      },

      tailgateBoxTruck: {
        title: "Arrimage en fourgon hayon",
        sections: {
          mandatorySecuring: "Arrimage obligatoire",
          beforeDeparture: "Avant le départ",
        },
        items: {
          ppe: "Port des EPI obligatoire.",
          adaptedStrapBarHooks:
            "Utiliser une sangle, une barre d’arrimage et des crochets adaptés.",
          keepSystemTensioned:
            "Maintenir le système en tension sur le chargement.",
          secureLastRow:
            "Arrimer obligatoirement la dernière rangée du chargement.",
          checkLoadStability: "Contrôler la stabilité du chargement.",
          checkAfterDistance:
            "Vérifier l’arrimage après quelques kilomètres.",
        },
      },

      ampliroll: {
        title: "Arrimage benne / caisson ampliroll",
        sections: {
          mandatoryChecks: "Contrôles obligatoires",
          liftingAndSecuring: "Montée et sécurisation",
        },
        items: {
          ppe: "Port des EPI obligatoire.",
          checkSafetyLatch: "Vérifier la présence du linguet.",
          hookOnly:
            "Manipuler la benne ou le caisson uniquement par le crochet.",
          checkHooksLocked:
            "Contrôler que les crochets sont bien verrouillés dans les rails.",
          straightInRollers:
            "S’assurer que la benne ou le caisson monte droit dans les rouleaux de guidage.",
          stopIfLateralOffset:
            "En cas de déport latéral, arrêter la montée et rééquilibrer le chargement.",
          useNetOrTarpaulin:
            "Utiliser un filet ou une bâche pour contenir les déchets.",
          unfoldUnderrunBar:
            "Déplier la barre anti-encastrement si aucune remorque n’est attelée.",
        },
      },

      multiChains: {
        title: "Arrimage remorque / multi-chaînes",
        sections: {
          beforeUncoupling: "Avant dételage",
          chainsAndLocking: "Chaînes et verrouillage",
        },
        items: {
          ppe: "Port des EPI obligatoire.",
          wheelChocks:
            "Positionner deux cales à l’avant et à l’arrière d’une roue.",
          checkTrailerStops:
            "Vérifier la présence des butées de remorque.",
          straightInGuideRails:
            "S’assurer que la benne descend droit dans les rails de guidage.",
          checkHandsInHooks:
            "Vérifier que les mains sont bien positionnées dans les crochets de la benne.",
          secureEachSide:
            "Arrimer chaque côté de la benne avec des chaînes à cliquet.",
          chainsTensioned:
            "S’assurer que les chaînes sont correctement tendues.",
          checkAfterDistance:
            "Vérifier l’arrimage après quelques kilomètres.",
        },
      },
    },
  },

  en: {
    pageTitle: "Specific Rules",
    intro:
      "These instructions complete the general rules according to the selected equipment type.",
    buttonText: "Continue",
    backButton: "Back to vehicle",
    emptyText: "No valid equipment selected.",

    equipmentRules: {
      tautliner: {
        title: "Tautliner securing",
        sections: {
          mandatorySecuring: "Mandatory securing",
          duringLoading: "During loading",
        },
        items: {
          ppe: "PPE is mandatory.",
          equipmentAdapted: "Use suitable securing equipment.",
          strapPerRow:
            "Provide at least one strap per row of bales, boxes or pallets.",
          checkAfterDistance:
            "Check the securing after a few kilometers.",
          conePosition: "Stay visible next to the cone during loading.",
          noClimbing:
            "Do not climb into the semi-trailer during loading.",
          noWalkingArea: "Never walk in the loading area.",
          loadingAllowed:
            "Loading only starts if the driver is correctly positioned.",
        },
      },

      tailgateBoxTruck: {
        title: "Tail lift box truck securing",
        sections: {
          mandatorySecuring: "Mandatory securing",
          beforeDeparture: "Before departure",
        },
        items: {
          ppe: "PPE is mandatory.",
          adaptedStrapBarHooks:
            "Use a strap, a securing bar and suitable hooks.",
          keepSystemTensioned:
            "Keep the system under tension on the load.",
          secureLastRow: "The last row of the load must be secured.",
          checkLoadStability: "Check the stability of the load.",
          checkAfterDistance:
            "Check the securing after a few kilometers.",
        },
      },

      ampliroll: {
        title: "Skip / hooklift container securing",
        sections: {
          mandatoryChecks: "Mandatory checks",
          liftingAndSecuring: "Lifting and securing",
        },
        items: {
          ppe: "PPE is mandatory.",
          checkSafetyLatch: "Check that the safety latch is present.",
          hookOnly: "Handle the skip or container only by the hook.",
          checkHooksLocked:
            "Check that the hooks are correctly locked in the rails.",
          straightInRollers:
            "Make sure the skip or container rises straight in the guide rollers.",
          stopIfLateralOffset:
            "If there is lateral offset, stop lifting and rebalance the load.",
          useNetOrTarpaulin:
            "Use a net or tarpaulin to contain the waste.",
          unfoldUnderrunBar:
            "Unfold the underrun protection bar if no trailer is attached.",
        },
      },

      multiChains: {
        title: "Trailer / multi-chain securing",
        sections: {
          beforeUncoupling: "Before uncoupling",
          chainsAndLocking: "Chains and locking",
        },
        items: {
          ppe: "PPE is mandatory.",
          wheelChocks:
            "Place two wheel chocks at the front and rear of one wheel.",
          checkTrailerStops: "Check that the trailer stops are present.",
          straightInGuideRails:
            "Make sure the skip descends straight into the guide rails.",
          checkHandsInHooks:
            "Check that the hands are correctly positioned in the skip hooks.",
          secureEachSide:
            "Secure each side of the skip with ratchet chains.",
          chainsTensioned:
            "Make sure the chains are correctly tensioned.",
          checkAfterDistance:
            "Check the securing after a few kilometers.",
        },
      },
    },
  },

  es: {
    pageTitle: "Normas específicas",
    intro:
      "Estas instrucciones completan las normas generales según el tipo de equipo seleccionado.",
    buttonText: "Continuar",
    backButton: "Volver al vehículo",
    emptyText: "No se ha seleccionado ningún equipo válido.",

    equipmentRules: {
      tautliner: {
        title: "Sujeción en tautliner",
        sections: {
          mandatorySecuring: "Sujeción obligatoria",
          duringLoading: "Durante la carga",
        },
        items: {
          ppe: "El uso de EPI es obligatorio.",
          equipmentAdapted: "Utilizar equipo de sujeción adecuado.",
          strapPerRow:
            "Prever al menos una cincha por fila de balas, cajas o palés.",
          checkAfterDistance:
            "Comprobar la sujeción después de unos kilómetros.",
          conePosition:
            "Permanezca visible junto al cono durante la carga.",
          noClimbing:
            "No suba al semirremolque durante la carga.",
          noWalkingArea:
            "No camine nunca por la zona de carga.",
          loadingAllowed:
            "La carga solo comienza si el conductor está correctamente colocado.",
        },
      },

      tailgateBoxTruck: {
        title: "Sujeción en camión con plataforma elevadora",
        sections: {
          mandatorySecuring: "Sujeción obligatoria",
          beforeDeparture: "Antes de la salida",
        },
        items: {
          ppe: "El uso de EPI es obligatorio.",
          adaptedStrapBarHooks:
            "Utilizar una cincha, una barra de sujeción y ganchos adecuados.",
          keepSystemTensioned:
            "Mantener el sistema en tensión sobre la carga.",
          secureLastRow:
            "La última fila de la carga debe estar obligatoriamente sujeta.",
          checkLoadStability:
            "Comprobar la estabilidad de la carga.",
          checkAfterDistance:
            "Comprobar la sujeción después de unos kilómetros.",
        },
      },

      ampliroll: {
        title: "Sujeción de caja / contenedor ampliroll",
        sections: {
          mandatoryChecks: "Comprobaciones obligatorias",
          liftingAndSecuring: "Elevación y aseguramiento",
        },
        items: {
          ppe: "El uso de EPI es obligatorio.",
          checkSafetyLatch:
            "Comprobar la presencia del pestillo de seguridad.",
          hookOnly:
            "Manipular la caja o el contenedor únicamente mediante el gancho.",
          checkHooksLocked:
            "Comprobar que los ganchos estén correctamente bloqueados en los raíles.",
          straightInRollers:
            "Asegurarse de que la caja o el contenedor suba recto por los rodillos guía.",
          stopIfLateralOffset:
            "En caso de desplazamiento lateral, detener la elevación y reequilibrar la carga.",
          useNetOrTarpaulin:
            "Utilizar una red o lona para contener los residuos.",
          unfoldUnderrunBar:
            "Desplegar la barra antiempotramiento si no hay remolque enganchado.",
        },
      },

      multiChains: {
        title: "Sujeción remolque / sistema multicadena",
        sections: {
          beforeUncoupling: "Antes del desenganche",
          chainsAndLocking: "Cadenas y bloqueo",
        },
        items: {
          ppe: "El uso de EPI es obligatorio.",
          wheelChocks:
            "Colocar dos calzos delante y detrás de una rueda.",
          checkTrailerStops:
            "Comprobar la presencia de los topes del remolque.",
          straightInGuideRails:
            "Asegurarse de que la caja baje recta por los raíles guía.",
          checkHandsInHooks:
            "Comprobar que las manos estén correctamente colocadas en los ganchos de la caja.",
          secureEachSide:
            "Asegurar cada lado de la caja con cadenas de trinquete.",
          chainsTensioned:
            "Asegurarse de que las cadenas estén correctamente tensadas.",
          checkAfterDistance:
            "Comprobar la sujeción después de unos kilómetros.",
        },
      },
    },
  },

  pt: {
    pageTitle: "Regras específicas",
    intro:
      "Estas instruções completam as regras gerais de acordo com o tipo de equipamento selecionado.",
    buttonText: "Continuar",
    backButton: "Voltar ao veículo",
    emptyText: "Nenhum equipamento válido selecionado.",

    equipmentRules: {
      tautliner: {
        title: "Amarração em tautliner",
        sections: {
          mandatorySecuring: "Amarração obrigatória",
          duringLoading: "Durante o carregamento",
        },
        items: {
          ppe: "O uso de EPI é obrigatório.",
          equipmentAdapted: "Utilizar equipamento de amarração adequado.",
          strapPerRow:
            "Prever pelo menos uma cinta por fila de fardos, caixas ou paletes.",
          checkAfterDistance:
            "Verificar a amarração após alguns quilómetros.",
          conePosition:
            "Mantenha-se visível junto ao cone durante o carregamento.",
          noClimbing:
            "Não suba para o semirreboque durante o carregamento.",
          noWalkingArea:
            "Nunca circule a pé na zona de carregamento.",
          loadingAllowed:
            "O carregamento só começa se o condutor estiver corretamente posicionado.",
        },
      },

      tailgateBoxTruck: {
        title: "Amarração em camião com plataforma elevatória",
        sections: {
          mandatorySecuring: "Amarração obrigatória",
          beforeDeparture: "Antes da partida",
        },
        items: {
          ppe: "O uso de EPI é obrigatório.",
          adaptedStrapBarHooks:
            "Utilizar uma cinta, uma barra de amarração e ganchos adequados.",
          keepSystemTensioned:
            "Manter o sistema sob tensão na carga.",
          secureLastRow:
            "A última fila da carga deve ser obrigatoriamente amarrada.",
          checkLoadStability:
            "Verificar a estabilidade da carga.",
          checkAfterDistance:
            "Verificar a amarração após alguns quilómetros.",
        },
      },

      ampliroll: {
        title: "Amarração de caçamba / contentor ampliroll",
        sections: {
          mandatoryChecks: "Verificações obrigatórias",
          liftingAndSecuring: "Elevação e segurança",
        },
        items: {
          ppe: "O uso de EPI é obrigatório.",
          checkSafetyLatch:
            "Verificar a presença do fecho de segurança.",
          hookOnly:
            "Manipular a caçamba ou o contentor apenas pelo gancho.",
          checkHooksLocked:
            "Verificar se os ganchos estão corretamente bloqueados nos carris.",
          straightInRollers:
            "Garantir que a caçamba ou o contentor sobe direito nos roletes guia.",
          stopIfLateralOffset:
            "Em caso de desvio lateral, parar a elevação e reequilibrar a carga.",
          useNetOrTarpaulin:
            "Utilizar uma rede ou lona para conter os resíduos.",
          unfoldUnderrunBar:
            "Desdobrar a barra anti-encastramento se não houver reboque acoplado.",
        },
      },

      multiChains: {
        title: "Amarração reboque / sistema multi-correntes",
        sections: {
          beforeUncoupling: "Antes do desengate",
          chainsAndLocking: "Correntes e bloqueio",
        },
        items: {
          ppe: "O uso de EPI é obrigatório.",
          wheelChocks:
            "Colocar dois calços à frente e atrás de uma roda.",
          checkTrailerStops:
            "Verificar a presença dos batentes do reboque.",
          straightInGuideRails:
            "Garantir que a caçamba desce direita nos carris guia.",
          checkHandsInHooks:
            "Verificar se as mãos estão corretamente posicionadas nos ganchos da caçamba.",
          secureEachSide:
            "Amarrar cada lado da caçamba com correntes de roquete.",
          chainsTensioned:
            "Garantir que as correntes estão corretamente tensionadas.",
          checkAfterDistance:
            "Verificar a amarração após alguns quilómetros.",
        },
      },
    },
  },

  de: {
    pageTitle: "Spezifische Regeln",
    intro:
      "Diese Anweisungen ergänzen die allgemeinen Regeln entsprechend dem ausgewählten Ausrüstungstyp.",
    buttonText: "Weiter",
    backButton: "Zurück zum Fahrzeug",
    emptyText: "Keine gültige Ausrüstung ausgewählt.",

    equipmentRules: {
      tautliner: {
        title: "Ladungssicherung im Tautliner",
        sections: {
          mandatorySecuring: "Pflicht zur Ladungssicherung",
          duringLoading: "Während des Beladens",
        },
        items: {
          ppe: "PSA ist Pflicht.",
          equipmentAdapted:
            "Geeignete Ladungssicherungsausrüstung verwenden.",
          strapPerRow:
            "Mindestens einen Gurt pro Reihe Ballen, Kisten oder Paletten vorsehen.",
          checkAfterDistance:
            "Die Ladungssicherung nach einigen Kilometern überprüfen.",
          conePosition:
            "Während des Beladens sichtbar neben dem Kegel bleiben.",
          noClimbing:
            "Während des Beladens nicht in den Sattelauflieger steigen.",
          noWalkingArea:
            "Niemals zu Fuß im Ladebereich gehen.",
          loadingAllowed:
            "Das Beladen beginnt nur, wenn der Fahrer korrekt positioniert ist.",
        },
      },

      tailgateBoxTruck: {
        title: "Ladungssicherung im Kofferfahrzeug mit Ladebordwand",
        sections: {
          mandatorySecuring: "Pflicht zur Ladungssicherung",
          beforeDeparture: "Vor der Abfahrt",
        },
        items: {
          ppe: "PSA ist Pflicht.",
          adaptedStrapBarHooks:
            "Einen Gurt, eine Sicherungsstange und geeignete Haken verwenden.",
          keepSystemTensioned:
            "Das System an der Ladung unter Spannung halten.",
          secureLastRow:
            "Die letzte Reihe der Ladung muss gesichert werden.",
          checkLoadStability:
            "Die Stabilität der Ladung überprüfen.",
          checkAfterDistance:
            "Die Ladungssicherung nach einigen Kilometern überprüfen.",
        },
      },

      ampliroll: {
        title: "Sicherung von Mulde / Abrollcontainer",
        sections: {
          mandatoryChecks: "Pflichtkontrollen",
          liftingAndSecuring: "Heben und Sichern",
        },
        items: {
          ppe: "PSA ist Pflicht.",
          checkSafetyLatch:
            "Prüfen, ob die Sicherheitsverriegelung vorhanden ist.",
          hookOnly:
            "Die Mulde oder den Container nur mit dem Haken bewegen.",
          checkHooksLocked:
            "Prüfen, ob die Haken korrekt in den Schienen verriegelt sind.",
          straightInRollers:
            "Sicherstellen, dass Mulde oder Container gerade in den Führungsrollen hochfahren.",
          stopIfLateralOffset:
            "Bei seitlichem Versatz den Hub stoppen und die Ladung neu ausbalancieren.",
          useNetOrTarpaulin:
            "Ein Netz oder eine Plane verwenden, um Abfälle zu sichern.",
          unfoldUnderrunBar:
            "Den Unterfahrschutz ausklappen, wenn kein Anhänger angekuppelt ist.",
        },
      },

      multiChains: {
        title: "Sicherung Anhänger / Mehrkettensystem",
        sections: {
          beforeUncoupling: "Vor dem Abkuppeln",
          chainsAndLocking: "Ketten und Verriegelung",
        },
        items: {
          ppe: "PSA ist Pflicht.",
          wheelChocks:
            "Zwei Unterlegkeile vor und hinter einem Rad positionieren.",
          checkTrailerStops:
            "Prüfen, ob die Anhängeranschläge vorhanden sind.",
          straightInGuideRails:
            "Sicherstellen, dass die Mulde gerade in die Führungsschienen absenkt.",
          checkHandsInHooks:
            "Prüfen, ob die Aufnahmen korrekt in den Haken der Mulde sitzen.",
          secureEachSide:
            "Jede Seite der Mulde mit Ratschenketten sichern.",
          chainsTensioned:
            "Sicherstellen, dass die Ketten korrekt gespannt sind.",
          checkAfterDistance:
            "Die Ladungssicherung nach einigen Kilometern überprüfen.",
        },
      },
    },
  },

    it: {
    pageTitle: "Regole specifiche",
    intro:
      "Queste istruzioni completano le regole generali in base al tipo di attrezzatura selezionato.",
    buttonText: "Continua",
    backButton: "Torna al veicolo",
    emptyText: "Nessuna attrezzatura valida selezionata.",

    equipmentRules: {
      tautliner: {
        title: "Fissaggio in tautliner",
        sections: {
          mandatorySecuring: "Fissaggio obbligatorio",
          duringLoading: "Durante il carico",
        },
        items: {
          ppe: "I DPI sono obbligatori.",
          equipmentAdapted: "Utilizzare attrezzatura di fissaggio adeguata.",
          strapPerRow:
            "Prevedere almeno una cinghia per fila di balle, casse o pallet.",
          checkAfterDistance:
            "Controllare il fissaggio dopo alcuni chilometri.",
          conePosition:
            "Restare visibili accanto al cono durante il carico.",
          noClimbing:
            "Non salire nel semirimorchio durante il carico.",
          noWalkingArea:
            "Non camminare mai nella zona di carico.",
          loadingAllowed:
            "Il carico inizia solo se il conducente è posizionato correttamente.",
        },
      },

      tailgateBoxTruck: {
        title: "Fissaggio in furgone con sponda idraulica",
        sections: {
          mandatorySecuring: "Fissaggio obbligatorio",
          beforeDeparture: "Prima della partenza",
        },
        items: {
          ppe: "I DPI sono obbligatori.",
          adaptedStrapBarHooks:
            "Utilizzare una cinghia, una barra di fissaggio e ganci adeguati.",
          keepSystemTensioned:
            "Mantenere il sistema in tensione sul carico.",
          secureLastRow:
            "L’ultima fila del carico deve essere obbligatoriamente fissata.",
          checkLoadStability: "Controllare la stabilità del carico.",
          checkAfterDistance:
            "Controllare il fissaggio dopo alcuni chilometri.",
        },
      },

      ampliroll: {
        title: "Fissaggio cassone / container ampliroll",
        sections: {
          mandatoryChecks: "Controlli obbligatori",
          liftingAndSecuring: "Sollevamento e messa in sicurezza",
        },
        items: {
          ppe: "I DPI sono obbligatori.",
          checkSafetyLatch: "Verificare la presenza del fermo di sicurezza.",
          hookOnly:
            "Movimentare il cassone o container solo tramite il gancio.",
          checkHooksLocked:
            "Verificare che i ganci siano correttamente bloccati nelle guide.",
          straightInRollers:
            "Assicurarsi che il cassone o container salga diritto nei rulli guida.",
          stopIfLateralOffset:
            "In caso di spostamento laterale, fermare il sollevamento e riequilibrare il carico.",
          useNetOrTarpaulin:
            "Utilizzare una rete o un telo per contenere i rifiuti.",
          unfoldUnderrunBar:
            "Aprire la barra antincastro se non è agganciato alcun rimorchio.",
        },
      },

      multiChains: {
        title: "Fissaggio rimorchio / sistema multi-catena",
        sections: {
          beforeUncoupling: "Prima dello sgancio",
          chainsAndLocking: "Catene e bloccaggio",
        },
        items: {
          ppe: "I DPI sono obbligatori.",
          wheelChocks:
            "Posizionare due cunei davanti e dietro una ruota.",
          checkTrailerStops:
            "Verificare la presenza dei fermi del rimorchio.",
          straightInGuideRails:
            "Assicurarsi che il cassone scenda diritto nelle guide.",
          checkHandsInHooks:
            "Verificare che gli agganci siano correttamente posizionati nei ganci del cassone.",
          secureEachSide:
            "Fissare ogni lato del cassone con catene a cricchetto.",
          chainsTensioned:
            "Assicurarsi che le catene siano correttamente tese.",
          checkAfterDistance:
            "Controllare il fissaggio dopo alcuni chilometri.",
        },
      },
    },
  },

  pl: {
    pageTitle: "Zasady szczegółowe",
    intro:
      "Te instrukcje uzupełniają zasady ogólne zgodnie z wybranym typem wyposażenia.",
    buttonText: "Kontynuuj",
    backButton: "Wróć do pojazdu",
    emptyText: "Nie wybrano prawidłowego wyposażenia.",

    equipmentRules: {
      tautliner: {
        title: "Zabezpieczenie w tautlinerze",
        sections: {
          mandatorySecuring: "Obowiązkowe zabezpieczenie",
          duringLoading: "Podczas załadunku",
        },
        items: {
          ppe: "Środki ochrony indywidualnej są obowiązkowe.",
          equipmentAdapted:
            "Używać odpowiedniego sprzętu do zabezpieczania ładunku.",
          strapPerRow:
            "Zapewnić co najmniej jeden pas na każdy rząd bel, skrzyń lub palet.",
          checkAfterDistance:
            "Sprawdzić zabezpieczenie po kilku kilometrach.",
          conePosition:
            "Pozostać widocznym obok pachołka podczas załadunku.",
          noClimbing:
            "Nie wchodzić do naczepy podczas załadunku.",
          noWalkingArea:
            "Nigdy nie chodzić pieszo po strefie załadunku.",
          loadingAllowed:
            "Załadunek rozpoczyna się tylko wtedy, gdy kierowca jest prawidłowo ustawiony.",
        },
      },

      tailgateBoxTruck: {
        title: "Zabezpieczenie w pojeździe z windą załadowczą",
        sections: {
          mandatorySecuring: "Obowiązkowe zabezpieczenie",
          beforeDeparture: "Przed wyjazdem",
        },
        items: {
          ppe: "Środki ochrony indywidualnej są obowiązkowe.",
          adaptedStrapBarHooks:
            "Użyć pasa, belki zabezpieczającej i odpowiednich haków.",
          keepSystemTensioned:
            "Utrzymywać system napięty na ładunku.",
          secureLastRow:
            "Ostatni rząd ładunku musi być obowiązkowo zabezpieczony.",
          checkLoadStability: "Sprawdzić stabilność ładunku.",
          checkAfterDistance:
            "Sprawdzić zabezpieczenie po kilku kilometrach.",
        },
      },

      ampliroll: {
        title: "Zabezpieczenie kontenera / muldy ampliroll",
        sections: {
          mandatoryChecks: "Obowiązkowe kontrole",
          liftingAndSecuring: "Podnoszenie i zabezpieczanie",
        },
        items: {
          ppe: "Środki ochrony indywidualnej są obowiązkowe.",
          checkSafetyLatch: "Sprawdzić obecność zapadki bezpieczeństwa.",
          hookOnly:
            "Manipulować kontenerem lub muldą wyłącznie za pomocą haka.",
          checkHooksLocked:
            "Sprawdzić, czy haki są prawidłowo zablokowane w prowadnicach.",
          straightInRollers:
            "Upewnić się, że kontener lub mulda podnosi się prosto w rolkach prowadzących.",
          stopIfLateralOffset:
            "W przypadku przesunięcia bocznego zatrzymać podnoszenie i wyważyć ładunek.",
          useNetOrTarpaulin:
            "Użyć siatki lub plandeki do zabezpieczenia odpadów.",
          unfoldUnderrunBar:
            "Rozłożyć belkę przeciw najazdową, jeśli nie jest podłączona przyczepa.",
        },
      },

      multiChains: {
        title: "Zabezpieczenie przyczepy / systemu wielołańcuchowego",
        sections: {
          beforeUncoupling: "Przed odłączeniem",
          chainsAndLocking: "Łańcuchy i blokowanie",
        },
        items: {
          ppe: "Środki ochrony indywidualnej są obowiązkowe.",
          wheelChocks:
            "Ustawić dwa kliny przed i za jednym kołem.",
          checkTrailerStops:
            "Sprawdzić obecność ograniczników przyczepy.",
          straightInGuideRails:
            "Upewnić się, że mulda opuszcza się prosto w prowadnicach.",
          checkHandsInHooks:
            "Sprawdzić, czy uchwyty są prawidłowo umieszczone w hakach muldy.",
          secureEachSide:
            "Zabezpieczyć każdą stronę muldy łańcuchami zapadkowymi.",
          chainsTensioned:
            "Upewnić się, że łańcuchy są prawidłowo napięte.",
          checkAfterDistance:
            "Sprawdzić zabezpieczenie po kilku kilometrach.",
        },
      },
    },
  },

    ro: {
    pageTitle: "Reguli specifice",
    intro:
      "Aceste instrucțiuni completează regulile generale în funcție de tipul de echipament selectat.",
    buttonText: "Continuă",
    backButton: "Înapoi la vehicul",
    emptyText: "Nu a fost selectat niciun echipament valid.",

    equipmentRules: {
      tautliner: {
        title: "Fixare în tautliner",
        sections: {
          mandatorySecuring: "Fixare obligatorie",
          duringLoading: "În timpul încărcării",
        },
        items: {
          ppe: "EIP este obligatoriu.",
          equipmentAdapted: "Utilizați echipament de fixare adecvat.",
          strapPerRow:
            "Asigurați cel puțin o chingă pentru fiecare rând de baloți, cutii sau paleți.",
          checkAfterDistance:
            "Verificați fixarea după câțiva kilometri.",
          conePosition:
            "Rămâneți vizibil lângă con în timpul încărcării.",
          noClimbing:
            "Nu urcați în semiremorcă în timpul încărcării.",
          noWalkingArea:
            "Nu mergeți niciodată pe jos în zona de încărcare.",
          loadingAllowed:
            "Încărcarea începe doar dacă șoferul este poziționat corect.",
        },
      },

      tailgateBoxTruck: {
        title: "Fixare în camion cu hayon",
        sections: {
          mandatorySecuring: "Fixare obligatorie",
          beforeDeparture: "Înainte de plecare",
        },
        items: {
          ppe: "EIP este obligatoriu.",
          adaptedStrapBarHooks:
            "Utilizați o chingă, o bară de fixare și cârlige adecvate.",
          keepSystemTensioned:
            "Mențineți sistemul tensionat pe încărcătură.",
          secureLastRow:
            "Ultimul rând al încărcăturii trebuie fixat obligatoriu.",
          checkLoadStability: "Verificați stabilitatea încărcăturii.",
          checkAfterDistance:
            "Verificați fixarea după câțiva kilometri.",
        },
      },

      ampliroll: {
        title: "Fixare benă / container ampliroll",
        sections: {
          mandatoryChecks: "Verificări obligatorii",
          liftingAndSecuring: "Ridicare și securizare",
        },
        items: {
          ppe: "EIP este obligatoriu.",
          checkSafetyLatch:
            "Verificați prezența siguranței de blocare.",
          hookOnly:
            "Manipulați bena sau containerul numai cu cârligul.",
          checkHooksLocked:
            "Verificați dacă cârligele sunt corect blocate în șine.",
          straightInRollers:
            "Asigurați-vă că bena sau containerul urcă drept în rolele de ghidare.",
          stopIfLateralOffset:
            "În caz de deplasare laterală, opriți ridicarea și reechilibrați încărcătura.",
          useNetOrTarpaulin:
            "Utilizați o plasă sau o prelată pentru a reține deșeurile.",
          unfoldUnderrunBar:
            "Desfaceți bara anti-împănare dacă nu este atașată nicio remorcă.",
        },
      },

      multiChains: {
        title: "Fixare remorcă / sistem multi-lanț",
        sections: {
          beforeUncoupling: "Înainte de decuplare",
          chainsAndLocking: "Lanțuri și blocare",
        },
        items: {
          ppe: "EIP este obligatoriu.",
          wheelChocks:
            "Poziționați două cale în fața și în spatele unei roți.",
          checkTrailerStops:
            "Verificați prezența opritoarelor remorcii.",
          straightInGuideRails:
            "Asigurați-vă că bena coboară drept în șinele de ghidare.",
          checkHandsInHooks:
            "Verificați dacă prinderile sunt corect poziționate în cârligele benei.",
          secureEachSide:
            "Fixați fiecare parte a benei cu lanțuri cu clichet.",
          chainsTensioned:
            "Asigurați-vă că lanțurile sunt corect tensionate.",
          checkAfterDistance:
            "Verificați fixarea după câțiva kilometri.",
        },
      },
    },
  },

  ru: {
    pageTitle: "Специальные правила",
    intro:
      "Эти инструкции дополняют общие правила в зависимости от выбранного типа оборудования.",
    buttonText: "Продолжить",
    backButton: "Вернуться к транспортному средству",
    emptyText: "Не выбрано допустимое оборудование.",

    equipmentRules: {
      tautliner: {
        title: "Крепление в tautliner",
        sections: {
          mandatorySecuring: "Обязательное крепление",
          duringLoading: "Во время погрузки",
        },
        items: {
          ppe: "Средства индивидуальной защиты обязательны.",
          equipmentAdapted:
            "Используйте подходящее оборудование для крепления груза.",
          strapPerRow:
            "Предусмотрите минимум один ремень на каждый ряд тюков, ящиков или паллет.",
          checkAfterDistance:
            "Проверьте крепление после нескольких километров.",
          conePosition:
            "Оставайтесь видимым рядом с конусом во время погрузки.",
          noClimbing:
            "Не поднимайтесь в полуприцеп во время погрузки.",
          noWalkingArea:
            "Никогда не ходите пешком в зоне погрузки.",
          loadingAllowed:
            "Погрузка начинается только если водитель правильно расположен.",
        },
      },

      tailgateBoxTruck: {
        title: "Крепление в фургоне с гидробортом",
        sections: {
          mandatorySecuring: "Обязательное крепление",
          beforeDeparture: "Перед выездом",
        },
        items: {
          ppe: "Средства индивидуальной защиты обязательны.",
          adaptedStrapBarHooks:
            "Используйте ремень, крепёжную штангу и подходящие крюки.",
          keepSystemTensioned:
            "Поддерживайте систему в натянутом состоянии на грузе.",
          secureLastRow:
            "Последний ряд груза должен быть обязательно закреплён.",
          checkLoadStability: "Проверьте устойчивость груза.",
          checkAfterDistance:
            "Проверьте крепление после нескольких километров.",
        },
      },

      ampliroll: {
        title: "Крепление кузова / контейнера ampliroll",
        sections: {
          mandatoryChecks: "Обязательные проверки",
          liftingAndSecuring: "Подъём и фиксация",
        },
        items: {
          ppe: "Средства индивидуальной защиты обязательны.",
          checkSafetyLatch:
            "Проверьте наличие предохранительного фиксатора.",
          hookOnly:
            "Перемещайте кузов или контейнер только с помощью крюка.",
          checkHooksLocked:
            "Проверьте, что крюки правильно зафиксированы в направляющих.",
          straightInRollers:
            "Убедитесь, что кузов или контейнер поднимается ровно по направляющим роликам.",
          stopIfLateralOffset:
            "При боковом смещении остановите подъём и перераспределите груз.",
          useNetOrTarpaulin:
            "Используйте сетку или тент для удержания отходов.",
          unfoldUnderrunBar:
            "Разложите противоподкатную балку, если прицеп не присоединён.",
        },
      },

      multiChains: {
        title: "Крепление прицепа / многоцепной системы",
        sections: {
          beforeUncoupling: "Перед отцеплением",
          chainsAndLocking: "Цепи и блокировка",
        },
        items: {
          ppe: "Средства индивидуальной защиты обязательны.",
          wheelChocks:
            "Установите два противооткатных упора спереди и сзади одного колеса.",
          checkTrailerStops:
            "Проверьте наличие упоров прицепа.",
          straightInGuideRails:
            "Убедитесь, что кузов опускается ровно в направляющие.",
          checkHandsInHooks:
            "Проверьте, что захваты правильно расположены в крюках кузова.",
          secureEachSide:
            "Закрепите каждую сторону кузова цепями с храповым механизмом.",
          chainsTensioned:
            "Убедитесь, что цепи правильно натянуты.",
          checkAfterDistance:
            "Проверьте крепление после нескольких километров.",
        },
      },
    },
  },

  ua: {
    pageTitle: "Спеціальні правила",
    intro:
      "Ці інструкції доповнюють загальні правила відповідно до вибраного типу обладнання.",
    buttonText: "Продовжити",
    backButton: "Повернутися до транспортного засобу",
    emptyText: "Не вибрано дійсне обладнання.",

    equipmentRules: {
      tautliner: {
        title: "Кріплення в tautliner",
        sections: {
          mandatorySecuring: "Обов’язкове кріплення",
          duringLoading: "Під час завантаження",
        },
        items: {
          ppe: "ЗІЗ є обов’язковими.",
          equipmentAdapted:
            "Використовуйте відповідне обладнання для кріплення вантажу.",
          strapPerRow:
            "Передбачте щонайменше один ремінь на кожен ряд тюків, ящиків або палет.",
          checkAfterDistance:
            "Перевірте кріплення після кількох кілометрів.",
          conePosition:
            "Залишайтеся видимим біля конуса під час завантаження.",
          noClimbing:
            "Не залазьте в напівпричіп під час завантаження.",
          noWalkingArea:
            "Ніколи не ходіть пішки в зоні завантаження.",
          loadingAllowed:
            "Завантаження починається лише тоді, коли водій правильно розташований.",
        },
      },

      tailgateBoxTruck: {
        title: "Кріплення у фургоні з гідробортом",
        sections: {
          mandatorySecuring: "Обов’язкове кріплення",
          beforeDeparture: "Перед виїздом",
        },
        items: {
          ppe: "ЗІЗ є обов’язковими.",
          adaptedStrapBarHooks:
            "Використовуйте ремінь, кріпильну штангу та відповідні гаки.",
          keepSystemTensioned:
            "Підтримуйте систему в натягнутому стані на вантажі.",
          secureLastRow:
            "Останній ряд вантажу має бути обов’язково закріплений.",
          checkLoadStability: "Перевірте стійкість вантажу.",
          checkAfterDistance:
            "Перевірте кріплення після кількох кілометрів.",
        },
      },

      ampliroll: {
        title: "Кріплення кузова / контейнера ampliroll",
        sections: {
          mandatoryChecks: "Обов’язкові перевірки",
          liftingAndSecuring: "Підіймання та закріплення",
        },
        items: {
          ppe: "ЗІЗ є обов’язковими.",
          checkSafetyLatch:
            "Перевірте наявність запобіжного фіксатора.",
          hookOnly:
            "Маніпулюйте кузовом або контейнером лише за допомогою гака.",
          checkHooksLocked:
            "Перевірте, що гаки правильно заблоковані в напрямних.",
          straightInRollers:
            "Переконайтеся, що кузов або контейнер підіймається рівно по напрямних роликах.",
          stopIfLateralOffset:
            "У разі бокового зміщення зупиніть підіймання та збалансуйте вантаж.",
          useNetOrTarpaulin:
            "Використовуйте сітку або тент для утримання відходів.",
          unfoldUnderrunBar:
            "Розкладіть протипідкатну балку, якщо причіп не приєднано.",
        },
      },

      multiChains: {
        title: "Кріплення причепа / багатоланцюгової системи",
        sections: {
          beforeUncoupling: "Перед відчепленням",
          chainsAndLocking: "Ланцюги та блокування",
        },
        items: {
          ppe: "ЗІЗ є обов’язковими.",
          wheelChocks:
            "Встановіть два противідкатні упори спереду та ззаду одного колеса.",
          checkTrailerStops:
            "Перевірте наявність упорів причепа.",
          straightInGuideRails:
            "Переконайтеся, що кузов опускається рівно в напрямні.",
          checkHandsInHooks:
            "Перевірте, що захвати правильно розташовані в гаках кузова.",
          secureEachSide:
            "Закріпіть кожен бік кузова ланцюгами з тріскачкою.",
          chainsTensioned:
            "Переконайтеся, що ланцюги правильно натягнуті.",
          checkAfterDistance:
            "Перевірте кріплення після кількох кілометрів.",
        },
      },
    },
  },

    lt: {
    pageTitle: "Specialios taisyklės",
    intro:
      "Šios instrukcijos papildo bendrąsias taisykles pagal pasirinktą įrangos tipą.",
    buttonText: "Tęsti",
    backButton: "Grįžti prie transporto priemonės",
    emptyText: "Nepasirinkta tinkama įranga.",

    equipmentRules: {
      tautliner: {
        title: "Tvirtinimas tautliner puspriekabėje",
        sections: {
          mandatorySecuring: "Privalomas tvirtinimas",
          duringLoading: "Pakrovimo metu",
        },
        items: {
          ppe: "AAP dėvėjimas yra privalomas.",
          equipmentAdapted:
            "Naudokite tinkamą krovinio tvirtinimo įrangą.",
          strapPerRow:
            "Kiekvienai ryšulių, dėžių ar palečių eilei naudokite bent vieną diržą.",
          checkAfterDistance:
            "Patikrinkite tvirtinimą po kelių kilometrų.",
          conePosition:
            "Pakrovimo metu likite matomas šalia kūgio.",
          noClimbing:
            "Pakrovimo metu nelipkite į puspriekabę.",
          noWalkingArea:
            "Niekada nevaikščiokite pakrovimo zonoje.",
          loadingAllowed:
            "Pakrovimas pradedamas tik tada, kai vairuotojas yra tinkamai pastatytas.",
        },
      },

      tailgateBoxTruck: {
        title: "Tvirtinimas sunkvežimyje su liftu",
        sections: {
          mandatorySecuring: "Privalomas tvirtinimas",
          beforeDeparture: "Prieš išvykimą",
        },
        items: {
          ppe: "AAP dėvėjimas yra privalomas.",
          adaptedStrapBarHooks:
            "Naudokite diržą, tvirtinimo siją ir tinkamus kablius.",
          keepSystemTensioned:
            "Išlaikykite sistemą įtemptą ant krovinio.",
          secureLastRow:
            "Paskutinė krovinio eilė turi būti privalomai pritvirtinta.",
          checkLoadStability:
            "Patikrinkite krovinio stabilumą.",
          checkAfterDistance:
            "Patikrinkite tvirtinimą po kelių kilometrų.",
        },
      },

      ampliroll: {
        title: "Ampliroll konteinerio tvirtinimas",
        sections: {
          mandatoryChecks: "Privalomi patikrinimai",
          liftingAndSecuring: "Pakėlimas ir saugumas",
        },
        items: {
          ppe: "AAP dėvėjimas yra privalomas.",
          checkSafetyLatch:
            "Patikrinkite apsauginio fiksatoriaus buvimą.",
          hookOnly:
            "Konteinerį valdykite tik naudojant kablį.",
          checkHooksLocked:
            "Patikrinkite, ar kabliai tinkamai užfiksuoti bėgiuose.",
          straightInRollers:
            "Įsitikinkite, kad konteineris kyla tiesiai per kreipiamuosius volelius.",
          stopIfLateralOffset:
            "Esant šoniniam poslinkiui, sustabdykite kėlimą ir subalansuokite krovinį.",
          useNetOrTarpaulin:
            "Naudokite tinklą arba tentą atliekoms uždengti.",
          unfoldUnderrunBar:
            "Išskleiskite apsauginę siją, jei nėra prijungtos priekabos.",
        },
      },

      multiChains: {
        title: "Priekabos / kelių grandinių tvirtinimas",
        sections: {
          beforeUncoupling: "Prieš atkabinimą",
          chainsAndLocking: "Grandinės ir fiksavimas",
        },
        items: {
          ppe: "AAP dėvėjimas yra privalomas.",
          wheelChocks:
            "Padėkite dvi atramas priekyje ir gale prie vieno rato.",
          checkTrailerStops:
            "Patikrinkite priekabos atramų buvimą.",
          straightInGuideRails:
            "Įsitikinkite, kad konteineris leidžiasi tiesiai į kreipiamuosius bėgius.",
          checkHandsInHooks:
            "Patikrinkite, ar fiksatoriai tinkamai įdėti į konteinerio kablius.",
          secureEachSide:
            "Pritvirtinkite kiekvieną konteinerio pusę grandinėmis su terkšle.",
          chainsTensioned:
            "Įsitikinkite, kad grandinės yra tinkamai įtemptos.",
          checkAfterDistance:
            "Patikrinkite tvirtinimą po kelių kilometrų.",
        },
      },
    },
  },

  hr: {
    pageTitle: "Posebna pravila",
    intro:
      "Ove upute nadopunjuju opća pravila ovisno o odabranoj vrsti opreme.",
    buttonText: "Nastavi",
    backButton: "Povratak na vozilo",
    emptyText: "Nije odabrana valjana oprema.",

    equipmentRules: {
      tautliner: {
        title: "Učvršćivanje u tautliner prikolici",
        sections: {
          mandatorySecuring: "Obavezno učvršćivanje",
          duringLoading: "Tijekom utovara",
        },
        items: {
          ppe: "Nošenje OZO-a je obavezno.",
          equipmentAdapted:
            "Koristite odgovarajuću opremu za učvršćivanje tereta.",
          strapPerRow:
            "Postavite najmanje jednu traku po redu bala, kutija ili paleta.",
          checkAfterDistance:
            "Provjerite učvršćenje nakon nekoliko kilometara.",
          conePosition:
            "Ostanite vidljivi pored stošca tijekom utovara.",
          noClimbing:
            "Nemojte se penjati u poluprikolicu tijekom utovara.",
          noWalkingArea:
            "Nikada ne hodajte pješice u zoni utovara.",
          loadingAllowed:
            "Utovar započinje samo ako je vozač pravilno pozicioniran.",
        },
      },

      tailgateBoxTruck: {
        title: "Učvršćivanje u kamionu s rampom",
        sections: {
          mandatorySecuring: "Obavezno učvršćivanje",
          beforeDeparture: "Prije polaska",
        },
        items: {
          ppe: "Nošenje OZO-a je obavezno.",
          adaptedStrapBarHooks:
            "Koristite traku, šipku za učvršćivanje i odgovarajuće kuke.",
          keepSystemTensioned:
            "Održavajte sustav zategnutim preko tereta.",
          secureLastRow:
            "Posljednji red tereta mora biti obavezno učvršćen.",
          checkLoadStability:
            "Provjerite stabilnost tereta.",
          checkAfterDistance:
            "Provjerite učvršćenje nakon nekoliko kilometara.",
        },
      },

      ampliroll: {
        title: "Učvršćivanje ampliroll kontejnera",
        sections: {
          mandatoryChecks: "Obavezne provjere",
          liftingAndSecuring: "Podizanje i osiguranje",
        },
        items: {
          ppe: "Nošenje OZO-a je obavezno.",
          checkSafetyLatch:
            "Provjerite prisutnost sigurnosnog zasuna.",
          hookOnly:
            "Rukujte kontejnerom isključivo pomoću kuke.",
          checkHooksLocked:
            "Provjerite jesu li kuke pravilno zaključane u vodilicama.",
          straightInRollers:
            "Provjerite podiže li se kontejner ravno kroz vodilice.",
          stopIfLateralOffset:
            "U slučaju bočnog pomaka zaustavite podizanje i ponovno uravnotežite teret.",
          useNetOrTarpaulin:
            "Koristite mrežu ili ceradu za zadržavanje otpada.",
          unfoldUnderrunBar:
            "Spustite zaštitnu gredu ako prikolica nije spojena.",
        },
      },

      multiChains: {
        title: "Učvršćivanje prikolice / višelančanog sustava",
        sections: {
          beforeUncoupling: "Prije odvajanja",
          chainsAndLocking: "Lanci i zaključavanje",
        },
        items: {
          ppe: "Nošenje OZO-a je obavezno.",
          wheelChocks:
            "Postavite dvije podmetače ispred i iza jednog kotača.",
          checkTrailerStops:
            "Provjerite prisutnost graničnika prikolice.",
          straightInGuideRails:
            "Provjerite spušta li se kontejner ravno u vodilice.",
          checkHandsInHooks:
            "Provjerite jesu li prihvati pravilno postavljeni u kuke kontejnera.",
          secureEachSide:
            "Učvrstite svaku stranu kontejnera lancima sa zatezačem.",
          chainsTensioned:
            "Provjerite jesu li lanci pravilno zategnuti.",
          checkAfterDistance:
            "Provjerite učvršćenje nakon nekoliko kilometara.",
        },
      },
    },
  },
};

export default SpecificRulesTranslations;