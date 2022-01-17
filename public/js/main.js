import { Sound } from './Sound.js'
const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')
const stopSound = document.getElementById('stop')

// Check for mobile device
//Not enough time to implement changes
function mobileCheck() {
  if(isMobile) {
    console.log('mobile device')
  }
}

// let mySound = new Sound('../audio/menu-select.wav')
let sound1 = new Sound('../audio/samps/bass.mp3')
let sound2 = new Sound('../audio/samps/drum-loop1.wav')
let sound3 = new Sound('../audio/samps/drum-loop2.wav')
let sound4 = new Sound('../audio/samps/drum-loop3.wav')
let sound5 = new Sound('../audio/samps/drum-loop4.wav')
let sound6 = new Sound('../audio/samps/horn-swell.wav')
let sound7 = new Sound('../audio/samps/piano_chord.wav')
let sound8 = new Sound('../audio/samps/piano_hit_1a.wav')
let sound9 = new Sound('../audio/samps/street_perc_1.wav')


function bank1() {
  sound1.play()
}
function bank2() {
  sound2.play()
}
function bank3() {
  sound3.play()
}
function bank4() {
  sound4.play()
}
function bank5() {
  sound5.play()
}
function bank6() {
  sound6.play()
}
function bank7() {
  sound7.play()
}
function bank8() {
  sound8.play()
}
function bank9() {
  sound9.play()
}

function haltSound() {
  sound1.stop()
  sound2.stop()
  sound3.stop()
  sound4.stop()
  sound5.stop()
  sound6.stop()
  sound7.stop()
  sound8.stop()
  sound9.stop()
}

document.addEventListener("DOMContentLoaded", mobileCheck)
btn1.addEventListener('click', bank1)
btn2.addEventListener('click', bank2)
btn3.addEventListener('click', bank3)
btn4.addEventListener('click', bank4)
btn5.addEventListener('click', bank5)
btn6.addEventListener('click', bank6)
btn7.addEventListener('click', bank7)
btn8.addEventListener('click', bank8)
btn9.addEventListener('click', bank9)
stopSound.addEventListener('click', haltSound)