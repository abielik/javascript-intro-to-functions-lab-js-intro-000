function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log (string.toUpperCase())
}
function logWhisper(string) {
  console.log (string.toLowerCase())
}

function sayHiToGrandma(string) {
if (string.toUpperCase() === string) {return "YES INDEED!"};
if (string.toLowerCase() === string) {return "I can't hear you!"};
if (string === "I love you, Grandma.") {return "I love you, too."};

var uppercase = "I LOVE YOU, GRANDMA.";
var lowercase = "i love you, grandma.";
var mixedCase = "I love you, Grandma.";

uppercase.toUpperCase() === uppercase;
lowercase.toLowerCase() === lowercase;
mixedCase.toUpperCase() === mixedCase;
mixedCase.toLowerCase() === mixedCase;
}
