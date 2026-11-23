// =====================================================
// datos.js  ->  aqui viven los DATOS (arrays y objetos)
// Cap. 2: variables, arrays   |   Cap. 3: objetos
// =====================================================

// ---- Verbo del dia: un array de OBJETOS (cada verbo tiene propiedades)
var verbosDelDia = [
  { infinitivo: "Be",     pasado: "Was / Were", participio: "Been",     significado: "Ser / estar" },
  { infinitivo: "Begin",  pasado: "Began",      participio: "Begun",    significado: "Empezar" },
  { infinitivo: "Break",  pasado: "Broke",      participio: "Broken",   significado: "Romper" },
  { infinitivo: "Bring",  pasado: "Brought",    participio: "Brought",  significado: "Traer, llevar" },
  { infinitivo: "Buy",    pasado: "Bought",     participio: "Bought",   significado: "Comprar" },
  { infinitivo: "Choose", pasado: "Chose",      participio: "Chosen",   significado: "Elegir" },
  { infinitivo: "Come",   pasado: "Came",       participio: "Come",     significado: "Venir" },
  { infinitivo: "Drink",  pasado: "Drank",      participio: "Drunk",    significado: "Beber" },
  { infinitivo: "Eat",    pasado: "Ate",        participio: "Eaten",    significado: "Comer" },
  { infinitivo: "Go",     pasado: "Went",       participio: "Gone",     significado: "Ir" },
  { infinitivo: "Know",   pasado: "Knew",       participio: "Known",    significado: "Saber, conocer" },
  { infinitivo: "Make",   pasado: "Made",       participio: "Made",     significado: "Hacer" },
  { infinitivo: "See",    pasado: "Saw",        participio: "Seen",     significado: "Ver" },
  { infinitivo: "Speak",  pasado: "Spoke",      participio: "Spoken",   significado: "Hablar" },
  { infinitivo: "Write",  pasado: "Wrote",      participio: "Written",  significado: "Escribir" }
];

// ---- Phrasal verbs (los mismos de la tabla original, ahora en un array)
var phrasalVerbs = [
  { frase: "Look after",      significado: "Cuidar de alguien o algo." },
  { frase: "Look for",        significado: "Buscar algo o a alguien." },
  { frase: "Look forward to", significado: "Esperar con ansias algo que va a suceder." },
  { frase: "Look into",       significado: "Investigar o examinar algo." },
  { frase: "Look out",        significado: "Tener cuidado o estar alerta ante un peligro." },
  { frase: "Turn down",       significado: "Rechazar una oferta o petición." },
  { frase: "Turn up",         significado: "Aparecer o llegar a un lugar." },
  { frase: "Turn off",        significado: "Apagar un dispositivo o una luz." },
  { frase: "Turn on",         significado: "Encender un dispositivo o una luz." },
  { frase: "Give away",       significado: "Traicionar a alguien." },
  { frase: "Pick up",         significado: "Recoger o levantar algo." },
  { frase: "Carry away",      significado: "Dejarse llevar por una emoción o sensación." }
];

// ---- Pasados irregulares para el conjugador (array de arrays: [infinitivo, pasado])
var pasadosIrregulares = [
  ["be", "was / were"], ["buy", "bought"], ["come", "came"], ["do", "did"],
  ["drink", "drank"], ["eat", "ate"], ["get", "got"], ["give", "gave"],
  ["go", "went"], ["have", "had"], ["know", "knew"], ["make", "made"],
  ["read", "read"], ["run", "ran"], ["say", "said"], ["see", "saw"],
  ["sleep", "slept"], ["speak", "spoke"], ["swim", "swam"], ["take", "took"],
  ["teach", "taught"], ["think", "thought"], ["write", "wrote"]
];

// ---- Banco de preguntas de los quizzes (objeto con un array por tema)
// La respuesta va en minusculas porque el programa convierte lo que escribes a minusculas.
var bancoPreguntas = {
  presentSimple: [
    { pregunta: "She ___ (work) at Google.",                      respuesta: "works" },
    { pregunta: "I usually ___ (wake) up at 7 am.",               respuesta: "wake" },
    { pregunta: "He ___ (teach) history at the local school.",    respuesta: "teaches" },
    { pregunta: "Water ___ (boil) at 100 degrees Celsius.",       respuesta: "boils" },
    { pregunta: "They ___ (drink) coffee at breakfast.",          respuesta: "drink" }
  ],
  presentContinuous: [
    { pregunta: "I ___ (study) English right now.",                    respuesta: "am studying" },
    { pregunta: "They ___ (play) in the park.",                        respuesta: "are playing" },
    { pregunta: "She ___ (stay) with her friends this week.",          respuesta: "is staying" },
    { pregunta: "He ___ (work) on a new project this month.",          respuesta: "is working" },
    { pregunta: "We ___ (read) a book at the moment.",                 respuesta: "are reading" }
  ],
  pastSimple: [
    { pregunta: "I ___ (visit) my grandparents last weekend.",         respuesta: "visited" },
    { pregunta: "She ___ (live) in London when she was a child.",      respuesta: "lived" },
    { pregunta: "We ___ (play) tennis every Sunday last year.",        respuesta: "played" },
    { pregunta: "I ___ (go) to school yesterday.",                     respuesta: "went" },
    { pregunta: "He ___ (eat) pizza last night.",                      respuesta: "ate" }
  ],
  pastContinuous: [
    { pregunta: "At 8 pm yesterday, I ___ (watch) TV.",                respuesta: "was watching" },
    { pregunta: "They ___ (play) football at 5 o'clock.",              respuesta: "were playing" },
    { pregunta: "She ___ (cook) when the phone rang.",                 respuesta: "was cooking" },
    { pregunta: "While I ___ (study), my brother was sleeping.",       respuesta: "was studying" },
    { pregunta: "We ___ (walk) in the park when it started to rain.",  respuesta: "were walking" }
  ],
  // En este quiz solo escribes: will   o   going to
  future: [
    { pregunta: "Look at those dark clouds! It ___ rain.  (will / going to)",                 respuesta: "going to" },
    { pregunta: "I'm thirsty. I ___ get a glass of water.  (will / going to)",                respuesta: "will" },
    { pregunta: "I already bought the tickets. I ___ visit my parents.  (will / going to)",   respuesta: "going to" },
    { pregunta: "I think artificial intelligence ___ change the world.  (will / going to)",   respuesta: "will" },
    { pregunta: "I promise I ___ help you tomorrow.  (will / going to)",                      respuesta: "will" }
  ]
};
