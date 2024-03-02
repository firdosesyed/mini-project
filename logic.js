var roll = document.querySelector(".circle");

var main = document.querySelector(".main")

main.addEventListener("mousemove", (dets) => {
roll.style.top = dets. y+="px"
roll.style.left = dets. x+="px"
})
main.addEventListener("mouseenter", (dets) => {
roll.style.opacity = "1"
})
main.addEventListener("mouseleave", (dets) => {
roll.style.opacity = "0"
roll.style.transision = "0.1s"
})


const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

