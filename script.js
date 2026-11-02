/* ============================================================
   POKÉDEX COMPLETA — 1025 espécies, 9 regiões (gerações 1–9)
   ============================================================ */
const POKEMON_NAMES = [
"Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew",
"Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking","Misdreavus","Unown","Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma","Magcargo","Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom","Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop","Smoochum","Elekid","Magby","Miltank","Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-Oh","Celebi",
"Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud","Makuhita","Hariyama","Azurill","Nosepass","Skitty","Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric","Plusle","Minun","Volbeat","Illumise","Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord","Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish","Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo","Feebas","Milotic","Castform","Kecleon","Shuppet","Banette","Duskull","Dusclops","Tropius","Chimecho","Absol","Wynaut","Snorunt","Glalie","Spheal","Sealeo","Walrein","Clamperl","Huntail","Gorebyss","Relicanth","Luvdisc","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys",
"Turtwig","Grotle","Torterra","Chimchar","Monferno","Infernape","Piplup","Prinplup","Empoleon","Starly","Staravia","Staraptor","Bidoof","Bibarel","Kricketot","Kricketune","Shinx","Luxio","Luxray","Budew","Roserade","Cranidos","Rampardos","Shieldon","Bastiodon","Burmy","Wormadam","Mothim","Combee","Vespiquen","Pachirisu","Buizel","Floatzel","Cherubi","Cherrim","Shellos","Gastrodon","Ambipom","Drifloon","Drifblim","Buneary","Lopunny","Mismagius","Honchkrow","Glameow","Purugly","Chingling","Stunky","Skuntank","Bronzor","Bronzong","Bonsly","Mime Jr.","Happiny","Chatot","Spiritomb","Gible","Gabite","Garchomp","Munchlax","Riolu","Lucario","Hippopotas","Hippowdon","Skorupi","Drapion","Croagunk","Toxicroak","Carnivine","Finneon","Lumineon","Mantyke","Snover","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade","Probopass","Dusknoir","Froslass","Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus",
"Victini","Snivy","Servine","Serperior","Tepig","Pignite","Emboar","Oshawott","Dewott","Samurott","Patrat","Watchog","Lillipup","Herdier","Stoutland","Purrloin","Liepard","Pansage","Simisage","Pansear","Simisear","Panpour","Simipour","Munna","Musharna","Pidove","Tranquill","Unfezant","Blitzle","Zebstrika","Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill","Audino","Timburr","Gurdurr","Conkeldurr","Tympole","Palpitoad","Seismitoad","Throh","Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede","Scolipede","Cottonee","Whimsicott","Petilil","Lilligant","Basculin","Sandile","Krokorok","Krookodile","Darumaka","Darmanitan","Maractus","Dwebble","Crustle","Scraggy","Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna","Vanillite","Vanillish","Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed","Ferrothorn","Klink","Klang","Klinklang","Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic","Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard","Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino","Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem","Keldeo","Meloetta","Genesect",
"Chespin","Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder","Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","Flabébé","Floette","Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou","Espurr","Meowstic","Honedge","Doublade","Aegislash","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle","Skrelp","Dragalge","Clauncher","Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura","Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant","Pumpkaboo","Gourgeist","Bergmite","Avalugg","Noibat","Noivern","Xerneas","Yveltal","Zygarde","Diancie","Hoopa","Volcanion",
"Rowlet","Dartrix","Decidueye","Litten","Torracat","Incineroar","Popplio","Brionne","Primarina","Pikipek","Trumbeak","Toucannon","Yungoos","Gumshoos","Grubbin","Charjabug","Vikavolt","Crabrawler","Crabominable","Oricorio","Cutiefly","Ribombee","Rockruff","Lycanroc","Wishiwashi","Mareanie","Toxapex","Mudbray","Mudsdale","Dewpider","Araquanid","Fomantis","Lurantis","Morelull","Shiinotic","Salandit","Salazzle","Stufful","Bewear","Bounsweet","Steenee","Tsareena","Comfey","Oranguru","Passimian","Wimpod","Golisopod","Sandygast","Palossand","Pyukumuku","Type: Null","Silvally","Minior","Komala","Turtonator","Togedemaru","Mimikyu","Bruxish","Drampa","Dhelmise","Jangmo-o","Hakamo-o","Kommo-o","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Cosmog","Cosmoem","Solgaleo","Lunala","Nihilego","Buzzwole","Pheromosa","Xurkitree","Celesteela","Kartana","Guzzlord","Necrozma","Magearna","Marshadow","Poipole","Naganadel","Stakataka","Blacephalon","Zeraora","Meltan","Melmetal",
"Grookey","Thwackey","Rillaboom","Scorbunny","Raboot","Cinderace","Sobble","Drizzile","Inteleon","Skwovet","Greedent","Rookidee","Corvisquire","Corviknight","Blipbug","Dottler","Orbeetle","Nickit","Thievul","Gossifleur","Eldegoss","Wooloo","Dubwool","Chewtle","Drednaw","Yamper","Boltund","Rolycoly","Carkol","Coalossal","Applin","Flapple","Appletun","Silicobra","Sandaconda","Cramorant","Arrokuda","Barraskewda","Toxel","Toxtricity","Sizzlipede","Centiskorch","Clobbopus","Grapploct","Sinistea","Polteageist","Hatenna","Hattrem","Hatterene","Impidimp","Morgrem","Grimmsnarl","Obstagoon","Perrserker","Cursola","Sirfetch'd","Mr. Rime","Runerigus","Milcery","Alcremie","Falinks","Pincurchin","Snom","Frosmoth","Stonjourner","Eiscue","Indeedee","Morpeko","Cufant","Copperajah","Dracozolt","Arctozolt","Dracovish","Arctovish","Duraludon","Dreepy","Drakloak","Dragapult","Zacian","Zamazenta","Eternatus","Kubfu","Urshifu","Zarude","Regieleki","Regidrago","Glastrier","Spectrier","Calyrex","Wyrdeer","Kleavor","Ursaluna","Basculegion","Sneasler","Overqwil","Enamorus",
"Sprigatito","Floragato","Meowscarada","Fuecoco","Crocalor","Skeledirge","Quaxly","Quaxwell","Quaquaval","Lechonk","Oinkologne","Tarountula","Spidops","Nymble","Lokix","Pawmi","Pawmo","Pawmot","Tandemaus","Maushold","Fidough","Dachsbun","Smoliv","Dolliv","Arboliva","Squawkabilly","Nacli","Naclstack","Garganacl","Charcadet","Armarouge","Ceruledge","Tadbulb","Bellibolt","Wattrel","Kilowattrel","Maschiff","Mabosstiff","Shroodle","Grafaiai","Bramblin","Brambleghast","Toedscool","Toedscruel","Klawf","Capsakid","Scovillain","Rellor","Rabsca","Flittle","Espathra","Tinkatink","Tinkatuff","Tinkaton","Wiglett","Wugtrio","Bombirdier","Finizen","Palafin","Varoom","Revavroom","Cyclizar","Orthworm","Glimmet","Glimmora","Greavard","Houndstone","Flamigo","Cetoddle","Cetitan","Veluza","Dondozo","Tatsugiri","Annihilape","Clodsire","Farigiraf","Dudunsparce","Kingambit","Great Tusk","Scream Tail","Brute Bonnet","Flutter Mane","Slither Wing","Sandy Shocks","Iron Treads","Iron Bundle","Iron Hands","Iron Jugulis","Iron Moth","Iron Thorns","Frigibax","Arctibax","Baxcalibur","Gimmighoul","Gholdengo","Wo-Chien","Chien-Pao","Ting-Lu","Chi-Yu","Roaring Moon","Iron Valiant","Koraidon","Miraidon","Walking Wake","Iron Leaves","Dipplin","Poltchageist","Sinistcha","Okidogi","Munkidori","Fezandipiti","Ogerpon","Archaludon","Hydrapple","Gouging Fire","Raging Bolt","Iron Boulder","Iron Crown","Terapagos","Pecharunt"
];

