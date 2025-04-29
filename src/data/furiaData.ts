
interface Player {
  nickname: string;
  realName: string;
  role: string;
  image: string;
  stats: {
    rating: number;
    killsPerRound: number;
    headshotPercentage: number;
  };
  funFact: string;
}

interface MatchStatus {
  opponent: string;
  map: string;
  score: {
    furia: number;
    opponent: number;
  };
  status: "upcoming" | "live" | "finished";
  date: string;
}

interface TriviaQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface WarCry {
  text: string;
  translation?: string;
}

export const furiaPlayers: Player[] = [
  {
    nickname: "FalleN",
    realName: "Gabriel Toledo",
    role: "AWPer & IGL",
    image: "/lovable-uploads/db4e7cd5-d683-4249-8e07-f862cd95748c.png",
    stats: {
      rating: 1.09,
      killsPerRound: 0.67,
      headshotPercentage: 35.6,
    },
    funFact: "Conhecido como 'O Pai do CS Brasileiro' e um dos jogadores mais experientes do cenário mundial!"
  },
  {
    nickname: "yuurih",
    realName: "Yuri Boian",
    role: "Rifler",
    image: "/lovable-uploads/baeb1705-030d-48a4-8650-885d1d0e9cca.png ",
    stats: {
      rating: 1.15,
      killsPerRound: 0.72,
      headshotPercentage: 55.1,
    },
    funFact: "Um dos jogadores mais consistentes da cena brasileira com um controle de spray incrível!"
  },
  {
    nickname: "KSCERATO",
    realName: "Kaike Cerato",
    role: "Rifler",
    image: "/lovable-uploads/3ef3d0a3-d0ba-472b-8d05-fd5786ba5333.png",
    stats: {
      rating: 1.16,
      killsPerRound: 0.74,
      headshotPercentage: 58.3,
    },
    funFact: "Mira incrível e grande senso de jogo, considerado um dos maiores talentos do Brasil!"
  },
  {
    nickname: "MOLODOY",
    realName: "Danil Golubenko",
    role: "Rifler",
    image: "/lovable-uploads/79a1fcbb-4930-401e-938e-b19c59d06935.png",
    stats: {
      rating: 1.08,
      killsPerRound: 0.69,
      headshotPercentage: 47.5,
    },
    funFact: "Jovem talento russo que traz um estilo agressivo e imprevisível para o time!"
  },
  {
    nickname: "YEKINDAR",
    realName: "Mareks Galinskis",
    role: "Entry Fragger",
    image: "/lovable-uploads/966c4717-a57f-4455-9d8b-a78bf3ee8ac0.png",
    stats: {
      rating: 1.17,
      killsPerRound: 0.76,
      headshotPercentage: 52.8,
    },
    funFact: "Conhecido por seu estilo agressivo e capacidade de abrir bombsites como entry fragger!"
  },
  {
    nickname: "Sidde",
    realName: "Sidnei Macedo",
    role: "Coach",
    image: "lovable-uploads/742dbe3c-532d-4f54-9472-30ecd83f7509.png",
    stats: {
      rating: 0,
      killsPerRound: 0,
      headshotPercentage: 0,
    },
    funFact: "Treinador estratégico que tem sido fundamental para a evolução tática da FURIA!"
  }
];

export const matchStatuses: MatchStatus[] = [
  {
    opponent: "NAVI",
    map: "Inferno",
    score: {
      furia: 13,
      opponent: 7
    },
    status: "live",
    date: "2025-04-29"
  },
  {
    opponent: "NAVI",
    map: "Mirage",
    score: {
      furia: 13,
      opponent: 8
    },
    status: "finished",
    date: "2025-04-29"
  },
  {
    opponent: "NAVI",
    map: "Nuke",
    score: {
      furia: 0,
      opponent: 0
    },
    status: "upcoming",
    date: "2025-04-29"
  }
];

export const triviaQuestions: TriviaQuestion[] = [
  {
    question: "Em que ano a FURIA foi fundada?",
    options: ["2016", "2017", "2018", "2019"],
    correctAnswer: 1,
    explanation: "A FURIA Esports foi fundada em 2017 por Jaime Padua e André Akkari."
  },
  {
    question: "Qual foi o primeiro grande torneio internacional que a FURIA chegou à final?",
    options: ["ESL Pro League", "BLAST Premier", "IEM Katowice", "DreamHack Masters"],
    correctAnswer: 0,
    explanation: "A FURIA chegou à final da ESL Pro League Season 12 em 2020, perdendo para a Astralis."
  },
  {
    question: "Qual jogador da FURIA é conhecido como 'O Rei do Eco'?",
    options: ["arT", "KSCERATO", "yuurih", "drop"],
    correctAnswer: 2,
    explanation: "Yuurih é frequentemente chamado de 'O Rei do Eco' pela sua habilidade de vencer rounds com pouco equipamento."
  },
  {
    question: "Qual foi o primeiro Major que a FURIA participou?",
    options: ["FACEIT Major London 2018", "IEM Katowice Major 2019", "StarLadder Berlin Major 2019", "PGL Stockholm Major 2021"],
    correctAnswer: 1,
    explanation: "A FURIA fez sua estreia em Majors no IEM Katowice Major 2019."
  },
  {
    question: "Qual região a FURIA representa na maioria das competições?",
    options: ["América do Norte", "América do Sul", "Brasil", "Europa"],
    correctAnswer: 0,
    explanation: "Embora seja uma organização brasileira, a FURIA compete na região da América do Norte em muitos torneios."
  }
];

