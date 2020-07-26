const tmi = require("tmi.js");

const tens = ["Flygon"];
const nines = [
  "Ampharos",
  "Phanpy",
  "Suicune",
  "Altaria",
  "Snorunt",
  "Spheal",
  "Metagross",
  "Rayquaza",
  "Deoxys",
];
const eights = [
  "Alakazam",
  "Marowak",
  "Lapras",
  "Snorlax",
  "Dragonair",
  "Crobat",
  "Wooper",
  "Steelix",
  "Scizor",
  "Kingdra",
  "Smeargle",
  "Entei",
  "Lugia",
  "Grovyle",
  "Sceptile ",
  "Gardevoir",
  "Masquerain",
  "Ninjask",
  "Aron",
  "Medicham",
  "Sharpedo",
  "Whiscash",
  "Crawdaunt",
  "Lileep",
  "Milotic",
  "Banette",
  "Tropius",
  "Kyogre",
  "Jirachi",
];

const sevens = [
  "Ninetales",
  "Oddish",
  "Venonat",
  "Diglett",
  "Dugtrio",
  "Growlithe ",
  "Farfetch'd",
  "Muk",
  "Shellder",
  "Cubone",
  "Tangela ",
  "Horsea ",
  "Scyther",
  "Magikarp",
  "Gyarados",
  "Vaporeon",
  "Kabutops",
  "Mew",
  "Mewtwo",
  "Cyndaquil",
  "Sentret",
  "Furret",
  "Ledyba",
  "Spinarak",
  "Chinchou",
  "Togepi",
  "Mareep",
  "Azumarill",
  "Hoppip",
  "Aipom",
  "Espeon",
  "Wobbuffet",
  "Gligar",
  "Shuckle",
  "Houndour",
  "Houndoom",
  "Elekid",
  "Magby",
  "Blissey",
  "Tyranitar",
  "Blaziken",
  "Mudkip",
  "Zigzagoon",
  "Dustox",
  "Lotad",
  "Ludicolo",
  "Wingull",
  "Ralts",
  "Breloom",
  "Shedinja",
  "Hariyama",
  "Skitty ",
  "Mawile",
  "Seviper",
  "Cradily",
  "Armaldo",
  "Chimecho",
  "Sealeo",
  "Salamence",
];
const sixs = [
  "Ivysaur",
  "Squirtle",
  "Arbok",
  "Pikachu",
  "Sandshrew",
  "Sandslash",
  "Clefairy",
  "Vulpix",
  "Vileplume",
  "Mankey",
  "Arcanine",
  "Poliwag",
  "Kadabra",
  "Victreebel",
  "Slowpoke",
  "Slowbro",
  "Haunter",
  "Gengar",
  "Exeggutor ",
  "Chansey",
  "Kangaskhan",
  "Staryu",
  "Ditto",
  "Eevee",
  "Porygon",
  "Omanyte",
  "Dratini",
  "Bayleef",
  "Totodile",
  "Pichu",
  "Togetic",
  "Flaaffy",
  "Umbreon",
  "Murkrow",
  "Slowking",
  "Misdreavus",
  "Forretress",
  "Heracross",
  "Octillery",
  "Delibird",
  "Mantine",
  "Porygon2",
  "Raikou",
  "Celebi",
  "Treecko",
  "Torchic",
  "Swampert",
  "Shiftry",
  "Swellow",
  "Surskit",
  "Shroomish",
  "Vigoroth",
  "Whismur",
  "Exploud",
  "Sableye",
  "Lairon",
  "Meditite",
  "Plusle",
  "Minun",
  "Carvanha",
  "Trapinch",
  "Cacturne",
  "Barboach",
  "Claydol",
  "Anorith",
  "Shuppet",
  "Relicanth",
  "Shelgon",
  "Regirock",
  "Registeel",
];

const fives = [
  "Bulbasaur",
  "Wartortle",
  "Beedrill",
  "Ekans",
  "Nidoqueen",
  "Nidoking",
  "Wigglytuff",
  "Zubat",
  "Meowth",
  "Psyduck",
  "Primeape",
  "Poliwhirl",
  "Machamp",
  "Bellsprout",
  "Weepingbel",
  "Graveler",
  "Rapidash",
  "Doduo",
  "Cloyster",
  "Hitmonlee",
  "Seadra",
  "Starmie",
  "Mr.Mime",
  "Pinsir",
  "Jolteon",
  "Articuno",
  "Zapdos",
  "Feraligatr",
  "Xatu",
  "Marill",
  "Skiploom",
  "Dunsparce",
  "Snubbull",
  "Qwilfish",
  "Sneasel",
  "Teddiursa",
  "Swinub",
  "Corsola ",
  "Skarmory",
  "Hitmontop",
  "Ho-Oh",
  "Marshtomp",
  "Nuzleaf",
  "Kirlia",
  "Slakoth",
  "Slaking",
  "Nincada",
  "Loudred",
  "Makuhita",
  "Nosepass",
  "Aggron",
  "Illumise",
  "Gulpin",
  "Wailmer",
  "Numel",
  "Camerupt",
  "Spinda",
  "Cacnea",
  "Lunatone",
  "Feebas",
  "Kecleon",
  "Duskull",
  "Dusclops",
  "Absol",
  "Beldum",
  "Metang",
  "Latias",
  "Latios",
];