const GEN_RANGES = [
  {gen:0, start:1,   end:151, region:0, name:"Kanto"},
  {gen:1, start:152, end:251, region:1, name:"Johto"},
  {gen:2, start:252, end:386, region:2, name:"Hoenn"},
  {gen:3, start:387, end:493, region:3, name:"Sinnoh"},
  {gen:4, start:494, end:649, region:4, name:"Unova"},
  {gen:5, start:650, end:721, region:5, name:"Kalos"},
  {gen:6, start:722, end:809, region:6, name:"Alola"},
  {gen:7, start:810, end:905, region:7, name:"Galar"},
  {gen:8, start:906, end:1025, region:8, name:"Paldea"}
];

const TYPE_TABLE = ["Planta","Fogo","Água","Inseto","Normal","Voador","Veneno","Elétrico","Terra","Fada","Lutador","Psíquico","Pedra","Aço","Gelo","Fantasma","Dragão","Sombrio"];

const LEGENDARY_IDS = new Set([
  144,145,146,150,243,244,245,249,250,251,377,378,379,380,381,382,383,384,385,386,
  480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,
  638,639,640,641,642,643,644,645,646,647,648,649,
  716,717,718,719,720,721,772,773,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,
  888,889,890,891,892,893,894,895,896,897,898,905,
  984,985,986,987,988,989,990,991,992,993,994,995,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1014,1015,1016,1017,1020,1021,1022,1023,1024,1025
]);
const MYTHICAL_IDS = new Set([151,251,385,386,489,490,491,492,493,494,647,648,649,719,720,721,801,802,807,808,809,893,1025]);

function rarityForId(id){
  if(MYTHICAL_IDS.has(id)) return "Mítico";
  if(LEGENDARY_IDS.has(id)) return "Lendário";
  if(id <= 151) return id % 7 === 0 ? "Raro" : id % 3 === 0 ? "Incomum" : "Comum";
  if(id <= 251) return id % 9 === 0 ? "Épico" : id % 5 === 0 ? "Raro" : id % 2 === 0 ? "Incomum" : "Comum";
  if(id <= 493) return id % 11 === 0 ? "Épico" : id % 6 === 0 ? "Raro" : id % 2 === 0 ? "Incomum" : "Comum";
  if(id <= 809) return id % 13 === 0 ? "Épico" : id % 7 === 0 ? "Raro" : id % 2 === 0 ? "Incomum" : "Comum";
  return id % 15 === 0 ? "Épico" : id % 8 === 0 ? "Raro" : id % 2 === 0 ? "Incomum" : "Comum";
}
function baseForRarity(r){return {Comum:1,Incomum:2,Raro:4,Épico:8,Lendário:18,Mítico:35}[r] || 1}
function regionForId(id){for(const g of GEN_RANGES) if(id >= g.start && id <= g.end) return g.region; return 8}

const POKEMON = POKEMON_NAMES.map((name, i) => {
  const id = i + 1;
  const rarity = rarityForId(id);
  const region = regionForId(id);
  const typeA = TYPE_TABLE[id % TYPE_TABLE.length];
  const typeB = TYPE_TABLE[(id * 3 + 5) % TYPE_TABLE.length];
  const type = typeA === typeB ? typeA : `${typeA} / ${typeB}`;
  return {id,name,rarity,region,desc:`Pokémon #${String(id).padStart(4,"0")} da Pokédex Nacional.`,type,base:baseForRarity(rarity)};
});

const MON_BY_ID = new Map(POKEMON.map(p => [p.id, p]));

const RARITY={
  Comum:{color:"#aab3c2",weight:52},
  Incomum:{color:"#6bd69d",weight:25},
  Raro:{color:"#68baf2",weight:13},
  Épico:{color:"#bd8cff",weight:7},
  Lendário:{color:"#f4c866",weight:2.5},
  Mítico:{color:"#f28bbd",weight:.5}
};

const WORLDS = GEN_RANGES.map(g => ({
  name: g.name,
  emoji: ["🌿","🌸","🌊","⛰️","🏙️","🎨","🏝️","🏰","🫒"][g.gen],
  desc: `Geração ${g.gen+1} • Pokémon #${g.start}–#${g.end}`,
  cost: g.gen === 0 ? 0 : Math.floor(1000 * Math.pow(2.6, g.gen - 1)),
  colors: [["#315c55","#273b4c"],["#684b72","#303d64"],["#2e5c7a","#223a55"],["#5c4a2e","#3a2e1f"],["#4a4a5c","#2b2b3d"],["#7a4a5c","#3d2230"],["#7a5c2e","#3d301f"],["#4a2e5c","#2b1f3d"],["#5c7a2e","#2e3d1f"]][g.gen] || ["#315c55","#273b4c"]
}));

const UPGRADES=[
 {id:"click",name:"Toque poderoso",desc:"Aumenta as moedas recebidas a cada clique.",icon:"👆",base:100,scale:1.75,effect:"+1 moeda por nível"},
 {id:"auto",name:"Parceiro trabalhador",desc:"Gera moedas automaticamente a cada segundo.",icon:"⚙️",base:250,scale:1.8,effect:"+2 moedas por segundo"},
 {id:"luck",name:"Amuleto da sorte",desc:"Melhora a chance de encontrar raridades altas.",icon:"🍀",base:500,scale:2,effect:"+8% de sorte por nível"},
 {id:"egg",name:"Incubadora avançada",desc:"Reduz o custo dos ovos misteriosos.",icon:"🥚",base:700,scale:1.9,effect:"Ovos mais baratos"}
];

/* ===== LOJA DE GEMAS ===== */
const GEM_UPGRADES = [
  {id:"gemClick",  name:"Punho de diamante", desc:"Aumenta o poder de clique em +5 por nível.",       icon:"💎", base:3, scale:1.8, effect:"+5 força por nível"},
  {id:"gemCps",    name:"Ritmo de safira",   desc:"Gera +3 moedas por segundo por nível.",              icon:"🔷", base:5, scale:1.9, effect:"+3 CPS por nível"},
  {id:"gemLuck",   name:"Estrela rúnica",    desc:"Aumenta a sorte em +15% por nível.",                  icon:"🌟", base:4, scale:1.85,effect:"+15% sorte por nível"},
  {id:"gemShiny",  name:"Aura prismática",   desc:"Aumenta a chance de Pokémon shiny por nível.",        icon:"✨", base:8, scale:2,   effect:"+0.5% shiny por nível"},
  {id:"gemPower",  name:"Coração de campeão",desc:"Aumenta a força base na arena em +10 por nível.",     icon:"🏆", base:10,scale:2.2, effect:"+10 arena por nível"}
];

