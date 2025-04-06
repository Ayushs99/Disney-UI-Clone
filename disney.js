const video = document.querySelector("#video");
const corosol = document.querySelector(".corosol");
const black = document.querySelector(".black-filter");
const left=document.querySelector(".left-nav");
const hover_left=document.querySelector(".left-nav-over");
const select=document.querySelector(".select");

left.addEventListener("click",()=>{
    hover_left.classList.toggle("display");
    left.classList.toggle("display");
    hover_left.style.backgroundColor="transparent";
    corosol.style.backgroundImage = "none";
});
hover_left.addEventListener("mouseover",()=>{
    video.classList.add("display");
    video.play();
    black.classList.add("none");
    hover_left.style.backgroundColor="transparent";
    corosol.style.backgroundImage = "none";
});

hover_left.addEventListener("mouseout", () => {
    hover_left.classList.remove("display");
    left.classList.remove("display");
    video.classList.remove("display");
});


left.addEventListener("mouseover", () => {
    video.classList.add("display");
    video.play();
    black.classList.add("none");
    left.style.backgroundColor="transparent";
    corosol.style.backgroundImage = "none";
});

left.addEventListener("mouseout", () => {
    video.classList.remove("display");
    video.pause();
    black.classList.remove("none");
    left.style.backgroundColor = "rgb(14, 14, 34)";
    corosol.style.backgroundImage = 'url("https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8726/808726-i")';
});
corosol.addEventListener("mouseover", () => {
    video.classList.add("display");
    video.play();
    black.classList.add("none");
    left.style.backgroundColor="transparent";
    corosol.style.backgroundImage = "none";
});

corosol.addEventListener("mouseout", () => {
    video.classList.remove("display");
    video.pause();
    // video.currentTime = 0;
    black.classList.remove("none");
    left.style.backgroundColor = "rgb(14, 14, 34)";
    corosol.style.backgroundImage = 'url("https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8726/808726-i")';
});

const container_1=document.querySelector(".container-1");
const container_2=document.querySelector(".container-2");
const container_3=document.querySelector(".container-3");

container_1.addEventListener("mouseout",()=>{
    video.classList.remove("display");
});

container_2.addEventListener("mouseout",()=>{
    video.classList.remove("display");
});

container_3.addEventListener("mouseout",()=>{
    video.classList.remove("display");
});

const bar = document.querySelector("#h");

bar.addEventListener("mouseover", () => {
    video.classList.add("display");
    video.play();
    black.classList.add("none");
    left.style.backgroundColor = "transparent";
    corosol.style.backgroundImage = "none";
});
