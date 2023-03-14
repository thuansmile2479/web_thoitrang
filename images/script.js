const slide = document.querySelectorAll(".slider-content-item")
const neXt = document.querySelector(".fa-chevron-right")
const prev = document.querySelector(".fa-chevron-left")

let index = 0;

neXt.addEventListener("click", () => {
    slide[index].classList.remove('active')
    index = (index+1) % slide.length
    slide[index].classList.add('active')
})
prev.addEventListener("click", () => {
    slide[index].classList.remove('active')
    index = (index-1 + slide.length) % slide.length
    slide[index].classList.add('active')
})