/* ===== EVENTOS SAZONAIS ===== */
const EVENTS = [
  {
    id:"halloween", name:"Halloween Assombrado", emoji:"🎃",
    desc:"Criaturas assustadoras invadiram o jogo! Capture antes que a noite acabe.",
    start:{m:10,d:1}, end:{m:11,d:2},
    color:["#4a1f3d","#1f0f2e"],
    pokemon:[
      {id:355, name:"Duskull",  rarity:"Épico", type:"Fantasma",     desc:"Um Pokémon fantasma do evento Halloween.", base:8},
      {id:356, name:"Dusclops", rarity:"Épico", type:"Fantasma",     desc:"Evolução sombria do Duskull.", base:10},
      {id:710, name:"Pumpkaboo",rarity:"Raro",  type:"Fantasma / Planta", desc:"Uma abóbora viva do Halloween.", base:5},
      {id:711, name:"Gourgeist",rarity:"Épico", type:"Fantasma / Planta", desc:"A abóbora gigante do evento.", base:12},
      {id:354, name:"Banette",  rarity:"Raro",  type:"Fantasma",     desc:"Um fantasma vingativo de pelúcia.", base:6}
    ]
  },
  {
    id:"winter", name:"Natal Gelado", emoji:"❄️",
    desc:"Um inverno mágico trouxe criaturas geladas e presentes.",
    start:{m:12,d:15}, end:{m:12,d:31},
    color:["#1f3d5c","#0f1f2e"],
    pokemon:[
      {id:225, name:"Delibird", rarity:"Raro",  type:"Gelo / Voador", desc:"O Pokémon que distribui presentes.", base:6},
      {id:582, name:"Vanillite",rarity:"Comum", type:"Gelo",          desc:"Um sorvete mágico do inverno.", base:2},
      {id:583, name:"Vanillish",rarity:"Raro",  type:"Gelo",          desc:"Evolução do Vanillite.", base:5},
      {id:584, name:"Vanilluxe",rarity:"Épico", type:"Gelo",          desc:"O sorvete gigante do evento.", base:10},
      {id:361, name:"Snorunt",  rarity:"Raro",  type:"Gelo",          desc:"Um duende do gelo.", base:5}
    ]
  },
  {
    id:"summer", name:"Verão Tropical", emoji:"☀️",
    desc:"Sol escaldante e criaturas tropicais na praia.",
    start:{m:1,d:1}, end:{m:3,d:20},
    color:["#5c4a1f","#2e250f"],
    pokemon:[
      {id:183, name:"Marill",   rarity:"Comum", type:"Água / Fada",  desc:"Um Pokémon fofo da praia.", base:2},
      {id:184, name:"Azumarill",rarity:"Raro",  type:"Água / Fada",  desc:"Evolução do Marill.", base:5},
      {id:131, name:"Lapras",   rarity:"Épico", type:"Água / Gelo",  desc:"O barco vivo do verão.", base:10},
      {id:298, name:"Azurill",  rarity:"Comum", type:"Normal / Fada",desc:"O filhote da praia.", base:2},
      {id:320, name:"Wailmer",  rarity:"Raro",  type:"Água",         desc:"Uma baleia bebê tropical.", base:5}
    ]
  },
  {
    id:"spring", name:"Primavera Florida", emoji:"🌸",
    desc:"Flores e criaturas da primavera desabrocham.",
    start:{m:3,d:21}, end:{m:6,d:20},
    color:["#5c2e4a","#2e1f2e"],
    pokemon:[
      {id:406, name:"Budew",   rarity:"Comum", type:"Planta / Veneno",desc:"Um broto florido da primavera.", base:2},
      {id:315, name:"Roselia", rarity:"Raro",  type:"Planta / Veneno",desc:"A rosa primaveril.", base:5},
      {id:407, name:"Roserade",rarity:"Épico", type:"Planta / Veneno",desc:"A rosa madura da primavera.", base:9},
      {id:182, name:"Bellossom",rarity:"Raro", type:"Planta",         desc:"A dançarina das flores.", base:5},
      {id:187, name:"Hoppip",  rarity:"Comum", type:"Planta / Voador",desc:"Uma semente flutuante.", base:2}
    ]
  },
  {
    id:"lunar", name:"Ano Novo Lunar", emoji:"🌙",
    desc:"A lua cheia trouxe criaturas místicas.",
    start:{m:6,d:21}, end:{m:9,d:30},
    color:["#3d2e5c","#1f1f2e"],
    pokemon:[
      {id:173, name:"Cleffa",   rarity:"Comum", type:"Fada",          desc:"Uma estrela do ano novo lunar.", base:2},
      {id:35,  name:"Clefairy", rarity:"Raro",  type:"Fada",          desc:"A fada da lua cheia.", base:5},
      {id:36,  name:"Clefable", rarity:"Épico", type:"Fada",          desc:"A fada madura da lua.", base:9},
      {id:385, name:"Jirachi",  rarity:"Mítico",type:"Aço / Psíquico",desc:"O Pokémon dos desejos.", base:35},
      {id:300, name:"Skitty",   rarity:"Comum", type:"Normal",        desc:"Um gatinho fofo da lua.", base:2}
    ]
  }
];

const EVENT_POKEMON_BY_ID = new Map();
EVENTS.forEach(ev => ev.pokemon.forEach(p => EVENT_POKEMON_BY_ID.set(p.id, p)));

const SAVE_KEY="pokeclicker_save_v1";
const freshState=()=>({
  coins:0,gems:0,
  clickLevel:0,autoLevel:0,luckLevel:0,eggLevel:0,
  gemClickLevel:0,gemCpsLevel:0,gemLuckLevel:0,gemShinyLevel:0,gemPowerLevel:0,
  caught:{1:{count:1,level:1,shiny:false}},
  active:1,world:0,unlocked:[0],
  wins:0,totalClicks:0,totalCaptures:0,shinyCount:0,
  claimedDaily:"",
  missions:{click:false,capture:false,battle:false,collect:false},
  lastSeen:Date.now()
});
let state=loadState(), battleBusy=false, soundOn=true;

function loadState(){try{const s=JSON.parse(localStorage.getItem(SAVE_KEY));return s?{...freshState(),...s}:freshState()}catch{return freshState()}}
function save(){state.lastSeen=Date.now();localStorage.setItem(SAVE_KEY,JSON.stringify(state))}
function imageUrl(id){return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
function getMon(id){return MON_BY_ID.get(Number(id)) || EVENT_POKEMON_BY_ID.get(Number(id))}
function countCaught(){return Object.keys(state.caught).length}

function cps(){
  const base = state.autoLevel*2 + Object.values(state.caught).reduce((n,c)=>n+(c.count?Math.max(0,c.count-1)*.5:0),0);
  return base + state.gemCpsLevel*3;
}
function clickPower(){
  return 1 + state.clickLevel + Math.floor(state.totalCaptures/5) + state.gemClickLevel*5;
}
function shinyChance(){
  return .012 + state.luckLevel*.0008 + state.gemShinyLevel*.005;
}

function format(n){if(n>=1e9)return (n/1e9).toFixed(1)+"B";if(n>=1e6)return (n/1e6).toFixed(1)+"M";if(n>=1e3)return (n/1e3).toFixed(1)+"K";return Math.floor(n).toLocaleString("pt-BR")}
function toast(msg,type=""){const el=document.createElement("div");el.className=`toast ${type}`;el.textContent=msg;document.getElementById("toastWrap").append(el);setTimeout(()=>el.remove(),3000)}
function sound(){if(!soundOn)return;try{const ctx=new(window.AudioContext||window.webkitAudioContext)(),o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.frequency.value=560;o.type="sine";g.gain.setValueAtTime(.05,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.12);o.start();o.stop(ctx.currentTime+.12)}catch{}}

/* Eventos — lógica */
function dateToMMDD(d){return (d.getMonth()+1)*100 + d.getDate()}
function getActiveEvent(){
  const key = dateToMMDD(new Date());
  for(const ev of EVENTS){
    const s = ev.start.m*100 + ev.start.d;
    const e = ev.end.m*100 + ev.end.d;
    if(s <= e){ if(key >= s && key <= e) return {event:ev}; }
    else { if(key >= s || key <= e) return {event:ev}; }
  }
  return null;
}
function nextEventStart(){
  const now = new Date(), key = dateToMMDD(now);
  let best = null, bestDiff = Infinity;
  for(const ev of EVENTS){
    const s = ev.start.m*100 + ev.start.d;
    let start;
    if(s <= key) start = new Date(now.getFullYear()+1, ev.start.m-1, ev.start.d, 0, 0, 0);
    else start = new Date(now.getFullYear(), ev.start.m-1, ev.start.d, 0, 0, 0);
    const diff = start - now;
    if(diff < bestDiff){bestDiff = diff; best = {event:ev, date:start};}
  }
  return best;
}
function eventEndDate(ev){
  const now = new Date();
  const end = new Date(now.getFullYear(), ev.end.m-1, ev.end.d, 23, 59, 59);
  if(end < now) end.setFullYear(end.getFullYear()+1);
  return end;
}
function formatCountdown(ms){
  if(ms <= 0) return {d:0,h:0,m:0,s:0};
  const s = Math.floor(ms/1000);
  return {d:Math.floor(s/86400),h:Math.floor((s%86400)/3600),m:Math.floor((s%3600)/60),s:s%60};
}
function isEventPokemon(id){return EVENT_POKEMON_BY_ID.has(Number(id))}
function eventPokemonList(){const a = getActiveEvent(); return a ? a.event.pokemon : []}
function eventCatchChance(){return getActiveEvent() ? 0.05 : 0}

/* Páginas */
function setPage(name){
 document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===`page-${name}`));
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===name));
 const titles={
  home:["SEU MUNDO, SUA JORNADA","Visão geral"],
  collection:["SUA COLEÇÃO","Minha coleção"],
  capture:["ENCONTRE NOVOS AMIGOS","Capturar"],
  battle:["TESTE SUA EQUIPE","Batalhas"],
  worlds:["EXPLORE O DESCONHECIDO","Regiões"],
  events:["EVENTOS SAZONAIS","Eventos"],
  upgrades:["FIQUE MAIS FORTE","Melhorias"],
  gemstore:["PODER COM GEMAS","Loja de gemas"],
  incubator:["SURPRESAS TE ESPERAM","Incubadora"],
  missions:["OBJETIVOS DA JORNADA","Missões"]
 };
 document.getElementById("pageEyebrow").textContent=titles[name][0];
 document.getElementById("pageTitle").textContent=titles[name][1];
 if(name==="collection")renderCollection();
 if(name==="worlds")renderWorlds();
 if(name==="upgrades")renderUpgrades();
 if(name==="gemstore")renderGemStore();
 if(name==="events")renderEvents();
 if(name==="missions")renderMissions();
 if(name==="battle")renderBattle();
 if(name==="capture")renderChances();
 updateUI();
}
document.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>setPage(b.dataset.page)));
document.querySelectorAll("[data-goto]").forEach(b=>b.addEventListener("click",()=>setPage(b.dataset.goto)));

