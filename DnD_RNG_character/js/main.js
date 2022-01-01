import { theClass } from "./classes";

//List of all Character Classes

const characterClass = [classes];
// const characterClass = [
//     "Cleric",
//     "Rogue",
//     "Paladin",
//     "Fighter",
//     "Wizard",
//     "Bard",
//     "Sorcerer",
//     "Barbarian",
//     "Monk",
//     "Druid",
//     "Ranger",
//     "Warlock",
//   ];

//const classTraits = require("class.js");

const characterRace = [
  "Human",
  "Elf",
  "Dwarf",
  "Half Orc",
  "Half Elf",
  "Dragonborn",
  "Gnome",
  "Tiefling",
  "Halfing",
];

//const raceTraits = require("race.js");

let stats = [];

//rolling a character
const rollCharacter = () => {
  stats = [];
  rollClass(characterClass);
  rollRace(characterRace);
  rollStats();
  //   placeStats();
  //alert("test");
};

//rolling the class
const rollClass = () => {
  console.log(characterClass);
  //figuring out what class it'll be
  var rngClass = Math.floor(Math.random() * characterClass.length);

  //showing the actual class it got
  var randClass = characterClass[rngClass];

  //checking if it worked
  console.log(rngClass);
  console.log(randClass);
  classTraits();
  return randClass;
};
const rollRace = () => {
  console.log(characterRace);
  //figuring out what class it'll be
  var rngRace = Math.floor(Math.random() * characterRace.length);

  //showing the actual class it got
  var randRace = characterRace[rngRace];

  //checking if it worked
  console.log(rngRace);
  console.log(randRace);

  return randRace;
};

//rolling the stats
const rollStats = () => {
  //let statsRolled = [];
  for (let i = 0; i < 6; i++) {
    //setting the parameters of the random number
    var rngStat = 1 + Math.floor(Math.random() * 20);
    //making sure the stat they get isn't below 10
    while (rngStat < 10) {
      rngStat = 1 + Math.floor(Math.random() * 20);
    }
    //inserting the stat
    //statsRolled.push(rngStat);
    stats.push(rngStat);
    for (let j = 0; j < 0; j++) {
      stats.pop(j);
    }
  }
  console.log(stats);
  //console.log(statsRolled);

  placeStats(stats);

  console.log(stats);
  // statsRolled = statsRolled.length[0];
  //return stats;
  //   placeStats(statsRolled);
};

const placeStats = () => {
  // var pickedStat;
  shuffleStats(stats);
  const statSheet = {
    str: stats[0],
    dex: stats[1],
    con: stats[2],
    int: stats[3],
    wis: stats[4],
    cha: stats[5],
  };
  //   for (let i = 0; i < 6; i++) {
  //     //selects random stat from stats
  //     pickedStat = Math.floor(Math.random() * stats.length);

  //     if ((statSheet.str = 0)) {
  //       statSheet.str = stats[pickedStat];
  //       stats.pop(pickedStat);
  //     }
  //   }
  console.log(statSheet);
  stats.length[0];
  //   for (let i = 0; i < stats.length; i++) {
  //     statSheet.push(stats);
  //     const statSheet = {
  //       str: stats,
  //       dex: stats,
  //       cha: stats,
  //       wis: stats,
  //       int: stats,
  //       con: stats,
  //     };
  //   }

  //   console.log(statSheet);
};
function shuffleStats(stats) {
  for (let i = stats.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [stats[i], stats[j]] = [stats[j], stats[i]];
  }
}
