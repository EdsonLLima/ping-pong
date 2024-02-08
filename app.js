const canvasEl = document.querySelector("canvas")
const canvasCtx = canvasEl.getContext("2d")

const lineWidth = 15

const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function () {
        canvasCtx.fillStyle = "#286047"
        canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    },
}

function setup() {
    canvasEl.width = field.w
    canvasEl.height = field.h
    canvasCtx.width = field.w
    canvasCtx.height = field.h
}

function draw() {
    field.draw()



    canvasCtx.fillStyle = "#ffffff"
    // const x = window.innerWidth / 2 - lineWidth / 2
    // const y = 0
    // const w = lineWidth
    // const h = window.innerHeight

    //draw line central
    canvasCtx.fillRect(window.innerWidth / 2 - lineWidth / 2, 0,
        lineWidth, window.innerHeight)


    //draw left racket
    canvasCtx.fillRect(10, 100, lineWidth, 200)

    //draw right racket
    canvasCtx.fillRect(
        window.innerWidth - lineWidth - 10,
        200,
        lineWidth,
        200)

    //draw bol
    canvasCtx.beginPath()
    canvasCtx.arc(200, 500, 20, 0, 2.0 * Math.PI, false)
    canvasCtx.fill()

    //draw scoreboard
    canvasCtx.font = "bold 72px Arial"
    canvasCtx.textAlign = "center"
    canvasCtx.textBaseline = "top"
    canvasCtx.fillStyle = "01341D"
    canvasCtx.fillText("3", window.innerWidth / 4, 50)
    canvasCtx.fillText("1",
        window.innerWidth / 4 + window.innerWidth / 2,
        50)


}

setup()
draw()