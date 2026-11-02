/* ============================================================
   POKÉDEX COMPLETA — 1025 espécies, 9 regiões (gerações 1–9)
   ============================================================ */
const POKEMON_NAMES = [
// Gen 1 (1-151)
"Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew",
// Gen 2 (152-251)
"Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking","Misdreavus","Unown","Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma","Magcargo","Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom","Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop","Smoochum","Elekid","Magby","Miltank","Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-Oh","Celebi",
// Gen 3 (252-386)
"Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud","Makuhita","Hariyama","Azurill","Nosepass","Skitty","Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric","Plusle","Minun","Volbeat","Illumise","Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord","Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish","Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo","Feebas","Milotic","Castform","Kecleon","Shuppet","Banette","Duskull","Dusclops","Tropius","Chimecho","Absol","Wynaut","Snorunt","Glalie","Spheal","Sealeo","Walrein","Clamperl","Huntail","Gorebyss","Relicanth","Luvdisc","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys",
// Gen 4 (387-493)
"Turtwig","Grotle","Torterra","Chimchar","Monferno","Infernape","Piplup","Prinplup","Empoleon","Starly","Staravia","Staraptor","Bidoof","Bibarel","Kricketot","Kricketune","Shinx","Luxio","Luxray","Budew","Roserade","Cranidos","Rampardos","Shieldon","Bastiodon","Burmy","Wormadam","Mothim","Combee","Vespiquen","Pachirisu","Buizel","Floatzel","Cherubi","Cherrim","Shellos","Gastrodon","Ambipom","Drifloon","Drifblim","Buneary","Lopunny","Mismagius","Honchkrow","Glameow","Purugly","Chingling","Stunky","Skuntank","Bronzor","Bronzong","Bonsly","Mime Jr.","Happiny","Chatot","Spiritomb","Gible","Gabite","Garchomp","Munchlax","Riolu","Lucario","Hippopotas","Hippowdon","Skorupi","Drapion","Croagunk","Toxicroak","Carnivine","Finneon","Lumineon","Mantyke","Snover","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade","Probopass","Dusknoir","Froslass","Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus",
// Gen 5 (494-649)
"Victini","Snivy","Servine","Serperior","Tepig","Pignite","Emboar","Oshawott","Dewott","Samurott","Patrat","Watchog","Lillipup","Herdier","Stoutland","Purrloin","Liepard","Pansage","Simisage","Pansear","Simisear","Panpour","Simipour","Munna","Musharna","Pidove","Tranquill","Unfezant","Blitzle","Zebstrika","Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill","Audino","Timburr","Gurdurr","Conkeldurr","Tympole","Palpitoad","Seismitoad","Throh","Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede","Scolipede","Cottonee","Whimsicott","Petilil","Lilligant","Basculin","Sandile","Krokorok","Krookodile","Darumaka","Darmanitan","Maractus","Dwebble","Crustle","Scraggy","Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna","Vanillite","Vanillish","Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed","Ferrothorn","Klink","Klang","Klinklang","Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic","Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard","Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino","Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem","Keldeo","Meloetta","Genesect",
// Gen 6 (650-721)
"Chespin","Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder","Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","Flabébé","Floette","Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou","Espurr","Meowstic","Honedge","Doublade","Aegislash","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle","Skrelp","Dragalge","Clauncher","Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura","Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant","Pumpkaboo","Gourgeist","Bergmite","Avalugg","Noibat","Noivern","Xerneas","Yveltal","Zygarde","Diancie","Hoopa","Volcanion",
// Gen 7 (722-809)
"Rowlet","Dartrix","Decidueye","Litten","Torracat","Incineroar","Popplio","Brionne","Primarina","Pikipek","Trumbeak","Toucannon","Yungoos","Gumshoos","Grubbin","Charjabug","Vikavolt","Crabrawler","Crabominable","Oricorio","Cutiefly","Ribombee","Rockruff","Lycanroc","Wishiwashi","Mareanie","Toxapex","Mudbray","Mudsdale","Dewpider","Araquanid","Fomantis","Lurantis","Morelull","Shiinotic","Salandit","Salazzle","Stufful","Bewear","Bounsweet","Steenee","Tsareena","Comfey","Oranguru","Passimian","Wimpod","Golisopod","Sandygast","Palossand","Pyukumuku","Type: Null","Silvally","Minior","Komala","Turtonator","Togedemaru","Mimikyu","Bruxish","Drampa","Dhelmise","Jangmo-o","Hakamo-o","Kommo-o","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Cosmog","Cosmoem","Solgaleo","Lunala","Nihilego","Buzzwole","Pheromosa","Xurkitree","Celesteela","Kartana","Guzzlord","Necrozma","Magearna","Marshadow","Poipole","Naganadel","Stakataka","Blacephalon","Zeraora","Meltan","Melmetal",
// Gen 8 (810-905)
"Grookey","Thwackey","Rillaboom","Scorbunny","Raboot","Cinderace","Sobble","Drizzile","Inteleon","Skwovet","Greedent","Rookidee","Corvisquire","Corviknight","Blipbug","Dottler","Orbeetle","Nickit","Thievul","Gossifleur","Eldegoss","Wooloo","Dubwool","Chewtle","Drednaw","Yamper","Boltund","Rolycoly","Carkol","Coalossal","Applin","Flapple","Appletun","Silicobra","Sandaconda","Cramorant","Arrokuda","Barraskewda","Toxel","Toxtricity","Sizzlipede","Centiskorch","Clobbopus","Grapploct","Sinistea","Polteageist","Hatenna","Hattrem","Hatterene","Impidimp","Morgrem","Grimmsnarl","Obstagoon","Perrserker","Cursola","Sirfetch'd","Mr. Rime","Runerigus","Milcery","Alcremie","Falinks","Pincurchin","Snom","Frosmoth","Stonjourner","Eiscue","Indeedee","Morpeko","Cufant","Copperajah","Dracozolt","Arctozolt","Dracovish","Arctovish","Duraludon","Dreepy","Drakloak","Dragapult","Zacian","Zamazenta","Eternatus","Kubfu","Urshifu","Zarude","Regieleki","Regidrago","Glastrier","Spectrier","Calyrex","Wyrdeer","Kleavor","Ursaluna","Basculegion","Sneasler","Overqwil","Enamorus",
// Gen 9 (906-1025)
"Sprigatito","Floragato","Meowscarada","Fuecoco","Crocalor","Skeledirge","Quaxly","Quaxwell","Quaquaval","Lechonk","Oinkologne","Tarountula","Spidops","Nymble","Lokix","Pawmi","Pawmo","Pawmot","Tandemaus","Maushold","Fidough","Dachsbun","Smoliv","Dolliv","Arboliva","Squawkabilly","Nacli","Naclstack","Garganacl","Charcadet","Armarouge","Ceruledge","Tadbulb","Bellibolt","Wattrel","Kilowattrel","Maschiff","Mabosstiff","Shroodle","Grafaiai","Bramblin","Brambleghast","Toedscool","Toedscruel","Klawf","Capsakid","Scovillain","Rellor","Rabsca","Flittle","Espathra","Tinkatink","Tinkatuff","Tinkaton","Wiglett","Wugtrio","Bombirdier","Finizen","Palafin","Varoom","Revavroom","Cyclizar","Orthworm","Glimmet","Glimmora","Greavard","Houndstone","Flamigo","Cetoddle","Cetitan","Veluza","Dondozo","Tatsugiri","Annihilape","Clodsire","Farigiraf","Dudunsparce","Kingambit","Great Tusk","Scream Tail","Brute Bonnet","Flutter Mane","Slither Wing","Sandy Shocks","Iron Treads","Iron Bundle","Iron Hands","Iron Jugulis","Iron Moth","Iron Thorns","Frigibax","Arctibax","Baxcalibur","Gimmighoul","Gholdengo","Wo-Chien","Chien-Pao","Ting-Lu","Chi-Yu","Roaring Moon","Iron Valiant","Koraidon","Miraidon","Walking Wake","Iron Leaves","Dipplin","Poltchageist","Sinistcha","Okidogi","Munkidori","Fezandipiti","Ogerpon","Archaludon","Hydrapple","Gouging Fire","Raging Bolt","Iron Boulder","Iron Crown","Terapagos","Pecharunt"
];

