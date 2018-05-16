var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  var kittens = [...kittens, "Meeko"];
  return kittens;
}