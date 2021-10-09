var likes = document.getElementsByClassName("like");
for (let i = 0; i < likes.length; i++) {
  let lik = likes[i];
  lik.addEventListener("click", function () {
    if (lik.style.color === "red") {
      lik.style.color = "black";
    } else {
      lik.style.color = "red";
    }
  });
}
//plus btn
var pluss = document.getElementsByClassName("plus-btn");
for (let i = 0; i < pluss.length; i++) {
  let plus = pluss[i];
  plus.addEventListener("click", function () {
    plus.previousElementSibling.value++;
    totalp();
  });
}
//minus
var minuss = document.getElementsByClassName("minus-btn");
for (let i = 0; i < minuss.length; i++) {
  let minus = minuss[i];
  minus.addEventListener("click", function () {
    minus.nextElementSibling.value--;
    totalp();
  });
}
//delete
var deletes = document.getElementsByClassName("delete");
for (let i = 0; i < deletes.length; i++) {
  let del = deletes[i];
  del.addEventListener("click", function () {
    del.parentElement.remove();
    totalp();
  });
}
// //prix total
function totalp() {
  var items = document.getElementsByClassName("Item");
  let s = 0;
  var total = document.getElementById("finalPrice");
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    s =
      s +
      item.querySelector(".Quant").value *
        item.querySelector(".price").innerHTML;
  }
  total.value = s;
  console.log(s);
}