/* Metadados automáticos por ID — 9 gerações */
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

const TYPE_TABLE = [
  "Planta","Fogo","Água","Inseto","Normal","Voador","Veneno","Elétrico","Terra","Fada","Lutador","Psíquico","Pedra","Aço","Gelo","Fantasma","Dragão","Sombrio"
];

/* Raridade/base por ID (progressiva, mas com lendários/míticos fixos) */
const LEGENDARY_IDS = new Set([
  144,145,146,150,243,244,245,249,250,251,377,378,379,380,381,382,383,384,385,386,
  480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,
  638,639,640,641,642,643,644,645,646,647,648,649,
  716,717,718,719,720,721,772,773,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,
  888,889,890,891,892,893,894,895,896,897,898,905,
  984,985,986,987,988,989,990,991,992,993,994,995,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1014,1015,1016,1017,1020,1021,1022,1023,1024,1025
]);
const MYTHICAL_IDS = new Set([
  151,251,385,386,489,490,491,492,493,494,647,648,649,719,720,721,
  801,802,807,808,809,893,1025
]);

function rarityForId(id){
  if(MYTHICAL_IDS.has(id)) return "Mítico";
  if(LEGENDARY_IDS.has(id)) return "Lendário";
  if(id <= 151) return id % 7 === 0 ? "Raro" : id % 3 === 0 ? "Incomum" : "Comum";
  if(id <= 251) return id % 9 === 0 ? "Épico" : id % 5 === 0 ? "Raro" : id % 2 === 0 ? "Incomum" : "Comum";
  if(id <= 493) return id % 11 === 0 ? "Épico" : id % 6 === 0 ? "Raro" : id % 2 === 0 ? "Incomum" : "Comum";
  if(id <= 809) return id % 13 === 0 ? "Épico" : id % 7 === 0 ? "Raro" : id % 2 === 0 ? "Incomum" : "Comum";
  return id % 15 === 0 ? "Épico" : id % 8 === 0 ? "Raro" : id % 2 === 0 ? "Incomum" : "Comum";
}
function baseForRarity(r){
  return {Comum:1,Incomum:2,Raro:4,Épico:8,Lendário:18,Mítico:35}[r] || 1;
}
function regionForId(id){
  for(const g of GEN_RANGES) if(id >= g.start && id <= g.end) return g.region;
  return 8;
}

