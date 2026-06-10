const es = {
  pageTitle: "Cuestionario de seguridad",
  readButton: "Leer la página",
  validateButton: "Validar",
  retryButton: "Volver a las normas de seguridad",
  whyLabel: "¿Por qué?",

  questions: {
    driver_exit_vehicle: {
      question: "¿Quién está autorizado a salir del vehículo?",
      choices: ["Cualquiera", "Solo el conductor", "Los visitantes"],
      why: "Solo el conductor está autorizado a salir del vehículo.",
    },
    traffic_rules: {
      question: "¿Qué deben respetar los conductores en el sitio?",
      choices: [
        "El sentido de circulación y los límites de velocidad",
        "Solo las normas de estacionamiento",
        "Nada en particular",
      ],
      why: "Los conductores deben respetar el sentido de circulación y los límites de velocidad.",
    },
    site_priority: {
      question: "¿Quién tiene prioridad en el sitio?",
      choices: ["Los peatones", "Las máquinas y vehículos del sitio", "Los visitantes externos"],
      why: "Los conductores deben dar prioridad a las máquinas y vehículos del sitio.",
    },
    ppe_mandatory: {
      question: "¿Son obligatorios los equipos de protección individual en el sitio?",
      choices: ["No", "Solo para visitantes", "Sí"],
      why: "El uso de equipos de protección individual es obligatorio.",
    },
    mobile_ladders: {
      question: "¿Están permitidas las escaleras móviles?",
      choices: ["Sí", "Solo en el exterior", "No"],
      why: "Las escaleras móviles están prohibidas.",
    },
    smoking_allowed: {
      question: "¿Está permitido fumar en el sitio?",
      choices: ["Sí", "Solo en el exterior", "No"],
      why: "Fumar y vapear están prohibidos por riesgo de incendio.",
    },
    running_allowed: {
      question: "¿Está permitido correr en el sitio?",
      choices: ["Sí", "No", "Solo en caso de emergencia"],
      why: "Correr está prohibido por razones de seguridad.",
    },
    alcohol_drugs: {
      question: "¿Están permitidos el alcohol o las drogas en el sitio?",
      choices: ["Sí", "Solo durante las pausas", "No"],
      why: "El alcohol y las drogas están estrictamente prohibidos.",
    },
    emergency_number: {
      question: "¿Qué número de emergencia se puede llamar en Francia?",
      choices: ["118-218", "15 o 112", "17"],
      why: "El 15 o el 112 pueden llamarse en caso de emergencia en Francia.",
    },
    machine_distance: {
      question: "¿Qué deben evitar los conductores cerca de las máquinas?",
      choices: [
        "Acercarse demasiado a las máquinas",
        "Usar equipos de protección",
        "Utilizar los retrovisores",
      ],
      why: "Los conductores deben evitar cualquier proximidad peligrosa con las máquinas.",
    },
    tautliner_arrimage_equipment: {
      question: "¿Qué equipo debe utilizarse con un tautliner?",
      choices: [
        "Equipo de sujeción adecuado",
        "Solo una cuerda",
        "Ningún equipo si el trayecto es corto",
      ],
      why: "Debe utilizarse un equipo de sujeción adecuado para asegurar la carga.",
    },
    tautliner_no_trailer_climbing: {
      question: "¿Puede el conductor subir al remolque durante la carga?",
      choices: ["Sí", "Con autorización", "No"],
      why: "Está prohibido subir al remolque durante la carga.",
    },
    tautliner_check_after_distance: {
      question: "¿Cuándo debe comprobarse la sujeción de la carga?",
      choices: [
        "Solo al llegar",
        "Después de unos kilómetros",
        "Nunca si la carga parece estable",
      ],
      why: "La sujeción de la carga debe comprobarse después de unos kilómetros.",
    },
    tailgate_platform_check: {
      question: "¿Qué debe comprobarse antes de utilizar la plataforma elevadora?",
      choices: [
        "Que la plataforma esté despejada y estable",
        "Solo que el motor esté apagado",
        "Que las puertas estén abiertas",
      ],
      why: "La zona de la plataforma elevadora debe estar despejada y estable antes de usarla.",
    },
    tailgate_under_platform: {
      question: "¿Se puede permanecer debajo de la plataforma elevadora?",
      choices: ["Sí", "No", "Solo unos segundos"],
      why: "Permanecer debajo de la plataforma elevadora es peligroso y está prohibido.",
    },
    tailgate_last_row: {
      question: "¿Qué parte de la carga debe estar obligatoriamente sujeta?",
      choices: [
        "La última fila",
        "Solo la parte superior de la carga",
        "Ninguna si las puertas cierran",
      ],
      why: "La última fila de la carga debe estar obligatoriamente sujeta.",
    },
    ampliroll_clear_area: {
      question: "¿Qué debe comprobarse antes de manipular una caja o contenedor?",
      choices: [
        "Que la zona esté despejada",
        "Que otro camión esté cerca",
        "Que el conductor esté dentro del contenedor",
      ],
      why: "La zona de maniobra debe estar despejada antes de cualquier manipulación.",
    },
    ampliroll_hook_only: {
      question: "¿Cómo debe manipularse la caja o el contenedor?",
      choices: [
        "Con cadenas laterales",
        "Solo mediante el gancho",
        "Empujándolo con el vehículo",
      ],
      why: "La caja o el contenedor debe manipularse únicamente mediante el gancho.",
    },
    ampliroll_raised_container: {
      question: "¿Puede circular el camión con la caja elevada?",
      choices: ["Sí", "No", "Solo si está vacía"],
      why: "Circular con una caja elevada está prohibido y es peligroso.",
    },
    multi_chains_wheel_chocks: {
      question: "¿Qué debe colocarse antes del desenganche?",
      choices: [
        "Dos calzos delante y detrás de una rueda",
        "Un solo calzo detrás del camión",
        "Ningún calzo si el suelo es plano",
      ],
      why: "Deben colocarse dos calzos delante y detrás de una rueda.",
    },
    multi_chains_tension: {
      question: "¿Qué debe comprobarse en las cadenas?",
      choices: [
        "Que estén en el suelo",
        "Que estén flojas",
        "Que estén correctamente tensadas",
      ],
      why: "Las cadenas deben estar correctamente tensadas para asegurar la caja.",
    },
    multi_chains_safe_distance: {
      question: "¿Dónde deben colocarse las personas durante las operaciones?",
      choices: [
        "A una distancia de seguridad",
        "Debajo de la carga",
        "Entre el camión y la caja",
      ],
      why: "Nadie debe colocarse debajo o cerca de una carga en movimiento.",
    },
  },
};

export default es;