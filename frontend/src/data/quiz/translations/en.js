const en = {
  pageTitle: "Safety Quiz",
  readButton: "Read page",
  validateButton: "Validate",
  retryButton: "Return to safety rules",
  whyLabel: "Why?",

  questions: {
    driver_exit_vehicle: {
      question: "Who is allowed to leave the vehicle?",
      choices: ["Anyone", "Only the driver", "Visitors"],
      why: "Only the driver is authorized to leave the vehicle.",
    },

    traffic_rules: {
      question: "What must drivers respect on site?",
      choices: [
        "Traffic direction and speed limits",
        "Only parking rules",
        "Nothing specific",
      ],
      why: "Drivers must respect circulation direction and speed limitations.",
    },

    site_priority: {
      question: "Who has priority on site?",
      choices: [
        "Pedestrians",
        "Machines and site vehicles",
        "External visitors",
      ],
      why: "Drivers must give priority to site machines and vehicles.",
    },

    ppe_mandatory: {
      question: "Are Personal Protective Equipment mandatory on site?",
      choices: ["No", "Only for visitors", "Yes"],
      why: "Wearing Personal Protective Equipment is mandatory.",
    },

    mobile_ladders: {
      question: "Are mobile ladders allowed?",
      choices: ["Yes", "Only outside", "No"],
      why: "Mobile ladders are prohibited.",
    },

    smoking_allowed: {
      question: "Is smoking allowed on site?",
      choices: ["Yes", "Only outdoors", "No"],
      why: "Smoking and vaping are prohibited due to fire risk.",
    },

    running_allowed: {
      question: "Is running allowed on site?",
      choices: ["Yes", "No", "Only in emergencies"],
      why: "Running is prohibited for safety reasons.",
    },

    alcohol_drugs: {
      question: "Are alcohol or drugs allowed on site?",
      choices: ["Yes", "Only during breaks", "No"],
      why: "Alcohol and drugs are strictly prohibited.",
    },

    emergency_number: {
      question: "What emergency number can be called in France?",
      choices: ["118-218", "15 or 112", "17"],
      why: "15 or 112 can be called for emergencies in France.",
    },

    machine_distance: {
      question: "What should drivers avoid near machines?",
      choices: [
        "Getting too close to machines",
        "Wearing PPE",
        "Using mirrors",
      ],
      why: "Drivers must avoid dangerous proximity to machines.",
    },

    tautliner_arrimage_equipment: {
      question: "What equipment must be used with a tautliner?",
      choices: [
        "Suitable securing equipment",
        "Only a rope",
        "No equipment if the trip is short",
      ],
      why: "Suitable securing equipment must be used to secure the load.",
    },

    tautliner_no_trailer_climbing: {
      question: "Can the driver climb into the trailer during loading?",
      choices: ["Yes", "With permission", "No"],
      why: "Climbing into the trailer during loading is prohibited.",
    },

    tautliner_check_after_distance: {
      question: "When should the load securing be checked?",
      choices: [
        "Only on arrival",
        "After a few kilometers",
        "Never if the load seems stable",
      ],
      why: "Load securing must be checked after a few kilometers.",
    },

    tailgate_platform_check: {
      question: "What must be checked before using the tail lift?",
      choices: [
        "That the platform is clear and stable",
        "Only that the engine is off",
        "That the doors are open",
      ],
      why: "The tail lift area must be clear and stable before use.",
    },

    tailgate_under_platform: {
      question: "Can people stand under the tail lift?",
      choices: ["Yes", "No", "Only for a few seconds"],
      why: "Standing under the tail lift is dangerous and prohibited.",
    },

    tailgate_last_row: {
      question: "Which part of the load must be secured?",
      choices: [
        "The last row",
        "Only the top of the load",
        "None if the doors close",
      ],
      why: "The last row of the load must be secured.",
    },

    ampliroll_clear_area: {
      question: "What must be checked before handling a skip or container?",
      choices: [
        "That the area is clear",
        "That another truck is nearby",
        "That the driver is inside the container",
      ],
      why: "The handling area must be clear before any operation.",
    },

    ampliroll_hook_only: {
      question: "How must the skip or container be handled?",
      choices: [
        "With side chains",
        "Only by the hook",
        "By pushing it with the vehicle",
      ],
      why: "The skip or container must only be handled by the hook.",
    },

    ampliroll_raised_container: {
      question: "Can the truck move with the skip raised?",
      choices: ["Yes", "No", "Only if empty"],
      why: "Moving with a raised skip is prohibited and dangerous.",
    },

    multi_chains_wheel_chocks: {
      question: "What must be positioned before uncoupling?",
      choices: [
        "Two wheel chocks at the front and rear of a wheel",
        "One chock behind the truck",
        "No chock if the ground is flat",
      ],
      why: "Two wheel chocks must be placed at the front and rear of a wheel.",
    },

    multi_chains_tension: {
      question: "What must be checked on the chains?",
      choices: [
        "That they are lying on the ground",
        "That they are loose",
        "That they are correctly tensioned",
      ],
      why: "The chains must be correctly tensioned to secure the skip.",
    },

    multi_chains_safe_distance: {
      question: "Where should people stand during operations?",
      choices: [
        "At a safe distance",
        "Under the load",
        "Between the truck and the skip",
      ],
      why: "Nobody must stand under or near a moving load.",
    },
  },
};

export default en;