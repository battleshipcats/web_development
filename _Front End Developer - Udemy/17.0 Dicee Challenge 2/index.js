var random1 = Math.ceil(Math.random()*6);
document.querySelector(".img1").attributes[1].textContent = "./images/dice"+random1+".png";

var random2 = Math.ceil(Math.random()*6);
document.querySelector(".img2").attributes[1].textContent = "./images/dice"+random2+".png";

if (random1>random2) {
    document.querySelector("h1").textContent = "🚩 Player 1 wins!"
}else if (random1<random2) {
    document.querySelector("h1").textContent = "Player 2 wins! 🚩"
}else {
    document.querySelector("h1").textContent = "It's a Draw!"
}