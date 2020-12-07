let playerNumber = document.getElementById("playerNumber");
let numberListe = document.getElementById("numberListe");
let boutonEnvois = document.getElementById("envois");
let boutonRestart = document.getElementById("restart");
let chaudFroidGagner = document.getElementById("chaudFroidGagner");
let chance = document.getElementById("chance");
let randomNumber = Math.floor(Math.random()*100);
let life = 10;

boutonEnvois.addEventListener("click", function () {

    let playerNumberValue = playerNumber.value;
    chance.innerHTML= life;

    if (playerNumberValue == randomNumber) {
            chaudFroidGagner.innerHTML = "Gagner! <br> Restart pour recommencer!";
        }

    else if (life === 0) {
        chaudFroidGagner.innerHTML = "Plus de vie!";
        alert("Plus de vie!");
        window.location.reload();
    }

    else if (playerNumberValue <= (randomNumber - 10) || playerNumberValue >= (randomNumber+10)) {
        chaudFroidGagner.innerHTML = "Froid";
        numberListe.innerHTML += playerNumberValue + ", ";

        life--;
    }

    else if (playerNumberValue > randomNumber || playerNumberValue < randomNumber) {
        chaudFroidGagner.innerHTML = "Chaud";
        numberListe.innerHTML += playerNumberValue + ", ";
        life--;
    }

    else {
        chaudFroidGagner.innerHTML = "Ce n'est pas un nombre!";
    }

})

boutonRestart.addEventListener("click", function restart(){
    window.location.reload();
})