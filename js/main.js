//Pasador de paginas

const pages = document.querySelectorAll(".page");
const translateAmount = 105;
let translate = 5;
slide = (direction) => {
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateY(${translate}%)`)
    );
};

//control video
let videoBack = document.getElementById("videoBack");
let btnVideo = document.getElementById("btnVideo");

btnVideo.addEventListener("click", playVideo);

function playVideo() {
    if (videoBack.paused) {
        videoBack.play();
        btnVideo.classList.remove("btnVideo--paused");
    } else {
        videoBack.pause();
        btnVideo.classList.add("btnVideo--paused");
    }
};