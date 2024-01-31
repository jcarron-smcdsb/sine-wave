input.onButtonPressed(Button.A, function () {
    T += 0.1
})
input.onButtonPressed(Button.AB, function () {
    reset = !(reset)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    T += -0.01
})
let y = 0
let reset = false
reset = false
reset = false
basic.clearScreen()
let x = 0
let T = 1
let ys = [
0,
0,
0,
0,
0
]
while (!(reset)) {
    y = Math.map(Math.sin(1 / (2 * T) * x), -1, 1, 0, 4)
    ys.unshift(y)
    ys.pop()
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, Math.round(ys[index]))
    }
    serial.writeValue("x", y)
    basic.pause(100)
    x += 1
}