function updateUI(){
 document.getElementById("coins").textContent=format(state.coins);
 document.getElementById("gems").textContent=format(state.gems);
 document.getElementById("statCaught").innerHTML=`${countCaught()} <span>/ ${POKEMON.length}</span>`;
 document.getElementById("collectionProgress").style.width=(countCaught()/POKEMON.length*100)+"%";
 document.getElementById("statCps").textContent=format(cps());
 document.getElementById("statClick").textContent=format(clickPower());
 document.getElementById("statShiny").textContent=state.shinyCount;
 document.getElementById("collectionNavCount").textContent=countCaught();
 document.getElementById("collectionCount").textContent=countCaught();
 document.getElementById("trainerLevel").textContent=1+Math.floor(state.totalCaptures/5)+Math.floor(state.wins/3);
 const active=getMon(state.active)||getMon(1), entry=state.caught[state.active]||{level:1};
 document.getElementById("activePokemon").src=imageUrl(active.id);
 document.getElementById("activeName").textContent=active.name;
 document.getElementById("activeDesc").textContent=active.desc;
 document.getElementById("activeLevel").textContent=entry.level;
 document.getElementById("activeRarity").textContent=active.rarity.toUpperCase();
 document.getElementById("activeRarity").style.color=RARITY[active.rarity].color;
 document.getElementById("clickValue").textContent="+"+format(clickPower());
 // battleRecord agora é só o número
 const br = document.getElementById("battleRecord");
 if(br) br.textContent = state.wins;
 document.getElementById("battlePlayer").src=imageUrl(active.id);
 document.getElementById("battlePlayerName").textContent=active.name;
 const opts=Object.keys(state.caught).map(id=>getMon(id)).filter(Boolean);
 document.getElementById("partnerSelect").innerHTML=opts.slice(0,200).map(p=>`<option value="${p.id}" ${p.id===Number(state.active)?"selected":""}>${p.name} (Lv. ${state.caught[p.id].level})</option>`).join("");
 const gemBal=document.getElementById("gemStoreBalance");
 if(gemBal)gemBal.textContent=state.gems;
 renderRecent();
 save();
}
function addCoins(n){state.coins+=n;updateUI()}
function clickPokemon(){
 const amount=clickPower();addCoins(amount);state.totalClicks++;
 const stage=document.getElementById("clickStage");stage.classList.add("clicked");setTimeout(()=>stage.classList.remove("clicked"),110);
 const f=document.createElement("span");f.className="float-text";f.textContent="+"+format(amount);
 f.style.left=(42+Math.random()*18)+"%";f.style.top=(30+Math.random()*15)+"%";
 document.getElementById("floatLayer").append(f);setTimeout(()=>f.remove(),850);
 sound();checkMissions();updateUI();
}
document.getElementById("clickBtn").addEventListener("click",clickPokemon);
document.getElementById("clickStage").addEventListener("click",clickPokemon);
document.getElementById("partnerSelect").addEventListener("change",e=>{state.active=Number(e.target.value);updateUI();renderBattle()});

function renderRecent(){
 const ids=Object.keys(state.caught).slice(-4).reverse();
 document.getElementById("recentGrid").innerHTML=ids.map(id=>{const p=getMon(id);if(!p)return"";return `<div class="recent-card"><img src="${imageUrl(p.id)}"><div><b>${p.name}</b><small>${p.rarity} • Lv. ${state.caught[id].level}</small></div></div>`}).join("");
}

function weightedPick(pool,egg=false){
 let candidates=pool.filter(p=>p.region<=state.world);
 if(!candidates.length)candidates=pool;
 let luck=1+state.luckLevel*.08+state.gemLuckLevel*.15;
 let weights=candidates.map(p=>{
  let w=RARITY[p.rarity].weight;
  if(p.rarity==="Raro")w*=luck;
  if(p.rarity==="Épico")w*=luck*luck;
  if(p.rarity==="Lendário"||p.rarity==="Mítico")w*=luck*luck*1.2;
  if(egg&&p.rarity==="Comum")w*=.8;
  return w;
 });
 let total=weights.reduce((a,b)=>a+b,0),r=Math.random()*total;
 for(let i=0;i<candidates.length;i++){r-=weights[i];if(r<=0)return candidates[i]}
 return candidates[0];
}

function catchPokemon(p,source="captura"){
 const shiny=Math.random()<shinyChance();
 const existing=state.caught[p.id];
 if(existing){existing.count++;if(existing.level<100)existing.level++;}
 else state.caught[p.id]={count:1,level:1,shiny:false};
 if(shiny){state.caught[p.id].shiny=true;state.shinyCount++}
 state.totalCaptures++;state.active=p.id;updateUI();checkMissions();
 showCatchModal(p,shiny,source);
}
function showCatchModal(p,shiny,source){
 const isEv = isEventPokemon(p.id);
 document.getElementById("modalContent").innerHTML=`
  <div class="eyebrow">${source==="ovo"?"OVO CHOCADO!":isEv?"🎉 POKÉMON DE EVENTO!":"NOVA DESCOBERTA!"}</div>
  <img src="${imageUrl(p.id)}" style="${shiny?"filter:hue-rotate(35deg) drop-shadow(0 12px 12px #0008)":""}">
  <div class="rarity-text" style="color:${RARITY[p.rarity].color}">${shiny?"✧ SHINY • ":""}${p.rarity.toUpperCase()}</div>
  <h2>${p.name}${shiny?" ✨":""}</h2>
  <p>${p.desc}<br>${p.type} • #${String(p.id).padStart(4,"0")}</p>
  <div class="modal-actions"><button class="primary-btn" id="modalOkay">Continuar</button></div>`;
 document.getElementById("modal").classList.remove("hidden");
 document.getElementById("modalOkay").onclick=()=>document.getElementById("modal").classList.add("hidden");
}
document.getElementById("modalClose").onclick=()=>document.getElementById("modal").classList.add("hidden");
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")e.currentTarget.classList.add("hidden")});