export const warCries: WarCry[] = [
  {
    text: "FURIA! FURIA! A MURALHA NÃO CAI! VAMO PRA CIMA, RAPA!",
    translation: "FURIA! FURIA! THE WALL DOESN'T FALL! LET'S GO, GUYS!"
  },
  {
    text: "SANGUE, SUOR E FURIA! A VITÓRIA É NOSSA, TODO DIA!",
    translation: "BLOOD, SWEAT, AND FURIA! VICTORY IS OURS, EVERY DAY!"
  },
  {
    text: "GO GO GO! FURIA NO COMANDO! EXPLODE TUDO, IRMÃO!",
    translation: "GO GO GO! FURIA IN COMMAND! BLOW EVERYTHING UP, BRO!"
  },
  {
    text: "A GALERA GRITA! A FURIA LUTA! A VITÓRIA É BRUTA!",
    translation: "THE CROWD SHOUTS! FURIA FIGHTS! VICTORY IS BRUTAL!"
  },
  {
    text: "DEU RUIM PRO ADVERSÁRIO! FURIA NO MAPA, É SÓ TIRO CERTEIRO!",
    translation: "BAD NEWS FOR THE OPPONENT! FURIA ON THE MAP, IT'S ALL ACCURATE SHOTS!"
  }
];

