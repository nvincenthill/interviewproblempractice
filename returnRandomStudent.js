const students = [
  "Mac087",
  // "amarine7882",
  "AndySiamas",
  "arthurtharp",
  "Chiijlaw",
  "ChrisALarson",
  "nguyend08",
  // "davydhong",
  "ivan-hui",
  "jgarciabengochea",
  // "jerrywu28",
  "jeongle",
  "enigmatikme",
  // "kaycheez",
  "lancl",
  // "Mjones13",
  "MattRodigheri",
  "mvandehaar",
  "GaoR",
  "samueljshih",
  "shabbyjoon",
  "stajima",
  "iloveporkchop810",
  "tecostello",
  // "vikramraja1995",
  // "wissemgamra"
  // "Yontaekc"
];

let returnRandomStudent = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

console.log("PLEASE WELCOME TO THE STAGE...");
console.log(returnRandomStudent(students));
