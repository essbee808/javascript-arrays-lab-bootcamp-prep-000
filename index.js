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