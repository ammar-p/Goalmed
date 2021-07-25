
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { x: "0%", duration: 1.2, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.7, delay: 0.1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.2");

document.getElementById("button").addEventListener("click",openpopup);
document.querySelector(".close").addEventListener("click",closepopup);

function openpopup() {
    document.querySelector(".popup-overlay").style.display = "flex";
  }
  
function closepopup() {
    document.querySelector(".popup-overlay").style.display = "none";  }
