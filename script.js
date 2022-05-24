const mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function() {
    if(mySong.paused) {
        mySong.play();
        icon.src = "media/White Pause Button Symbol Png.png";
    } else {
        mySong.pause();
        icon.src = "media/Play Button Png.png";
    }
    m
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