const fours = [
  "Venusaur",
  "Butterfree",
  "NidoranMale",
  "Clefable",
  "Parasect",
  "Golduck",
  "Tentacruel",
  "Ponyta",
  "Megnemite ",
  "Magneton",
  "Dodrio",
  "Seel",
  "Gastly",
  "Onix",
  "Hitmonchan",
  "Lickitung",
  "Rhyhorn ",
  "Rhydon",
  "Tauros ",
  "Flareon",
  "Kabuto",
  "Dragonite",
  "Chikorita",
  "Meganium",
  "Noctowl",
  "Ledian",
  "Ariados",
  "Lanturn",
  "Natu",
  "Bellossom",
  "Sudowoodo",
  "Jumpluff",
  "Quagsire",
  "Tyrogue",
  "Miltank",
  "Combusken",
  "Linoone",
  "Beautifly ",
  "Lombre",
  "Seedot",
  "Taillow",
  "Pelipper",
  "Roselia",
  "Wailord",
  "Spoink",
  "Vibrava",
  "Swablu ",
  "Baltoy",
  "Wynaut",
  "Walrein",
  "Clamperl",
  "Bagon",
  "Regice",
  "Groudon",
];
const threes = [
  "Charmander",
  "Charizard",
  "Blastoise",
  "Caterpie",
  "Pidgeotto",
  "Spearow",
  "Raichu",
  "Jigglypuff",
  "Persian",
  "Abra",
  "Tentacool",
  "Golem",
  "Grimer",
  "Electrode",
  "Koffing",
  "Weezing",
  "Electabuzz",
  "Omastar",
  "Typhlosion",
  "Croconaw",
  "Hoothoot",
  "Cleffa",
  "Politoed",
  "Sunkern",
  "Unknown",
  "Girafarig",
  "Pineco",
  "Granbull",
  "Slugma",
  "Magcargo",
  "Larvitar",
  "Poochyena",
  "Mightyena",
  "Wurmple",
  "Delcatty",
  "Electrike",
  "Swalot",
  "Torkoal",
  "Corphish",
  "Glalie",
];

const twos = [
  "Metapod",
  "Kakuna",
  "Pidgey",
  "Pidgeot",
  "Fearow",
  "NidoranFemale",
  "Golbat",
  "Paras",
  "Venomoth",
  "Poliwrath",
  "Machop",
  "Machoke",
  "Dewgong",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Magmar ",
  "Aerodactyl",
  "Moltres",
  "Quilava",
  "Sunflora",
  "Yanma",
  "Ursaring",
  "Piloswine",
  "Remoraid",
  "Donphan",
  "Smoochum",
  "Pupitar",
  "Azurill",
  "Manectric",
  "Grumpig",
  "Zangoose",
  "Solrock",
  "Gorebyss",
];
const ones = [
  "Weedle",
  "Rattata",
  "Nidorina",
  "Nidorino ",
  "Gloom",
  "Geodude",
  "Kingler",
  "Voltorb",
  "Exeggcute",
  "Seaking",
  "Jynx",
  "Castform",
  "Huntail",
  "Luvdisc",
];
const zeros = [
  "Charmeleon",
  "Raticate",
  "Goldeen",
  "Igglybuff",
  "Stantler",
  "Silcoon",
  "Cascoon",
  "Volbeat",
];

const tensLower = tens.map((ten) => ten.toLowerCase());
const ninesLower = nines.map((nine) => nine.toLowerCase());
const eightsLower = eights.map((eight) => eight.toLowerCase());
const sevensLower = sevens.map((seven) => seven.toLowerCase());
const sixsLower = sixs.map((six) => six.toLowerCase());
const fivesLower = fives.map((five) => five.toLowerCase());
const foursLower = fours.map((four) => four.toLowerCase());
const threesLower = threes.map((three) => three.toLowerCase());
const twosLower = twos.map((two) => two.toLowerCase());
const onesLower = ones.map((one) => one.toLowerCase());
const zerosLower = zeros.map((zero) => zero.toLowerCase());

// Define configuration options
const opts = {
  identity: {
    username: "[BOT_USERNAME]",
    password: "[OAUTH]",
  },
  channels: ["julianpags"],
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const trimmedString = msg.trim().toLowerCase();
  const commandName = trimmedString
    .substr(0, trimmedString.indexOf(" "))
    .toLowerCase(); // "72"
  const poke = trimmedString
    .substr(trimmedString.indexOf(" ") + 1)
    .toLowerCase(); // "tocirah sneab"
  // If the command is known, let's execute it

  if (commandName === "!pokerate") {
    const rating = getRating(poke);
    if (rating === undefined) {
      console.log(`* Unknown poke ${self}`);
      client.say(
        target,
        `hi @${context.username}, check the spelling "${poke}" doesn't seem to be in my belly`
      );
    } else {
      client.say(
        target,
        `hi @${context.username}, julian rated ${poke} a ${rating}`
      );
      console.log(
        `* Executed ${commandName} command, context ${JSON.stringify(context)}`
      );
    }
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}
// Function called when the "dice" command is issued
function getRating(pokeInput) {
  if (tensLower.includes(pokeInput)) {
    return 10;
  }
  if (ninesLower.includes(pokeInput)) {
    return 9;
  }
  if (eightsLower.includes(pokeInput)) {
    return 8;
  }
  if (sevensLower.includes(pokeInput)) {
    return 7;
  }
  if (sixsLower.includes(pokeInput)) {
    return 6;
  }
  if (fivesLower.includes(pokeInput)) {
    return 5;
  }
  if (foursLower.includes(pokeInput)) {
    return 4;
  }
  if (threesLower.includes(pokeInput)) {
    return 3;
  }
  if (twosLower.includes(pokeInput)) {
    return 2;
  }
  if (onesLower.includes(pokeInput)) {
    return 1;
  }
  if (zerosLower.includes(pokeInput)) {
    return 0;
  }
  return undefined;
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
