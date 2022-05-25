//Handle Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const mySong = document.getElementById("mySong");
const icon = document.getElementById("icon");

//Handle Music Player
icon.onclick = function() {
    if(mySong.paused) {
        mySong.play();
        icon.src = "media/White Pause Button Symbol Png.png";
    } else {
        mySong.pause();
        icon.src = "media/Play Button Png.png";
    }

}



