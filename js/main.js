
/*/******************* Auto Text ******************* /*/

const textEl = document.getElementById('text')
const text = 'Prove a Sensação'
let idx = 1
let speed = 100

writeText()

function writeText() {

    textEl.innerText = text.slice(0, idx)
    idx++

    if(idx > text.length) {
        idx = idx
    }

    setTimeout(writeText, speed)
}


/*/******************* Menu Toggle ******************* /*/

const menuToggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
const navis = document.querySelectorAll('.navis')
const body = document.querySelector('body')

const toggleMenu = () => {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('mobile-menu')  
    body.classList.toggle('hidden')
}

navis.forEach(navi => {
    navi.addEventListener('click', ()=> {
        menuToggle.classList.remove('active')
        navigation.classList.remove('mobile-menu')
        body.classList.remove('hidden')
    })
})


/*/*********************** Modal *********************** /*/

const modalContainer = document.querySelector('.modal-container')
const modal01 = document.querySelector('.modal-01')
const modal02 = document.querySelector('.modal-02')
const open_first_modal = document.querySelector('.learnmore-btn')
const close_first_modal = document.querySelector('.close-first-btn')
const open_second_modal = document.querySelector('.findout-btn')
const close_second_modal = document.querySelector('.close-second-btn')


open_first_modal.addEventListener('click', ()=> {
    modalContainer.style.display = 'flex'
    setTimeout(()=> {modal01.classList.add('modal-active')}, 100)
})

close_first_modal.addEventListener('click', ()=> {
    modalContainer.style.display = 'none'
    modal01.classList.remove('modal-active')
})

open_second_modal.addEventListener('click', ()=> {
    modalContainer.style.display = 'flex'
    setTimeout(()=> {modal02.classList.add('modal-active')}, 100)
})

close_second_modal.addEventListener('click', ()=> {
    modalContainer.style.display = 'none'
    modal02.classList.remove('modal-active')
})




/*/******************* Vertical Slide ******************* /*/

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

const main = document.querySelector('.main')

let activeSlideIndex = 0
let width = window.innerWidth;

const widths = [0, 600, 980];

const resizeFn = () => {
    if (window.innerWidth>=widths[0] && window.innerWidth<widths[1]) {
        slideLeft.style.top = `-${(slidesLength - 1) * 50 }vh` 
        slideLeft.style.transform = `translateY(0)` 
        slideRight.style.transform = `translateY(0)` 
        console.log('tablet')
    } else if (window.innerWidth>=widths[1] && window.innerWidth<widths[2]) {
        slideLeft.style.top = `-${(slidesLength - 1) * 100 }vh`
        slideLeft.style.transform = `translateY(0)` 
        slideRight.style.transform = `translateY(0)` 
        console.log('pc')
    } else {
        slideLeft.style.top = `-${(slidesLength - 1) * 100 }vh`
        slideLeft.style.transform = `translateY(0)` 
        slideRight.style.transform = `translateY(0)` 
        console.log('pc')
    }
}
window.onresize = resizeFn;
resizeFn();


upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }
    
    const sliderHeight = sliderContainer.clientHeight
    let slidePosition = `${(activeSlideIndex * sliderHeight)}`
    let width = window.innerWidth;

    slideRight.style.transform = width < 600 ? `translateY(-${slidePosition/2}px)`: `translateY(-${slidePosition}px)`
    slideLeft.style.transform = width < 600 ? `translateY(${(slidePosition)/2}px)` : `translateY(${slidePosition}px)`

}


/*/******************* Text Animation ******************* /*/

const texts = document.querySelectorAll('.text')

window.addEventListener('scroll', checkTexts)

checkTexts()

function checkTexts() {

    const triggerBottom = window.innerHeight / 5 * 4  //브라우저의 창의 높이

    texts.forEach(text => {
        const textTop = text.getBoundingClientRect().top //사용자의 위치값 구하기

        if(textTop < triggerBottom) {
            text.classList.add('show-text')
        } else {
            text.classList.remove('show-text')
        }
    })
}