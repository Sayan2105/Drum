
for(var i = 0 ; i < 7 ;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var stm = this.innerHTML;
        playSound(stm);
        animation(stm);
    });
}

document.addEventListener("keypress", function(event){
    console.log(event.key);
    playSound(event.key);
    animation(event.key);
})

function animation(stm){
    document.querySelector("." + stm).classList.add("pressed");

    setTimeout(() => {
        document.querySelector("." + stm).classList.remove("pressed");
    }, 70);
}

function playSound(stm){
    switch(stm){
        case "w":
            var crash = new Audio("Sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var crash = new Audio("Sounds/kick-bass.mp3");
            crash.play();
            break;
        case "s":
            var crash = new Audio("Sounds/snare.mp3");
            crash.play();
            break;
        case "d":
            var crash = new Audio("Sounds/tom-1.mp3");
            crash.play();
            break;
        case "j":
            var crash = new Audio("Sounds/tom-2.mp3");
            crash.play();
            break;
        case "k":
            var crash = new Audio("Sounds/tom-3.mp3");
            crash.play();
            break;
        case "l":
            var crash = new Audio("Sounds/tom-4.mp3");
            crash.play();
            break;
    }
}