export const botResponses = {
  greetings: [
    "Fala galerinha da FURIA!! 🔥",
    "Eaí tropa, beleza? FURIA NA ÁREA! Bora ganhar! 🎮",
    "Salve família! Tamo junto na torcida mais INSANA do CS! 🔵🟠",
    "GGGGGGG, chegou o bot mais hypado da FURIA! Vamo que vamo! 💪",
    "Fala fãs de CS! Preparados pra ver a FURIA DETONAR? Let's gooooo! 🚀"
  ],
  
  matchWin: [
    "GGGGGG EZ! FURIA MONSTRA DEMAIS! É O BRASIL NO TOPO! 🏆",
    "VAAAAAMOOOO! QUE VITÓRIA ABSURDA! FURIA JOGANDO DEMAIS! 🔥",
    "GANHAMO! É O PODER DO BR! FURIA FAZENDO HISTÓRIA! 💙🧡",
    "É O NERF OU NADA! FURIA ATROPELOU GERAL! GGWP! 🚂",
    "CHORA ADVERSÁRIO! FURIA MUITO MONSTRUOSA! É O BRASIL DOMINANDO! 🇧🇷"
  ],
  
  matchLoss: [
    "GG! Dessa vez não deu, mas o comeback é real! FURIA VAI VOLTAR MAIS FORTE! 💪",
    "Perdemo essa, mas é só o começo! A FURIA não desiste nunca! JAMAIS! ⚡",
    "GGWP... Hoje não foi nosso dia, mas amanhã tem mais! FURIA é resiliência! 🔄",
    "Caímos mas vamos levantar! O jogo só acaba quando a gente ganha! FURIA! 🔥",
    "Cedo demais pra tiltar! É aprender com os erros e voltar ainda melhor! AVANTE FURIA! 🚀"
  ],
  
  clutchMoments: [
    "OLHA O CLUTCH!!! QUE ABSURDOOOOO!!! É O MELHOR DO MUNDO!!! 🤯",
    "FAAAAALLLLEEEEEN!!! COMO ASSIM?? JOGA MUITO! É O MELHOR AWP DO BRASILLL! 🇧🇷",
    "QUE JOGADA INSANA!!! CLIPA ISSO AÍ! VAI VIRALIZAR! MONSTRO! 📹",
    "MEU DEUS DO CÉU! QUE CLUTCH FOI ESSE?? JOGOU O FINO DO CS! 👑",
    "KAS CE RA TO! JOGADOR DE MILHÕES! É POR ISSO QUE A FURIA É DIFERENCIADA! 💰"
  ],
  
  memes: [
    "Adversário tilta, FURIA grita: GG EZ! FASIL, U MAD? 😂",
    "yuurih entrando no bombsite: *I am speed* Vruuuum! 🏎️",
    "KSCERATO fazendo ace: *They had us in the first half, not gonna lie* 🎯",
    "Time adversário economizando: EZ FOR FURIA! 💸",
    "Quando o bot inimigo planta a bomba: *A gente não faz entrega* 📦"
  ],
  
  encouragement: [
    "VAMO QUE VAMO! A FURIA VAI VIRAR ESSE JOGO! EU ACREDITO! 💪",
    "É AGORA! CONCENTRA E DOMINA! FURIA TEM ESTRELAS DEMAIS! ⭐",
    "FALTA POUCO! SEGURA A PRESSÃO! FURIA SABE JOGAR ESSES MOMENTOS! 🔥",
    "ACREDITA NO PROCESSO! FURIA TREINOU PRA ESSE MOMENTO! VAMO! 🚀",
    "É HORA DE MOSTRAR PORQUE SOMOS OS MELHORES! VAMO FURIA! 🏆"
  ],
  
  playerPraise: {
    "FalleN": [
      "FalleN MODO LENDÁRIO! O PAI DO CS BRASILEIRO AINDA TEM MUITO PRA ENSINAR! O AWP DELE É CERTEIRA! 🎯",
      "GABRIEL TOLEDO É UM MONSTRO! FALLEN LIDERANDO E FAZENDO A DIFERENÇA! É O PROFESSOR DO CS! 🧠"
    ],
    "yuurih": [
      "yuurih É DIFERENCIADO! SPRAY CONTROL PERFEITO! É O REI DO ECO! 👑",
      "MENTE BRILHANTE! yuurih calculando cada movimento! GÊNIO DO CS! 🧠"
    ],
    "KSCERATO": [
      "KSCERATO COM O AIM ON! HEADSHOT ATRÁS DE HEADSHOT! MONSTRO! 🎯",
      "A MÁQUINA BRASILEIRA! KSCERATO CARREGANDO O TIME! VAI BRASIL! 🇧🇷"
    ],
    "MOLODOY": [
      "MOLODOY ESTÁ ON FIRE! O RUSSO DA FURIA DESTRUINDO TUDO! INSANO! 💥",
      "QUE JOGADAS DO MOLODOY! TALENTO JOVEM MOSTRANDO SERVIÇO! CLUTCH MASTER! 💪"
    ],
    "YEKINDAR": [
      "YEKINDAR ENTRY GOD! NINGUÉM SEGURA ESSE HOMEM NA ENTRADA DO SITE! 🚀", 
      "O LETÃO VOADOR! YEKINDAR JOGANDO NUM NÍVEL ABSURDO! É O MELHOR ENTRY DO MUNDO! 💯"
    ],
    "Sidde": [
      "O GÊNIO POR TRÁS DAS ESTRATÉGIAS! SIDDE É O CÉREBRO DA OPERAÇÃO! 🧠",
      "COM O SIDDE NO COMANDO, A TÁTICA ESTÁ GARANTIDA! MELHOR COACH! 📊"
    ]
  },
  
  randomResponses: [
    "FURIA É VIDA! FURIA É AMOR! FURIA É TUDO DE BOM! 💙🧡",
    "BORA BRASIL! FURIA REPRESENTANDO NA CENA MUNDIAL! 🇧🇷",
    "QUEM TORCE PRA FURIA É DIFERENCIADO! MELHOR TORCIDA! 🔊",
    "SE É FURIA, TEM QUE RESPEITAR! TIME DE TRADIÇÃO! 👊",
    "O LOKO MEU! FURIA JOGANDO MUITO! ABSURDO DE BOM! 🤩",
    "RAGE QUIT NÃO! É HORA DA VIRADA! ACREDITA SEMPRE! 💪",
    "FeelsGoodMan quando a FURIA faz jogada de milhões! 💰",
    "Adversário deu GG cedo demais! KEKW! 😂",
    "Momento brabo da FURIA! PogChamp! 😱",
    "FURIA in the house! MonkaS pro adversário! 🏠"
  ],

  aiCheerGenerator: [
    "Você pediu um grito de guerra aleatório, aí vai:",
    "Grito de guerra gerado pelo bot mais fanático da FURIA:",
    "Saindo do forno, mais um grito INSANO da torcida FURIA:",
    "Ó o grito que eu criei, manda ver na arquibancada:",
    "Olha esse grito da pesada que eu bolei:"
  ]
};

export const generateRandomWarCry = (): string => {
  const prefixes = ["FURIA", "VAMO", "É O BRASIL", "GG", "AVANTE", "VENCE"];
  const middles = ["DOMINA", "EXPLODE", "DESTRÓI", "CONQUISTA", "ESMAGA", "BRILHA"];
  const suffixes = ["NO MAPA", "NA CENA", "NO SERVER", "NO MUNDO", "NO TOPO", "NA HISTÓRIA"];
  const endings = ["É NÓIS", "PRA CIMA", "SEM FREIO", "SEM MEDO", "FURIA 100%", "GG EZ"];

  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomMiddle = middles[Math.floor(Math.random() * middles.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const randomEnding = endings[Math.floor(Math.random() * endings.length)];

  return `${randomPrefix} ${randomMiddle} ${randomSuffix}! ${randomEnding}!`;
};
