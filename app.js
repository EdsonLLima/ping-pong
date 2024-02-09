const canvasEl = document.querySelector("canvas")
const canvasCtx = canvasEl.getContext("2d")
const gapX = 10

const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function () {
        canvasCtx.fillStyle = "#286047"
        canvasCtx.fillRect(0, 0, this.w, this.h)
    },
}

const line = {
    w: 15,
    h: field.h,
    draw: function () {
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h)
    }
}

const leftPaddle = {
    x: gapX,
    y: 0,
    w: line.w,
    h: 200,
    draw: function () {
        canvasCtx.fillRect(this.x, this.y, this.w, this.h)
    }
}

const rightPaddle = {
    x: field.w - line.w - gapX,
    y: 200,
    w: line.w,
    h: 200,
    draw: function () {
        canvasCtx.fillRect(this.x, this.y, this.w, this.h)
    }
}

const ball = {
    x: 350,
    y: 400,
    r: 20,
    draw: function () {
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.beginPath()
        canvasCtx.arc(this.x, this.y, this.r, 0, 2.0 * Math.PI, false)
        canvasCtx.fill()
    }



}

function setup() {
    canvasEl.width = field.w
    canvasEl.height = field.h
    canvasCtx.width = field.w
    canvasCtx.height = field.h
}

function draw() {
    field.draw()
    line.draw()
    leftPaddle.draw()
    rightPaddle.draw()
    ball.draw()




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