/* Gera POKEMON[] a partir dos nomes */
const POKEMON = POKEMON_NAMES.map((name, i) => {
  const id = i + 1;
  const rarity = rarityForId(id);
  const region = regionForId(id);
  const typeA = TYPE_TABLE[id % TYPE_TABLE.length];
  const typeB = TYPE_TABLE[(id * 3 + 5) % TYPE_TABLE.length];
  const type = typeA === typeB ? typeA : `${typeA} / ${typeB}`;
  return {
    id,
    name,
    rarity,
    region,
    desc: `Pokémon #${String(id).padStart(4,"0")} da Pokédex Nacional.`,
    type,
    base: baseForRarity(rarity)
  };
});

/* Cache para getMon (performance com 1025) */
const MON_BY_ID = new Map(POKEMON.map(p => [p.id, p]));

const RARITY={
  Comum:{color:"#aab3c2",weight:52},
  Incomum:{color:"#6bd69d",weight:25},
  Raro:{color:"#68baf2",weight:13},
  Épico:{color:"#bd8cff",weight:7},
  Lendário:{color:"#f4c866",weight:2.5},
  Mítico:{color:"#f28bbd",weight:.5}
};

/* 9 regiões (1 por geração) */
const WORLDS = GEN_RANGES.map(g => ({
  name: g.name,
  emoji: ["🌿","🌸","🌊","⛰️","🏙️","🎨","🏝️","🏰","🫒"][g.gen],
  desc: `Geração ${g.gen+1} • Pokémon #${g.start}–#${g.end}`,
  cost: g.gen === 0 ? 0 : Math.floor(1000 * Math.pow(2.6, g.gen - 1)),
  colors: [
    ["#315c55","#273b4c"],["#684b72","#303d64"],["#2e5c7a","#223a55"],
    ["#5c4a2e","#3a2e1f"],["#4a4a5c","#2b2b3d"],["#7a4a5c","#3d2230"],
    ["#7a5c2e","#3d301f"],["#4a2e5c","#2b1f3d"],["#5c7a2e","#2e3d1f"]
  ][g.gen] || ["#315c55","#273b4c"]
}));

const UPGRADES=[
 {id:"click",name:"Toque poderoso",desc:"Aumenta as moedas recebidas a cada clique.",icon:"👆",base:100,scale:1.75,effect:"+1 moeda por nível"},
 {id:"auto",name:"Parceiro trabalhador",desc:"Gera moedas automaticamente a cada segundo.",icon:"⚙️",base:250,scale:1.8,effect:"+2 moedas por segundo"},
 {id:"luck",name:"Amuleto da sorte",desc:"Melhora a chance de encontrar raridades altas.",icon:"🍀",base:500,scale:2,effect:"+8% de sorte por nível"},
 {id:"egg",name:"Incubadora avançada",desc:"Reduz o custo dos ovos misteriosos.",icon:"🥚",base:700,scale:1.9,effect:"Ovos mais baratos"}
];