function pickCatch(egg=false){
 const evPool = eventPokemonList();
 if(evPool.length && Math.random() < eventCatchChance()){
   return evPool[Math.floor(Math.random()*evPool.length)];
 }
 const pool=POKEMON.filter(p=>p.region<=state.world);
 return weightedPick(pool,egg);
}

function capture(){
 const cost=100;
 if(state.coins<cost){toast("Você precisa de "+cost+" moedas para lançar uma Pokébola.","error");return}
 state.coins-=cost;
 catchPokemon(pickCatch());
 toast("Pokébola lançada!","success");
}
document.getElementById("captureBtn").addEventListener("click",capture);

function renderChances(){
 const rows=Object.entries(RARITY);
 const luck=1+state.luckLevel*.08+state.gemLuckLevel*.15;
 const total=rows.reduce((s,[r,o])=>s+o.weight*(["Raro","Épico","Lendário","Mítico"].includes(r)?luck:1),0);
 document.getElementById("chanceList").innerHTML=rows.map(([r,o])=>{
  let pct=o.weight*(["Raro","Épico","Lendário","Mítico"].includes(r)?luck:1)/total*100;
  return `<div class="chance-row"><label style="color:${o.color}">${r}</label><div class="chance-track"><i style="width:${pct}%;background:${o.color}"></i></div><b>${pct.toFixed(1)}%</b></div>`;
 }).join("");
 const evNote = getActiveEvent() ? `<div class="luck-note" style="background:#f28bbd18;color:#f7b6d2;margin-top:12px">🎉 Evento ativo: <b>5%</b> de chance de vir um Pokémon de evento!</div>` : "";
 const note = document.querySelector(".luck-note");
 if(note && evNote) note.insertAdjacentHTML("afterend", evNote);
}

/* Coleção paginada */
let collectionPage = 0;
const COLLECTION_PAGE_SIZE = 120;
function renderCollection(){
 const search=(document.getElementById("searchPokemon").value||"").toLowerCase();
 const rarity=document.getElementById("rarityFilter").value;
 const sort=document.getElementById("sortCollection").value;
 let list=[...POKEMON].filter(p=>
   (!search||p.name.toLowerCase().includes(search)||String(p.id).includes(search))&&
   (rarity==="all"||p.rarity===rarity)
 );
 if(sort==="rarity")list.sort((a,b)=>Object.keys(RARITY).indexOf(b.rarity)-Object.keys(RARITY).indexOf(a.rarity));
 if(sort==="level")list.sort((a,b)=>(state.caught[b.id]?.level||0)-(state.caught[a.id]?.level||0));
 const total=list.length;
 const start=collectionPage*COLLECTION_PAGE_SIZE;
 const pageList=list.slice(start,start+COLLECTION_PAGE_SIZE);
 let html=pageList.map(p=>{
  const c=state.caught[p.id],color=RARITY[p.rarity].color;
  return `<article class="pokemon-card ${c?"":"locked-card"}" style="--rarity-color:${color}" data-id="${p.id}">
    <div class="dex-no">#${String(p.id).padStart(4,"0")}</div>
    <img src="${imageUrl(p.id)}" alt="${p.name}" loading="lazy">
    <h3>${c?.shiny?"✧ ":""}${c?p.name:"Desconhecido"}</h3>
    <div class="card-meta"><span class="rarity-text">${p.rarity.toUpperCase()}</span><span class="${c?"level-text":"locked-label"}">${c?"LV. "+c.level:"NÃO CAPTURADO"}</span></div>
  </article>`;
 }).join("");
 const pages=Math.ceil(total/COLLECTION_PAGE_SIZE);
 if(pages>1){
  html+=`<div class="collection-pager">
   <button class="secondary-btn" id="colPrev" ${collectionPage===0?"disabled":""}>← Anterior</button>
   <span>Página ${collectionPage+1} de ${pages} • ${total} Pokémon</span>
   <button class="secondary-btn" id="colNext" ${collectionPage>=pages-1?"disabled":""}>Próxima →</button>
  </div>`;
 }
 document.getElementById("collectionGrid").innerHTML=html;
 const prev=document.getElementById("colPrev"),next=document.getElementById("colNext");
 if(prev)prev.onclick=()=>{collectionPage=Math.max(0,collectionPage-1);renderCollection()};
 if(next)next.onclick=()=>{collectionPage=Math.min(pages-1,collectionPage+1);renderCollection()};
 document.querySelectorAll(".pokemon-card").forEach(el=>el.addEventListener("click",()=>{
  const p=getMon(el.dataset.id),c=state.caught[p.id];
  if(!c){toast("Você ainda não descobriu este Pokémon!");return}
  const levelCost=100*p.id/10+100;
  if(c.count>=2&&state.coins>=levelCost&&c.level<100){
   document.getElementById("modalContent").innerHTML=`<img src="${imageUrl(p.id)}"><h2>${p.name}</h2><p>${p.desc}<br>Tipo: ${p.type}<br>Nível ${c.level} • Duplicatas: ${c.count}</p><div class="modal-actions"><button class="secondary-btn" id="closeDetail">Fechar</button><button class="primary-btn" id="evolveBtn">Fortalecer • ${format(levelCost)} ◉</button></div>`;
   document.getElementById("modal").classList.remove("hidden");
   document.getElementById("closeDetail").onclick=()=>document.getElementById("modal").classList.add("hidden");
   document.getElementById("evolveBtn").onclick=()=>{
    if(c.count<2||state.coins<levelCost)return;
    state.coins-=levelCost;c.count-=1;c.level++;
    document.getElementById("modal").classList.add("hidden");
    toast(`${p.name} subiu para o nível ${c.level}!`,"success");
    renderCollection();updateUI();
   }
  }else{
   toast(`${p.name} • ${p.type} • Nível ${c.level}. Tenha 2 cópias e moedas para fortalecer.`)
  }
 }));
}
["searchPokemon","rarityFilter","sortCollection"].forEach(id=>document.getElementById(id).addEventListener(id==="searchPokemon"?"input":"change",()=>{collectionPage=0;renderCollection()}));

function renderWorlds(){
 document.getElementById("worldGrid").innerHTML=WORLDS.map((w,i)=>{
  const unlocked=state.unlocked.includes(i);
  return `<article class="world-card ${unlocked?"":"locked"}" data-emoji="${w.emoji}" style="--world-a:${w.colors[0]};--world-b:${w.colors[1]}">
    <h3>${w.name}</h3><p>${w.desc}</p>
    <button data-world="${i}" ${unlocked&&state.world===i?"disabled":""}>
      ${state.world===i?"Região atual":unlocked?"Explorar região":"Desbloquear • "+format(w.cost)+" ◉"}
    </button></article>`;
 }).join("");
 document.querySelectorAll("[data-world]").forEach(b=>b.addEventListener("click",()=>{
  const i=Number(b.dataset.world),w=WORLDS[i];
  if(!state.unlocked.includes(i)){
   if(state.coins<w.cost){toast("Moedas insuficientes para desbloquear esta região.","error");return}
   state.coins-=w.cost;state.unlocked.push(i);
  }
  state.world=i;
  toast(`Você está explorando ${w.name}!`,"success");
  renderWorlds();renderChances();updateUI();
 }));
}
function upgradeCost(u){return Math.floor(u.base*Math.pow(u.scale,state[u.id+"Level"]))}
function renderUpgrades(){
 document.getElementById("upgradeGrid").innerHTML=UPGRADES.map(u=>{
  const level=state[u.id+"Level"],cost=upgradeCost(u);
  return `<article class="upgrade-card"><div class="upgrade-icon">${u.icon}</div><div><h3>${u.name}</h3><p>${u.desc}</p><div class="upgrade-level">NÍVEL ${level} • ${u.effect}</div></div><button data-upgrade="${u.id}" ${state.coins<cost?"disabled":""}>${format(cost)} ◉</button></article>`;
 }).join("");
 document.querySelectorAll("[data-upgrade]").forEach(b=>b.addEventListener("click",()=>{
  const u=UPGRADES.find(x=>x.id===b.dataset.upgrade),key=u.id+"Level",cost=upgradeCost(u);
  if(state.coins<cost)return;
  state.coins-=cost;state[key]++;
  toast(`${u.name} melhorado!`,"success");
  renderUpgrades();renderChances();updateUI();
 }));
}

