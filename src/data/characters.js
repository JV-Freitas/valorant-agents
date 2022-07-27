const characters = [
  {
    id: 1,
    name: 'Omen',
    role: 'Controller',
    skills: [
      'Q - PARANOIA',
      'E - MANTO SOMBRIO',
      'C - PASSOS TENEBROSOS',
      'X - SALTO DAS SOMBRAS',
    ],
    bio: 'Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.',
    avatar:
      'https://raw.githubusercontent.com/JV-Freitas/assets/main/valorant-player-valorant-omen-card.png',
    isRadiant: true,
  },
  {
    id: 2,
    name: 'Phoenix',
    role: 'Duelist',
    skills: [
      'Q - BOLA CURVA',
      'E - MÃOS QUENTES',
      'C - LABAREDA',
      'X - RENASCIMENTO',
    ],
    bio: 'Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve.',
    avatar:
      'https://raw.githubusercontent.com/JV-Freitas/assets/main/valorant-player-valorant-phoenix-card.png',
    isRadiant: true,
  },
  {
    id: 3,
    name: 'Sage',
    role: 'Sentinel',
    skills: [
      'Q - ORBE DE LENTIDÃO',
      'E - ORBE CURATIVO',
      'C - ORBE DE BARREIRA',
      'X - RESSURREIÇÃO',
    ],
    bio: 'Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.',
    avatar:
      'https://raw.githubusercontent.com/JV-Freitas/assets/main/valorant-player-valorant-sage-card.png',
    isRadiant: true,
  },
  {
    id: 4,
    name: 'Sova',
    role: 'Iniciator',
    skills: [
      'Q - FLECHA DE CHOQUE',
      'E - FLECHA RASTREADORA',
      'C - DRONE CORUJA',
      'X - FÚRIA DO CAÇADOR',
    ],
    bio: 'Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape.',
    avatar:
      'https://raw.githubusercontent.com/JV-Freitas/assets/main/valorant-player-valorant-sova-card.png',
    isRadiant: false,
  },
  {
    id: 5,
    name: 'Jett',
    role: 'Duelist',
    skills: [
      'Q - CORRENTE ASCENDENTE',
      'E - BRISA DE IMPULSO',
      'C - ERUPÇÃO DAS BRUMAS',
      'X - TORMENTA DE AÇO',
    ],
    bio: 'Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.',
    avatar:
      'https://raw.githubusercontent.com/JV-Freitas/assets/main/valorant-player-valorant-jett-card.png',
    isRadiant: true,
  },
  {
    id: 6,
    name: 'KillJoy',
    role: 'Sentinel',
    skills: [
      'Q - ROBÔ DE ALARME',
      'E - TORRETA',
      'C - NANOENXAME',
      'X - CONFINAMENTO',
    ],
    bio: 'Killjoy, uma alemã genial, defende o campo de batalha facilmente usando seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs dão conta do recado.',
    avatar:
      'https://raw.githubusercontent.com/JV-Freitas/assets/main/valorant-player-valorant-killjoy-card.png',
    isRadiant: false,
  },
  {
    id: 7,
    name: 'Brimstone',
    role: 'Controller',
    skills: [
      'Q - INCENDIÁRIO',
      'E - FUMAÇA CELESTE',
      'C - SINALIZADOR ESTIMULANTE',
      'X - ATAQUE ORBITAL',
    ],
    bio: 'Vindo diretamente dos EUA, o arsenal orbital de Brimstone garante que o esquadrão dele esteja sempre em vantagem. Sua capacidade de oferecer utilidade com precisão a distância faz dele um comandante inigualável na linha de frente.',
    avatar:
      'https://raw.githubusercontent.com/JV-Freitas/assets/main/valorant-player-valorant-brimstone-card.png',
    isRadiant: false,
  },
  {
    id: 8,
    name: 'Raze',
    role: 'Duelist',
    skills: [
      'Q - CARGA DE EXPLOSIVOS',
      'E - CARTUCHOS DE TINTA',
      'C - BUMBA',
      'X - ESTRAGA-PRAZERESr',
    ],
    bio: 'Raze chega do Brasil em uma explosão de carisma e armas letais. Com seu estilo de jogo "porradeiro", ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!',
    avatar:
      'https://raw.githubusercontent.com/JV-Freitas/assets/main/valorant-player-valorant-raze-card.png',
    isRadiant: false,
  },
  {
    id: 9,
    name: 'REYNA',
    role: 'Duelista',
    skills: [
      'C - OLHAR VORAZ',
      'Q - DEVORAR',
      'E - DISPENSAR',
      'X - IMPERATRIZ',
    ],
    bio: 'Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho.',
    avatar:
      'https://raw.githubusercontent.com/JV-Freitas/assets/main/valorant-player-valorant-reyna-card.png',
    isRadiant: true,
  },
  {
    id: 10,
    name: 'Viper',
    role: 'Controladora',
    skills: [
      'Q - NUVEM VENENOSA',
      'E - CORTINA TÓXICA',
      'C - VENENO DE COBRA',
      'X - POÇO PEÇONHENTO',
    ],
    bio: 'Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.',
    avatar:
      'https://raw.githubusercontent.com/JV-Freitas/assets/main/valorant-player-valorant-viper-card.png',
    isRadiant: false,
  },
  {
    id: 11,
    name: 'Skye',
    role: 'Iniciatora',
    skills: [
      'Q - PREDADOR EXPLOSIVO',
      'E - LUZ DESBRAVADORA',
      'C - REFLORESCER',
      'X - RASTREADORES',
    ],
    bio: 'Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada.',
    avatar:
      'https://raw.githubusercontent.com/JV-Freitas/assets/main/valorant-player-valorant-skye-card.png',
    isRadiant: true,
  },
];
export default characters;
