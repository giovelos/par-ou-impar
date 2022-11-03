const numberPlayer = document.getElementById("input1");
const btnPlay = document.getElementById("btnPlay");
const result = document.getElementById("result");
const numberPc = document.getElementById("numberPc");
const par = document.getElementById("par");
const impar = document.getElementById("impar");

const game = btnPlay.addEventListener("click", (event) => {
  event.preventDefault();
  const player2 = Math.floor(Math.random() * 6);
  let sum = 0;
  //console.log(`P1 = ${numberPlayer.value}`);
  //console.log(`player2 = ${player2}`);
  //console.log(par.checked);
  sum = Number(numberPlayer.value) + player2;
  numberPc.innerText = player2;
  //console.log(sum);
  //console.log(sum % 2 === 0);
  if ((par.checked && sum % 2 === 0) || (impar.checked && sum % 2 !== 0)) {
    result.innerText = "VOCÊ VENCEU!";
    result.className = "win";
  } else {
    result.innerText = "VOCÊ PERDEU!";
    result.className = "lose";
  }
});
