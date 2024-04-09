const year = document.querySelector('#year')
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const countdown = document.querySelector('#countdown')
const preloader = document.querySelector('#preloader')


const currentYear = new Date().getFullYear()

const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)

function updateCounter(){
    const currentTime = new Date()
    const diff = nextYear - currentTime;
    // days left
    const dayLeft = Math.floor(diff / 1000 / 60 / 60 / 24)
    // hours left
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60 ) % 24
    // hours left
    const minutesLeft = Math.floor(diff / 1000 / 60  ) % 60
    // seconds left
    const secondsLeft = Math.floor(diff / 1000  ) % 60
    
    
    
    year.innerText = currentYear + 1
    days.innerText = dayLeft < 10 ? "0" + dayLeft : dayLeft
    hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft
    minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft
    seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft
}
setInterval(updateCounter, 1000)
setTimeout(function(){
  preloader.remove()
  countdown.style.display = 'flex'
}, 3000)