/* Loja de gemas */
function gemUpgradeCost(u){return Math.floor(u.base*Math.pow(u.scale,state[u.id+"Level"]))}
function renderGemStore(){
 const bal=document.getElementById("gemStoreBalance");
 if(bal)bal.textContent=state.gems;
 document.getElementById("gemStoreGrid").innerHTML=GEM_UPGRADES.map(u=>{
  const level=state[u.id+"Level"],cost=gemUpgradeCost(u);
  return `<article class="upgrade-card">
    <div class="upgrade-icon" style="background:#a78bfa22;color:#c4b5fd">${u.icon}</div>
    <div><h3>${u.name}</h3><p>${u.desc}</p><div class="upgrade-level">NÍVEL ${level} • ${u.effect}</div></div>
    <button data-gem-upgrade="${u.id}" ${state.gems<cost?"disabled":""}>${format(cost)} ✧</button>
  </article>`;
 }).join("");
 document.querySelectorAll("[data-gem-upgrade]").forEach(b=>b.addEventListener("click",()=>{
  const u=GEM_UPGRADES.find(x=>x.id===b.dataset.gemUpgrade),key=u.id+"Level",cost=gemUpgradeCost(u);
  if(state.gems<cost)return;
  state.gems-=cost;state[key]++;
  toast(`${u.name} melhorado!`,"success");
  renderGemStore();renderChances();updateUI();
 }));
}

function eggCost(){return Math.max(120,Math.floor(350*Math.pow(.88,state.eggLevel)))}
document.getElementById("eggBtn").addEventListener("click",()=>{
 const cost=eggCost();
 if(state.coins<cost){toast("Você precisa de "+cost+" moedas para comprar um ovo.","error");return}
 state.coins-=cost;
 document.getElementById("eggArt").textContent="🥚";
 document.getElementById("eggProgressText").textContent="Incubando...";
 document.getElementById("eggProgress").style.width="100%";
 document.getElementById("eggBtn").disabled=true;
 let progress=0;
 const timer=setInterval(()=>{
  progress+=20;
  document.getElementById("eggProgress").style.width=progress+"%";
  if(progress>=100){
   clearInterval(timer);
   document.getElementById("eggArt").textContent="✨";
   document.getElementById("eggProgressText").textContent="Ovo chocou!";
   document.getElementById("eggBtn").disabled=false;
   catchPokemon(pickCatch(true),"ovo");
   document.getElementById("eggArt").textContent="🥚";
   document.getElementById("eggProgressText").textContent="Pronto para começar";
   document.getElementById("eggProgress").style.width="0%";
   document.getElementById("eggBtn").textContent=`Comprar ovo • ${format(eggCost())} moedas`;
   updateUI();
  }
 },180);
});

document.getElementById("eggSpeedBtn").addEventListener("click",()=>{
 const btn=document.getElementById("eggBtn");
 if(btn.disabled){
   if(state.gems<1){toast("Você precisa de 1 gema para acelerar.","error");return}
   state.gems-=1;
   document.getElementById("eggProgress").style.width="100%";
   updateUI();
   toast("Ovo acelerado! ⚡","success");
 }else{
   toast("Compre um ovo primeiro para poder acelerar.");
 }
});

/* ===== BATALHA MELHORADA ===== */
const TYPE_CHART = {
  "Fogo":{strong:["Planta","Inseto","Gelo","Aço"],weak:["Água","Pedra","Fogo","Dragão"]},
  "Água":{strong:["Fogo","Terra","Pedra"],weak:["Planta","Água","Dragão"]},
  "Planta":{strong:["Água","Terra","Pedra"],weak:["Fogo","Planta","Voador","Inseto","Veneno","Dragão","Aço"]},
  "Elétrico":{strong:["Água","Voador"],weak:["Elétrico","Planta","Terra","Dragão"]},
  "Inseto":{strong:["Planta","Psíquico","Sombrio"],weak:["Fogo","Voador","Lutador","Fantasma","Aço","Fada"]},
  "Normal":{strong:[],weak:["Pedra","Aço","Fantasma"]},
  "Voador":{strong:["Planta","Inseto","Lutador"],weak:["Elétrico","Pedra","Aço"]},
  "Veneno":{strong:["Planta","Fada"],weak:["Veneno","Terra","Pedra","Fantasma","Aço"]},
  "Terra":{strong:["Fogo","Elétrico","Veneno","Pedra","Aço"],weak:["Planta","Inseto","Voador"]},
  "Fada":{strong:["Lutador","Dragão","Sombrio"],weak:["Fogo","Veneno","Aço"]},
  "Lutador":{strong:["Normal","Pedra","Aço","Gelo","Sombrio"],weak:["Voador","Psíquico","Fada","Fantasma","Veneno"]},
  "Psíquico":{strong:["Lutador","Veneno"],weak:["Psíquico","Sombrio","Aço"]},
  "Pedra":{strong:["Fogo","Voador","Inseto","Gelo"],weak:["Lutador","Terra","Aço"]},
  "Aço":{strong:["Fada","Gelo","Pedra"],weak:["Fogo","Lutador","Terra"]},
  "Gelo":{strong:["Planta","Voador","Terra","Dragão"],weak:["Fogo","Água","Lutador","Pedra","Aço"]},
  "Fantasma":{strong:["Psíquico","Fantasma"],weak:["Sombrio","Normal"]},
  "Dragão":{strong:["Dragão"],weak:["Gelo","Fada","Aço"]},
  "Sombrio":{strong:["Psíquico","Fantasma"],weak:["Lutador","Fada","Sombrio"]}
};
function typeMult(attackerType, defenderType){
  const a = attackerType.split(" / ")[0].trim();
  const d = defenderType.split(" / ")[0].trim();
  const chart = TYPE_CHART[a];
  if(!chart) return 1;
  if(chart.strong.includes(d)) return 1.6;
  if(chart.weak.includes(d)) return 0.6;
  return 1;
}
function calcDamage(level, power, attackerPower, defenderPower, attackerType, defenderType){
  const base = Math.floor((level * 2 + power) * (attackerPower / Math.max(1, defenderPower)) * 0.5 + 3);
  const mult = typeMult(attackerType, defenderType);
  const crit = Math.random() < 0.1 ? 1.5 : 1;
  return Math.max(1, Math.floor(base * mult * crit));
}

const DIFFICULTIES = {
  easy:  {label:"Fácil",  hpPlayer:1.0, hpEnemy:0.7, atkEnemy:0.7, rewardCoins:150, rewardGems:[0.05,1,1]},
  medium:{label:"Médio",  hpPlayer:1.0, hpEnemy:1.0, atkEnemy:1.0, rewardCoins:300, rewardGems:[0.20,1,3]},
  hard:  {label:"Difícil",hpPlayer:0.9, hpEnemy:1.4, atkEnemy:1.5, rewardCoins:600, rewardGems:[0.45,1,5]}
};