const SAVE_KEY="pokeclicker_save_v1";
const freshState=()=>({coins:0,gems:0,clickLevel:0,autoLevel:0,luckLevel:0,eggLevel:0,caught:{1:{count:1,level:1,shiny:false}},active:1,world:0,unlocked:[0],wins:0,totalClicks:0,totalCaptures:0,shinyCount:0,claimedDaily:"",missions:{click:false,capture:false,battle:false,collect:false},lastSeen:Date.now()});
let state=loadState(), battleBusy=false, soundOn=true;

function loadState(){try{const s=JSON.parse(localStorage.getItem(SAVE_KEY));return s?{...freshState(),...s}:freshState()}catch{return freshState()}}
function save(){state.lastSeen=Date.now();localStorage.setItem(SAVE_KEY,JSON.stringify(state))}
function imageUrl(id){return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
function getMon(id){return MON_BY_ID.get(Number(id))}
function countCaught(){return Object.keys(state.caught).length}
function cps(){return state.autoLevel*2 + Object.values(state.caught).reduce((n,c)=>n+(c.count?Math.max(0,c.count-1)*.5:0),0)}
function clickPower(){return 1+state.clickLevel+Math.floor(state.totalCaptures/5)}
function format(n){if(n>=1e9)return (n/1e9).toFixed(1)+"B";if(n>=1e6)return (n/1e6).toFixed(1)+"M";if(n>=1e3)return (n/1e3).toFixed(1)+"K";return Math.floor(n).toLocaleString("pt-BR")}
function toast(msg,type=""){const el=document.createElement("div");el.className=`toast ${type}`;el.textContent=msg;document.getElementById("toastWrap").append(el);setTimeout(()=>el.remove(),3000)}
function sound(){if(!soundOn)return;try{const ctx=new(window.AudioContext||window.webkitAudioContext)(),o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.frequency.value=560;o.type="sine";g.gain.setValueAtTime(.05,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.12);o.start();o.stop(ctx.currentTime+.12)}catch{}}

function setPage(name){
 document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===`page-${name}`));
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===name));
 const titles={
  home:["SEU MUNDO, SUA JORNADA","Visão geral"],
  collection:["SUA COLEÇÃO","Minha coleção"],
  capture:["ENCONTRE NOVOS AMIGOS","Capturar"],
  battle:["TESTE SUA EQUIPE","Batalhas"],
  worlds:["EXPLORE O DESCONHECIDO","Regiões"],
  upgrades:["FIQUE MAIS FORTE","Melhorias"],
  incubator:["SURPRESAS TE ESPERAM","Incubadora"],
  missions:["OBJETIVOS DA JORNADA","Missões"]
 };
 document.getElementById("pageEyebrow").textContent=titles[name][0];
 document.getElementById("pageTitle").textContent=titles[name][1];
 if(name==="collection")renderCollection();
 if(name==="worlds")renderWorlds();
 if(name==="upgrades")renderUpgrades();
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
 document.getElementById("battleRecord").textContent=`Vitórias: ${state.wins}`;
 document.getElementById("battlePlayer").src=imageUrl(active.id);
 document.getElementById("battlePlayerName").textContent=active.name;
 const opts=Object.keys(state.caught).map(id=>getMon(id)).filter(Boolean);
 // Limita dropdown a 200 para não travar com 1025
 document.getElementById("partnerSelect").innerHTML=opts.slice(0,200).map(p=>`<option value="${p.id}" ${p.id===Number(state.active)?"selected":""}>${p.name} (Lv. ${state.caught[p.id].level})</option>`).join("");
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
 let luck=1+state.luckLevel*.08;
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
 const shiny=Math.random()<.012+state.luckLevel*.0008;
 const existing=state.caught[p.id];
 if(existing){existing.count++;if(existing.level<100)existing.level++;}
 else state.caught[p.id]={count:1,level:1,shiny:false};
 if(shiny){state.caught[p.id].shiny=true;state.shinyCount++}
 state.totalCaptures++;state.active=p.id;updateUI();checkMissions();
 showCatchModal(p,shiny,source);
}
function showCatchModal(p,shiny,source){
 document.getElementById("modalContent").innerHTML=`
  <div class="eyebrow">${source==="ovo"?"OVO CHOCADO!":"NOVA DESCOBERTA!"}</div>
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

function capture(){
 const cost=100;
 if(state.coins<cost){toast("Você precisa de "+cost+" moedas para lançar uma Pokébola.","error");return}
 state.coins-=cost;
 const pool=POKEMON.filter(p=>p.region<=state.world);
 catchPokemon(weightedPick(pool));
 toast("Pokébola lançada!","success");
}
document.getElementById("captureBtn").addEventListener("click",capture);

function renderChances(){
 const rows=Object.entries(RARITY);
 const luck=1+state.luckLevel*.08;
 const total=rows.reduce((s,[r,o])=>s+o.weight*(["Raro","Épico","Lendário","Mítico"].includes(r)?luck:1),0);
 document.getElementById("chanceList").innerHTML=rows.map(([r,o])=>{
  let pct=o.weight*(["Raro","Épico","Lendário","Mítico"].includes(r)?luck:1)/total*100;
  return `<div class="chance-row"><label style="color:${o.color}">${r}</label><div class="chance-track"><i style="width:${pct}%;background:${o.color}"></i></div><b>${pct.toFixed(1)}%</b></div>`;
 }).join("");
}

/* Renderização paginada para 1025 cards */
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
 
 // paginação
 const pages=Math.ceil(total/COLLECTION_PAGE_SIZE);
 if(pages>1){
  html+=`<div class="collection-pager" style="grid-column:1/-1;display:flex;align-items:center;justify-content:center;gap:10px;padding:14px 0">
   <button class="secondary-btn" id="colPrev" ${collectionPage===0?"disabled":""}>← Anterior</button>
   <span style="font-size:10px;color:#9ca5b8">Página ${collectionPage+1} de ${pages} • ${total} Pokémon</span>
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
   const pool=POKEMON.filter(p=>p.region<=state.world);
   catchPokemon(weightedPick(pool,true),"ovo");
   document.getElementById("eggArt").textContent="🥚";
   document.getElementById("eggProgressText").textContent="Pronto para começar";
   document.getElementById("eggProgress").style.width="0%";
   document.getElementById("eggBtn").textContent=`Comprar ovo • ${format(eggCost())} moedas`;
   updateUI();
  }
 },180);
});

