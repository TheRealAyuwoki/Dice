function tirarDados() {
    var randomNumber_1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber_2 = Math.floor(Math.random() * 6) + 1;

    var dado_1 = "images/dice" + randomNumber_1 + ".png";
    var dado_2 = "images/dice" + randomNumber_2 + ".png";

    var image_1 = document.querySelectorAll("img")[0];
    var image_2 = document.querySelectorAll("img")[1];

    image_1.setAttribute("src", dado_1);
    image_2.setAttribute("src", dado_2);

    if (randomNumber_1 > randomNumber_2) {
        document.querySelector("h1").textContent = "🚩 El Jugador 1 Gana!!";
    } else if (randomNumber_1 < randomNumber_2) {
        document.querySelector("h1").textContent = "El Jugador 2 Gana!! 🚩";
    } else {
        document.querySelector("h1").textContent = "Tenemos un empate!!";
    }
}
