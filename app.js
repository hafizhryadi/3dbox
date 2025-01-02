let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let box = document.querySelector('.box')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')
let degree = 0

prev.addEventListener('click', function() {
    degree += 90
    box.style = `transform: perspective(1000px) rotateY(${degree}deg)`
    box2.style = `transform: perspective(1000px) rotateY(${degree}deg`
    box3.style = `transform: perspective(1000px) rotateY(${degree}deg`
    box4.style = `transform: perspective(1000px) rotateY(${degree}deg`
})

next.addEventListener('click', function () {
    degree -= 90
    box.style = `transform: perspective(1000px) rotateY(${degree}deg)`
    box2.style = `transform: perspective(1000px) rotateY(${degree}deg`
    box3.style = `transform: perspective(1000px) rotateY(${degree}deg`
    box4.style = `transform: perspective(1000px) rotateY(${degree}deg`
})