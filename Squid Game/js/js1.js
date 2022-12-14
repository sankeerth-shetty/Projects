alert("Welcome to Sankeerth Shetty's Squid Game");
if(confirm("do you want to play red light, green light?") == true){
    window.open("index.html");
}
else{
    window.close("index.html");
}


let GirlImg = document.getElementById("doll")
let audio = document.getElementById("audio");
document.getElementById("redlight").addEventListener("click", function () {
    GirlImg.src = "../media/redlight.png"
    audio.src = "../media/red_light.mp3"
    audio.play();
})
document.getElementById("greenlight").addEventListener("click", function () {
    GirlImg.src = "../media/greenlight.png"
    audio.src = "../media/green_light.mp3"
    audio.play();
})