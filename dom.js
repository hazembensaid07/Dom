// calculate the sum of the price
function somme() {
  let price = document.querySelectorAll(".prix");
  let totalPrice = document.querySelector(".order_total_amount");
  let bloc = document.querySelectorAll(".quantité");
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += price[i].innerHTML.replace("$", "") * bloc[i].innerHTML;
  }
  totalPrice.innerHTML = sum + " $";
}

somme();

let plusButton = document.querySelectorAll(".plus");
let qte = document.querySelectorAll(".quantité");

// increment quantity
for (let i = 0; i < plusButton.length; i++) {
  plusButton[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    somme();
  });
}
let minusButton = document.querySelectorAll(".moins");
// decrement quantity
for (let i = 0; i < plusButton.length; i++) {
  minusButton[i].addEventListener("click", function () {
    if (parseInt(qte[i].innerHTML) > 1) {
      qte[i].innerHTML--;
      somme();
    }
  });
}
let supButton = document.querySelectorAll(".btn-danger");
let bloc = document.querySelectorAll(".cart_items");
// delete article
for (let i = 0; i < supButton.length; i++) {
  supButton[i].addEventListener("click", function () {
    console.log(bloc[i]);
    console.log(i);
    bloc[i].parentNode.removeChild(bloc[i]);
    somme();
  });
}

let loveButton = document.querySelectorAll(".heart");
for (let i = 0; i < loveButton.length; i++) {
  loveButton[i].addEventListener("click", function () {
    if ((loveButton[i].style.color = "black")) {
      loveButton[i].style.color = "red";
    } else {
      loveButton[i].style.color = "black";
      console.log("go");
    }
  });
}
