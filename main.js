$(document).ready(function () {
    let sounds = [new Audio('sounds/cat.mp3'), new Audio('sounds/dog.mp3'), new Audio('sounds/parrot.mp3')];
    let index_sound = 0;
    
    $('#cat').click(function () {
        sounds[index_sound].pause();
        
        $("img").fadeOut(400, () => {
            $("img").attr("src", "images/cat.jpg");
            $("#animal_txt").text("Cat, also referred to as the domestic cat");
        });
        $("img").fadeIn(400);
        
        index_sound = 0;
    });
    $('#dog').click(function () {
        sounds[index_sound].pause();

        $("img").fadeOut(400, () => {
            $("img").attr("src", "images/dog.jpg");
            $("#animal_txt").text("Dogs have been bred for desired behaviors");
        });
        $("img").fadeIn(400);
        
        index_sound = 1;
    });
    $('#parrot').click(function () {
        sounds[index_sound].pause();
        
        $("img").fadeOut(400, () => {
            $("img").attr("src", "images/parrot.jpg");
            $("#animal_txt").text("Parrots, also known as psittacines");
        });
        $("img").fadeIn(400);
        
        index_sound = 2;
    });
    
    $("#play_sound").click(function () {
        sounds[index_sound].currentTime = 0;
        sounds[index_sound].volume = 0.5;
        sounds[index_sound].play();
    });
});