function DarValor(letra) {
if (letra == "E" || letra == "e"){
return "3"
}
else if (letra == "O" || letra == "o"){
return "0"
}
else if (isNaN(letra) == false) {
return ++letra;
}
else {
return letra
}
}
function Invertir(yeyo) {
  var invertidoooooooooo = "";
  for (var i = yeyo.length-1; i > -1; i--) {
    invertidoooooooooo += DarValor(yeyo[i]);
  }
    return invertidoooooooooo;
}

console.log(Invertir("YEYO555"));
console.log(Invertir("Yeyo123"));
