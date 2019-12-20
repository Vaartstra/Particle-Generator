// Particle Genorator JavaScript
'use strict';

// Canvas Stuff
let cnv = document.getElementById('canvas')
let ctx = cnv.getContext('2d')
cnv.width = 600
cnv.height = 400

// Global Variables
let mouseX, mouseY
let particleNum = 3
let particleSizeMin = 3
let particleSizeMax = 6
let gravityStrength = 0.5
let particleXSpread = 4
let particleYSpread = 10
let particleOpacityChange = 2
let particleRed = 0
let particleGreen = 0
let particleBlue = 0

var particle = []
var particleX = []
var particleY = []
var particleMomentumX = []
var particleMomentumY = []
var particleOpacity = []
var particleSize = []

// Loop
requestAnimationFrame(loop)
function loop() {
    // draw background
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, cnv.width, cnv.height)

    // draw particles
    for (let x = 0; x <= particle.length; x++) {
        ctx.fillStyle = 'rgba(' + particleRed + ', ' + particleGreen + ', ' + particleBlue + ',' + particleOpacity[x] + ')'
        ctx.fillRect(particleX[x], particleY[x], particleSize[x], particleSize[x])

        // update values
        particleY[x] += particleMomentumY[x]
        particleMomentumY[x] += gravityStrength
        particleX[x] += particleMomentumX[x]
        particleOpacity[x] -= particleOpacityChange / 100
    }

    requestAnimationFrame(loop)
}

// Event Listeners
document.getElementById('canvas').addEventListener('click', clickHandler)

// Event Functions
function clickHandler(event) {
    let cnvRect = cnv.getBoundingClientRect()

    mouseX = event.x - cnvRect.x
    mouseY = event.y - cnvRect.y

    for (let x = 0; x < particleNum; x++) {
        particle[particle.length] = particle.length + 1
        particleX[particle.length] = mouseX
        particleY[particle.length] = mouseY

        particleMomentumX[particle.length] = (Math.random() - 0.5) * particleXSpread
        particleMomentumY[particle.length] = (Math.random() - 0.5) * particleYSpread
        particleSize[particle.length] = Math.floor(Math.random() * (particleSizeMax - particleSizeMin + 1) * 1000) / 1000 + particleSizeMin

        particleOpacity[particle.length] = 1
    }
}