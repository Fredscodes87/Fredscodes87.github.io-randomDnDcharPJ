//the Array of classes
const characterClass = [
  "Cleric",
  "Rogue",
  "Paladin",
  "Fighter",
  "Wizard",
  "Bard",
  "Sorcerer",
  "Barbarian",
  "Monk",
  "Druid",
  "Ranger",
  "Warlock",
];

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
export { theClass };
alert("testing");
