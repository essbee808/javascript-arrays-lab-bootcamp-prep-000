var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  kittens.push('Ralph');
  return kittens;
}

// Prepends a kitten to the beginning of the array
function destructivelyPrependKitten() {
  kittens.unshift('Bob');
  return kittens;
}

// Removes the last kitten from the kittens array
function destructivelyRemoveLastKitten() {
  kittens.pop('Garfield');
  return kittens;
}

// Removes the first kitten from the array
function destructivelyRemoveFirstKitten() {
  kittens.shift('Milo');
  return kittens;
}

// Append kitten to the kittens array AND return a new array, leaving the kittens array unchanged aka "Non-mutated"
function appendKitten() {
  kittens = [...kittens, 'Broom'];
  return kittens;
}