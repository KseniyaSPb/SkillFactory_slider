const sliderLine = document.querySelector('.slider-line');


const prewButton = document.querySelector('.prew');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let position = 0;
let dotIndex = 0;

const nextLine = () => {
    if (position < (dots.length - 1) * 679) {
        position += 679
        dotIndex++
    } else {
        position = 0
        dotIndex = 0
    }
    sliderLine.style.left = -position + 'px'
    thisSlide(dotIndex)
}

const prewLine = () => {
    if (position > 0) {
        position -= 679
        dotIndex--
    } else {
        position = (dots.length - 1) * 679
        dotIndex= (dots.length - 1)
    }
    sliderLine.style.left = -position + 'px'
    thisSlide(dotIndex)
}


const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active')
    }
    dots[index].classList.add('active')
}

//add event listener
nextButton.addEventListener('click', nextLine);
prewButton.addEventListener('click', prewLine)

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = 679 * index
        sliderLine.style.left = - position + 'px'
        dotIndex = index
        thisSlide(dotIndex)
})
    })

    // set interval
    setInterval(()=>{
        nextLine()
    }, 3000)


    //add links 
    