function renderBattle(){
 const p=getMon(state.active)||getMon(1);
 const enemies=POKEMON.filter(x=>x.region<=state.world&&x.id!==p.id);
 const e=enemies[Math.floor(Math.random()*enemies.length)]||getMon(39);
 document.getElementById("battleEnemy").src=imageUrl(e.id);
 document.getElementById("battleEnemyName").textContent=e.name;
 document.getElementById("playerHp").style.width="100%";
 document.getElementById("enemyHp").style.width="100%";
 document.getElementById("battleMessage").textContent=`${p.name} está pronto para enfrentar ${e.name}!`;
 document.getElementById("battleBtn").disabled=false;
 document.getElementById("battleBtn").textContent="Iniciar batalha ⚔";
 window.currentEnemy=e;
}
document.getElementById("battleBtn").addEventListener("click",()=>{
 if(battleBusy)return;battleBusy=true;
 const p=getMon(state.active)||getMon(1),c=state.caught[p.id],e=window.currentEnemy||getMon(39);
 const playerPower=(c.level*2)+(p.base||1)+state.clickLevel;
 const enemyPower=(e.base||1)+Math.floor(Math.random()*12)+5;
 document.getElementById("battleBtn").disabled=true;
 document.getElementById("battleMessage").textContent=`${p.name} e ${e.name} estão lutando...`;
 document.getElementById("playerHp").style.width=(playerPower>=enemyPower?"100%":"45%");
 document.getElementById("enemyHp").style.width=(playerPower>=enemyPower?"0%":"55%");
 setTimeout(()=>{
  if(playerPower>=enemyPower){
   state.wins++;state.coins+=250;
   const gems=Math.random()<.35?1+Math.floor(Math.random()*3):0;
   state.gems+=gems;
   document.getElementById("battleMessage").textContent=`Vitória! ${p.name} venceu! Você ganhou 250 moedas${gems?", e "+gems+" gemas":""}.`;
   toast("Vitória! +250 moedas","success");
  }else{
   document.getElementById("battleMessage").textContent=`${e.name} venceu desta vez. Fortaleça seu parceiro e tente novamente!`;
   toast("Derrota! Treine seu Pokémon.","error");
  }
  battleBusy=false;checkMissions();updateUI();renderBattle();
 },850);
});

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
 updateUI();renderChances();renderCollection();renderWorlds();renderUpgrades();renderMissions();renderBattle();
 document.getElementById("ballCost").textContent="100";
 document.getElementById("eggBtn").textContent=`Comprar ovo • ${format(eggCost())} moedas`;
})();