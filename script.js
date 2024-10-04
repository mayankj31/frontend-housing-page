document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector(".topleft img");
    const rect = image.getBoundingClientRect();
    const image2 = document.querySelector(".regionsc");

    image2.style.border="none";
    image2.style.left = `${rect.left}px`;
    image2.style.top = `${rect.top}px`;
    const hover = document.querySelector(".tooltip");

    const tool = document.querySelector("#enroll");
    tool.addEventListener("mouseenter", () => {
        hover.style.visibility = "visible";
    })
    tool.addEventListener("mouseleave", () => {
        hover.style.visibility = "hidden";
    })
});

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    const text = document.querySelector("button span");
    btn.style.backgroundColor = "rgb(36, 242, 36)";
    const circle = document.querySelector(".circle");
    text.style.visibility = "hidden";
    circle.style.animation = "rotate 0.8s linear 3 ";

    const welcome = document.querySelector(".welcome");
    welcome.style.opacity = "1";
    welcome.style.transform = "translateY(0%)";
    welcome.style.animation = "slidedown 0.3s linear 1.7s forwards ";

    const img = document.querySelector(".house");
    img.style.clipPath = "inset(0% 0% 0% 0%)";
    img.style.animation = "contract 0.7s ease-out 2.2s  forwards ";

    const image2 = document.querySelector(".regionsc");
    image2.style.transition = "all 0.5s ease 2.5s ";
    image2.style.left = "50%";
    image2.style.top = "50%";
    image2.style.width = "60px";
    image2.style.border="17px solid white";
    image2.style.transform = "rotate(0deg)";
    image2.style.animation = "rotate 2s ease-out 2.3s 2, popin 0.4s ease-in 3.7s forwards";
    
    const tleft = document.querySelector(".regions");
    tleft.style.opacity ="1";
    tleft.style.transform = "translateX(50%)";
    tleft.style.animation = "slidein2 0.3s ease-out 2s forwards";

    const tright = document.querySelector(".topright");
    tright.style.opacity ="1";
    tright.style.transform = "translateX(0%)";
    tright.style.animation = "slidedown 0.3s ease-out 2s forwards";

    const tfooter = document.querySelector(".footer");
    tfooter.style.animation = "slidedown 0.3s ease-out 2s forwards";
    setTimeout(() => {
        location.reload()
    }, 3900);           
})
const passd = document.querySelector("#pass");
const togg = document.querySelector("#toggle");
togg.addEventListener("click",()=>{
const type = passd.getAttribute("type")==="password"?"text":"password";
passd.setAttribute("type", type);
})