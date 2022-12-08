var dn=document.querySelectorAll(".drum").length
console.log(dn)
for(var i = 0; i<dn;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function() {
        


        var btt=this.innerHTML;

        msd(btt);
        btna(btt);
    
    }
)};

document.addEventListener("keypress",function(e) {
        msd(e.key);
        btna(e.key);

    });

function msd(key){
        switch (key) {
            case "q":
            var crash = new Audio("sounds/crash.mp3"); 
            crash.play();
            break;
            
            case "w":
            var kick = new Audio("sounds/kick-bass.mp3"); 
            kick.play();
            break;

            case "e":
            var snare = new Audio("sounds/snare.mp3"); 
            snare.play();
            break;

            case "r":
            var tom1 = new Audio("sounds/tom-1.mp3"); 
            tom1.play();
            break;

            case "t":
            var tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play();
            break;

            case "y":
            var tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play();
            break;

            case "u":
            var tom4 = new Audio("sounds/tom-4.mp3"); 
            tom4.play();
            break;

            case "i":
            var crash = new Audio("sounds/crash.mp3"); 
            crash.play();
            break;
            
            case "o":
            var kick = new Audio("sounds/kick-bass.mp3"); 
            kick.play();
            break;

            case "p":
            var snare = new Audio("sounds/snare.mp3"); 
            snare.play();
            break;

            case "a":
            var tom1 = new Audio("sounds/tom-1.mp3"); 
            tom1.play();
            break;

            case "s":
            var tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play();
            break;

            case "d":
            var tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play();
            break;

            case "f":
            var tom4 = new Audio("sounds/tom-4.mp3"); 
            tom4.play();
            break;

            case "g":
            var crash = new Audio("sounds/crash.mp3"); 
            crash.play();
            break;
            
            case "h":
            var kick = new Audio("sounds/kick-bass.mp3"); 
            kick.play();
            break;

            case "j":
            var snare = new Audio("sounds/snare.mp3"); 
            snare.play();
            break;

            case "k":
            var tom1 = new Audio("sounds/tom-1.mp3"); 
            tom1.play();
            break;

            case "l":
            var tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play();
            break;

            case "z":
            var tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play();
            break;

            case "x":
            var tom4 = new Audio("sounds/tom-4.mp3"); 
            tom4.play();
            break;
            
            case "c":
            var crash = new Audio("sounds/crash.mp3"); 
            crash.play();
            break;
            
            case "v":
            var kick = new Audio("sounds/kick-bass.mp3"); 
            kick.play();
            break;

            case "b":
            var snare = new Audio("sounds/snare.mp3"); 
            snare.play();
            break;

            case "n":
            var tom1 = new Audio("sounds/tom-1.mp3"); 
            tom1.play();
            break;

            case "m":
            var tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play();
            break;

        
        
            default:
                break;
        }

};

function btna(currentkey){

    var a = document.querySelector("."+currentkey);
    a.classList.add("pressed");

    setTimeout(function() {
        a.classList.remove("pressed");
    },100);

}





