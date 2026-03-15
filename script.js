const noBtn = document.querySelector(".no-btn")
const yesBtn = document.querySelector(".yes-btn")
const letter = document.querySelector(".letter")

noBtn.addEventListener("mouseover", ()=>{

const x = Math.random()*300-150
const y = Math.random()*300-150

noBtn.style.transform = `translate(${x}px,${y}px)`

})

yesBtn.addEventListener("click", ()=>{

letter.classList.remove("hidden")

})