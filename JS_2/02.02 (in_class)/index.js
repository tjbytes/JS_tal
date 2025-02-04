function validatestring(stringLength) {
  let input = prompt("Enter a word here:");
  if (input > stringLength) {
    console.log("Too long");
  } else {
    console.log(input.length);
  }
}

console.log(validatestring("tringLength"))