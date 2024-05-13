// Function shootAndRevenge is the function that calculate the number of shoot and revenge and return a string that can be "Good boy"
// and "Bad boy" according to the condition in the code.
// This function receive string parameter and return string value.

function shootAndRevenge(string) {
  // Declare variable "shoot" and "revenge" for counting number of S(shoot) and R(revenge).
  let shoot = "";
  let revenge = "";

  // Check if string is begin with "R" and end with "S" that make boss baby "Bad boy".
  if (string[0] === "R" || string[string.length - 1] === "S") {
    return "Bad boy";
  }

  // Use "for loop" for check the letter in string.
  // If the letter is "S", store it in variable "shoot".
  // If the letter is "R", store it in variable "revenge".
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "S") {
      shoot = shoot + string[i];
    } else if (string[i] === "R") {
      revenge = revenge + string[i];
    } else {
      // Add additional logic for checking if the string is contain only "S" and "R".
      return `string must be only "S" or "R"`;
    }
  }

  // Compare the length of variable "shoot" and "revenge".
  // "revenge" should greater than or equal "shoot" according to the condition.
  if (revenge.length < shoot.length) {
    return "Bad boy";
  }

  // Return "Good boy" if not include in above condition.
  return "Good boy";
}

console.log(shootAndRevenge("SRSSRRR"));
console.log(shootAndRevenge("RSSRR"));
console.log(shootAndRevenge("SSSRRRRS"));
console.log(shootAndRevenge("SRRSSR"));
console.log(shootAndRevenge("SSRSRRR"));
// additional test case
console.log(shootAndRevenge("SRSRSR"));
console.log(shootAndRevenge("SRRRRRRRRRRRSSSSSSSSSSSR"));