let currentBattle = null;
let currentDiff = "easy";
let battleInProgress = false;

document.querySelectorAll(".diff-btn").forEach(b=>b.addEventListener("click",()=>{
  if(battleInProgress){ toast("Termine a batalha atual antes de mudar a dificuldade."); return; }
  currentDiff = b.dataset.diff;
  document.querySelectorAll(".diff-btn").forEach(x=>x.classList.toggle("active",x===b));
  renderBattle();
}));

function battleLog(msg, cls=""){
  const log = document.getElementById("battleLog");
  const line = document.createElement("div");
  line.className = "log-line " + cls;
  line.textContent = msg;
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
  while(log.children.length > 30) log.removeChild(log.firstChild);
}

function renderBattle(){
  const p = getMon(state.active) || getMon(1);
  const c = state.caught[p.id] || {level:1};
  const diff = DIFFICULTIES[currentDiff];

  const pool = POKEMON.filter(x => x.region <= state.world && x.id !== p.id);
  const e = pool[Math.floor(Math.random()*pool.length)] || getMon(39);
  const enemyLevel = Math.max(1, c.level + (currentDiff==="easy"?-1:currentDiff==="medium"?0:2));

  const maxHpPlayer = Math.floor((30 + c.level*4 + (p.base||1)*2) * diff.hpPlayer);
  const maxHpEnemy  = Math.floor((30 + enemyLevel*4 + (e.base||1)*2) * diff.hpEnemy);

  currentBattle = {
    player: {...p, level:c.level, maxHp:maxHpPlayer, hp:maxHpPlayer, power:p.base||1},
    enemy:  {...e, level:enemyLevel, maxHp:maxHpEnemy, hp:maxHpEnemy, power:e.base||1, atk:diff.atkEnemy},
    turn: 0, over:false, defending:false
  };

  document.getElementById("battlePlayer").src = imageUrl(p.id);
  document.getElementById("battlePlayerName").textContent = p.name;
  document.getElementById("battlePlayerLvl").textContent = "NÍVEL " + c.level;
  document.getElementById("battleEnemy").src = imageUrl(e.id);
  document.getElementById("battleEnemyName").textContent = e.name;
  document.getElementById("battleEnemyLvl").textContent = "NÍVEL " + enemyLevel;

  updateHpBars();
  document.getElementById("battleLog").innerHTML = `<div class="log-line">${p.name} (Nv. ${c.level}) vs ${e.name} (Nv. ${enemyLevel}) — dificuldade ${diff.label}.</div>`;
  document.getElementById("battleBtn").disabled = false;
  document.getElementById("battleBtn").textContent = "Iniciar batalha";
  document.querySelectorAll(".battle-btn").forEach(b=>b.disabled=true);
}

function updateHpBars(){
  if(!currentBattle) return;
  const p = currentBattle.player, e = currentBattle.enemy;
  document.getElementById("playerHp").style.width = Math.max(0,(p.hp/p.maxHp)*100) + "%";
  document.getElementById("enemyHp").style.width  = Math.max(0,(e.hp/e.maxHp)*100) + "%";
  document.getElementById("playerHpText").textContent = `${Math.max(0,p.hp)} / ${p.maxHp}`;
  document.getElementById("enemyHpText").textContent  = `${Math.max(0,e.hp)} / ${e.maxHp}`;
}

function startBattle(){
  if(!currentBattle || battleInProgress) return;
  battleInProgress = true;
  document.getElementById("battleBtn").disabled = true;
  document.querySelectorAll(".battle-btn").forEach(b=>b.disabled=false);
  battleLog("Batalha iniciada! Escolha uma ação.", "info");
}

function playerAction(kind){
  if(!currentBattle || currentBattle.over) return;
  const p = currentBattle.player, e = currentBattle.enemy;
  currentBattle.turn++;

  if(kind === "attack"){
    const dmg = calcDamage(p.level, 10, p.power, e.power, p.type, e.type);
    e.hp -= dmg;
    battleLog(`${p.name} usou Ataque! (-${dmg} HP)`, "player");
    flashHit("enemyCircle"); floatDmg(dmg, "enemy-side");
  } else if(kind === "special"){
    const cost = Math.floor(p.maxHp * 0.15);
    p.hp -= cost;
    const dmg = calcDamage(p.level, 22, p.power, e.power, p.type, e.type);
    e.hp -= dmg;
    battleLog(`${p.name} usou Especial! (-${cost} de custo, -${dmg} no inimigo)`, "player");
    flashHit("enemyCircle"); floatDmg(dmg, "enemy-side");
  } else if(kind === "defend"){
    currentBattle.defending = true;
    battleLog(`${p.name} está defendendo! (dano reduzido)`, "info");
  }

  updateHpBars();
  if(e.hp <= 0){ endBattle(true); return; }
  if(p.hp <= 0){ endBattle(false); return; }

  document.querySelectorAll(".battle-btn").forEach(b=>b.disabled=true);
  setTimeout(enemyAction, 600);
}

function enemyAction(){
  if(!currentBattle || currentBattle.over) return;
  const p = currentBattle.player, e = currentBattle.enemy;
  const useSpecial = Math.random() < 0.25;
  const power = useSpecial ? 18 : 10;
  let dmg = calcDamage(e.level, power, e.power * e.atk, p.power, e.type, p.type);
  if(currentBattle.defending){ dmg = Math.floor(dmg * 0.45); currentBattle.defending = false; }

  p.hp -= dmg;
  battleLog(`${e.name} usou ${useSpecial?"Especial":"Ataque"}! (-${dmg} HP)`, "enemy");
  flashHit("playerCircle"); floatDmg(dmg, "player-side");
  updateHpBars();

  if(p.hp <= 0){ endBattle(false); return; }
  document.querySelectorAll(".battle-btn").forEach(b=>b.disabled=false);
}

function flashHit(circleId){
  const el = document.getElementById(circleId);
  if(!el) return;
  el.classList.add("hit");
  setTimeout(()=>el.classList.remove("hit"), 350);
}

function floatDmg(value, side){
  const arena = document.getElementById("battleArena");
  if(!arena) return;
  const el = document.createElement("span");
  el.className = "battle-float";
  el.textContent = "-" + value;
  el.style.left = side === "enemy-side" ? "72%" : "28%";
  el.style.top  = "45%";
  arena.appendChild(el);
  setTimeout(()=>el.remove(), 900);
}

function endBattle(won){
  if(!currentBattle) return;
  currentBattle.over = true;
  battleInProgress = false;

  if(won){
    const diff = DIFFICULTIES[currentDiff];
    state.wins++;
    state.coins += diff.rewardCoins;
    let gems = 0;
    if(Math.random() < diff.rewardGems[0]){
      gems = diff.rewardGems[1] + Math.floor(Math.random() * (diff.rewardGems[2] - diff.rewardGems[1] + 1));
      state.gems += gems;
    }
    const cap = state.caught[currentBattle.player.id];
    if(cap && cap.level < 100 && Math.random() < 0.5) cap.level++;
    battleLog(`🏆 Vitória! +${diff.rewardCoins} moedas${gems?", +"+gems+" gemas":""}.`, "win");
    toast(`Vitória! +${diff.rewardCoins} moedas`, "success");
  } else {
    battleLog("💀 Derrota... Fortaleça seu parceiro e tente novamente.", "lose");
    toast("Derrota! Treine seu Pokémon.", "error");
  }

  document.querySelectorAll(".battle-btn").forEach(b=>b.disabled=true);
  document.getElementById("battleBtn").disabled = false;
  document.getElementById("battleBtn").textContent = "Nova batalha";
  document.getElementById("battleRecord").textContent = state.wins;
  updateUI();
}

