var roll = document.querySelector(".circle");

var main = document.querySelector("body")

// main.addEventListener("mousemove", (dets) => {
//     console.log(dets);
//     main.style.top = dets. y+"roll"
//     main.style.left = dets. x+"roll"

// })

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