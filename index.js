var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  var kittens = kittens.push();
  return kittens;
}