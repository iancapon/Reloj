let reloj
let tick;

function preload() {
    tick = loadSound("./tick.mp3");
}

function setup() {
    createCanvas(500, 500)
    reloj = new Reloj()
    textAlign(CENTER, CENTER)
}

function draw() {
    background(255)
    reloj.displayWatch(220 * 1.5, 250, 250)
}

let start = true
function mousePressed() {
    if (start) {
        tick.play()
        start = false
    }
}
