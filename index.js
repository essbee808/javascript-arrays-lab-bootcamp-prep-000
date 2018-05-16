var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  var kittens = [...kittens, "Ralph"];
  return kittens;
}