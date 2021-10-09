var min = document.getElementById("min");

console.log(min);
var qte = document.getElementById("qte");
console.log(qte);

min.addEventListener("click", function () {
  qte.value--;
});
var pluus = document.getElementById("pluus");

console.log(pluus);
var qte = document.getElementById("qte");
console.log(qte);

pluus.addEventListener("click", function () {
  qte.value++;
});
let btn = document.querySelector("button");
// Remove the event listener

lik.addEventListener("click", function () {
  lik.style.color = "red";
});

var coeur = document.getElementById("coeur");
coeur.addEventListener("click", function () {
  coeur.style.color = "red";
});

var mo = document.getElementById("mo");

console.log(mo);
var qantité = document.getElementById("quantité");
console.log(quantité);

mo.addEventListener("click", function () {
  quantité.value--;
});
var love = document.getElementById("love");
love.addEventListener("click", function () {
  love.style.color = "red";
});
var mam = document.getElementById("mam");

console.log(mam);
var qqttee = document.getElementById("qqttee");
console.log(qqttee);

mam.addEventListener("click", function () {
  qqttee.value--;
});
let maiin = document.getElementById("maiin");
maiin.addEventListener("click", function () {
  maiin.parentElement.remove();
});