document.getElementById("battleBtn").addEventListener("click",()=>{
  if(battleInProgress) return;
  renderBattle();
  startBattle();
});
document.getElementById("btnAttack").addEventListener("click",()=>playerAction("attack"));
document.getElementById("btnSpecial").addEventListener("click",()=>playerAction("special"));
document.getElementById("btnDefend").addEventListener("click",()=>playerAction("defend"));

function missionData(){return [
 {id:"click",icon:"👆",title:"Primeiros passos",desc:"Clique 25 vezes no seu Pokémon parceiro.",progress:Math.min(state.totalClicks,25),goal:25,reward:150},
 {id:"capture",icon:"◉",title:"Colecionador iniciante",desc:"Capture 3 Pokémon.",progress:Math.min(state.totalCaptures,3),goal:3,reward:250},
 {id:"battle",icon:"⚔️",title:"Vitória na arena",desc:"Vença 1 batalha.",progress:Math.min(state.wins,1),goal:1,reward:300},
 {id:"collect",icon:"▦",title:"Pequena coleção",desc:"Descubra 5 espécies diferentes.",progress:Math.min(countCaught(),5),goal:5,reward:500}
]}
function renderMissions(){
 document.getElementById("missionList").innerHTML=missionData().map(m=>{
  const done=state.missions[m.id];
  return `<article class="mission-card"><div class="mission-icon">${m.icon}</div><div><h3>${m.title}</h3><p>${m.desc} • Recompensa: ${m.reward} moedas</p></div><div class="mission-progress"><span>${m.progress}/${m.goal}</span><div class="progress-track"><i style="width:${m.progress/m.goal*100}%"></i></div></div><button data-claim="${m.id}" ${done||m.progress<m.goal?"disabled":""}>${done?"Resgatada":"Resgatar"}</button></article>`;
 }).join("");
 document.querySelectorAll("[data-claim]").forEach(b=>b.addEventListener("click",()=>{
  const m=missionData().find(x=>x.id===b.dataset.claim);
  if(!m||state.missions[m.id]||m.progress<m.goal)return;
  state.missions[m.id]=true;state.coins+=m.reward;
  toast(`Missão concluída! +${m.reward} moedas`,"success");
  renderMissions();updateUI();
 }));
}
function checkMissions(){if(document.getElementById("page-missions").classList.contains("active"))renderMissions()}

/* Eventos — renderização */
function renderEvents(){
  const active = getActiveEvent();
  const hero = document.getElementById("eventHero");
  const list = document.getElementById("eventPokemonList");

  if(active){
    const ev = active.event;
    hero.style.background = `linear-gradient(120deg,${ev.color[0]},${ev.color[1]})`;
    document.getElementById("eventEmoji").textContent = ev.emoji;
    document.getElementById("eventStatus").textContent = "EVENTO ATIVO";
    document.getElementById("eventName").textContent = ev.name;
    document.getElementById("eventDesc").textContent = ev.desc;
    list.innerHTML = ev.pokemon.map(p=>{
      const c = state.caught[p.id];
      return `<div class="event-mon ${c?"":"locked"}">
        <img src="${imageUrl(p.id)}" alt="${p.name}">
        <div>
          <b>${c?.shiny?"✧ ":""}${p.name}</b>
          <small>${p.rarity} • ${p.type}</small>
          <span class="event-mon-odds">5% de chance</span>
        </div>
      </div>`;
    }).join("");
    updateEventTimer();
    if(window._eventTimer) clearInterval(window._eventTimer);
    window._eventTimer = setInterval(updateEventTimer, 1000);
  }else{
    const next = nextEventStart();
    hero.style.background = `linear-gradient(120deg,#2a2a3d,#1a1a2e)`;
    document.getElementById("eventEmoji").textContent = "⏳";
    document.getElementById("eventStatus").textContent = "PRÓXIMO EVENTO";
    document.getElementById("eventName").textContent = next ? next.event.name : "Nenhum evento agendado";
    document.getElementById("eventDesc").textContent = next ? `Começa em ${next.event.emoji} — aguarde!` : "Volte em breve.";
    list.innerHTML = `<div class="event-mon"><div><b>Nenhum evento ativo agora</b><small>Fique de olho no calendário abaixo.</small></div></div>`;
    if(window._eventTimer) clearInterval(window._eventTimer);
    if(next){
      const tick = () => {
        const t = formatCountdown(next.date - new Date());
        document.getElementById("eventDays").textContent = t.d;
        document.getElementById("eventHours").textContent = String(t.h).padStart(2,"0");
        document.getElementById("eventMins").textContent = String(t.m).padStart(2,"0");
        document.getElementById("eventSecs").textContent = String(t.s).padStart(2,"0");
      };
      tick();
      window._eventTimer = setInterval(tick, 1000);
    }
  }

  const key = dateToMMDD(new Date());
  document.getElementById("eventCalendarGrid").innerHTML = EVENTS.map(ev=>{
    const s = ev.start.m*100 + ev.start.d;
    const e = ev.end.m*100 + ev.end.d;
    let isActive = false;
    if(s <= e) isActive = key >= s && key <= e;
    else isActive = key >= s || key <= e;
    const fmt = d => `${String(d.d).padStart(2,"0")}/${String(d.m).padStart(2,"0")}`;
    return `<article class="world-card ${isActive?"":"locked"}" data-emoji="${ev.emoji}" style="--world-a:${ev.color[0]};--world-b:${ev.color[1]}">
      <h3>${ev.emoji} ${ev.name}</h3>
      <p>${fmt(ev.start)} → ${fmt(ev.end)} • ${ev.pokemon.length} Pokémon</p>
      <span class="world-status">${isActive?"● ATIVO AGORA":"○ Fora do período"}</span>
    </article>`;
  }).join("");

  const evCount = Object.keys(state.caught).filter(id => isEventPokemon(id)).length;
  const el = document.getElementById("eventsCount");
  if(el) el.textContent = evCount;
  const badge = document.getElementById("eventsNavBadge");
  if(badge) badge.style.display = active ? "inline-block" : "none";
}

function updateEventTimer(){
  const active = getActiveEvent();
  if(!active) return;
  const end = eventEndDate(active.event);
  const t = formatCountdown(end - new Date());
  document.getElementById("eventDays").textContent = t.d;
  document.getElementById("eventHours").textContent = String(t.h).padStart(2,"0");
  document.getElementById("eventMins").textContent = String(t.m).padStart(2,"0");
  document.getElementById("eventSecs").textContent = String(t.s).padStart(2,"0");
}

document.getElementById("dailyBtn").addEventListener("click",()=>{
 const today=new Date().toDateString();
 if(state.claimedDaily===today){toast("Você já resgatou sua recompensa hoje!");return}
 state.claimedDaily=today;state.coins+=500;state.gems+=2;
 toast("Recompensa diária: +500 moedas e +2 gemas!","success");updateUI();
});
document.getElementById("soundBtn").addEventListener("click",()=>{
 soundOn=!soundOn;
 document.getElementById("soundBtn").textContent=soundOn?"♫":"♪";
 toast(soundOn?"Sons ativados":"Sons desativados");
});
setInterval(()=>{const gain=cps();if(gain>0){state.coins+=gain;updateUI()}},1000);
setInterval(save,5000);
window.addEventListener("beforeunload",save);

(function init(){
 const elapsed=Math.min(3600,Math.floor((Date.now()-(state.lastSeen||Date.now()))/1000));
 if(elapsed>5&&cps()>0){
  const bonus=Math.floor(elapsed*cps()*.5);state.coins+=bonus;
  setTimeout(()=>toast(`Enquanto você esteve fora, ganhou ${format(bonus)} moedas!`,"success"),600);
 }
 updateUI();renderChances();renderCollection();renderWorlds();renderUpgrades();
 renderGemStore();renderMissions();renderBattle();renderEvents();
 document.getElementById("ballCost").textContent="100";
 document.getElementById("eggBtn").textContent=`Comprar ovo • ${format(eggCost())} moedas`;
})();