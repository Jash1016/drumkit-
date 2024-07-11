var drum = document.querySelectorAll(".drum").length;

for(var i=0; i< drum ; i++){ 

    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        //keypress detector
        document.addEventListener("keypress", function(logkey){
            //someshit needs to be done
            sound(logkey.key);
            animation(logkey.key);
        })

        //innerhtml
        var m = this.innerHTML;
        sound(m);
        animation(m);

        //playing audio
        function sound(key){
        switch (key) {
            case "w":
                var torn1 = new Audio('sounds/tom-1.mp3');
                torn1.play();
                
                break;
                case "a":
                    var torn2 = new Audio('sounds/tom-2.mp3');
                torn2.play();
                break;

                case "s":
                    var torn3 = new Audio('sounds/tom-3.mp3');
                torn3.play();
                break;

                case "d":
                    var torn4 = new Audio('sounds/tom-4.mp3');
                torn4.play();
                break;

                case "j":
                    var torn5 = new Audio('sounds/snare.mp3');
                torn5.play();
                break;

                case "k":
                    var torn6 = new Audio('sounds/crash.mp3');
                torn6.play();
                break;

                case "l":
                    var torn7 = new Audio('sounds/kick-bass.mp3');
                torn7.play();
                break;
        
            default:
                break;
        }}

});
}
function animation(currentkey){
    var active= document.querySelector("."+currentkey)
    active.classList.add("pressed");
    setTimeout(function (){
        active.classList.remove("pressed")
    }, 100);
}