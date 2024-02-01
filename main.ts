input.onButtonPressed(Button.A, function () {
    T += -0.1
})
input.onButtonPressed(Button.AB, function () {
    reset = !(reset)
    basic.clearScreen()
    T = 1
    x = 0
    y = 0
    ys = [
    0,
    0,
    0,
    0,
    0
    ]
})
input.onButtonPressed(Button.B, function () {
    T += 0.1
})
let y = 0
let ys: number[] = []
let T = 0
let x = 0
let reset = false
reset = false
basic.clearScreen()
x = 0
T = 1
ys = [
0,
0,
0,
0,
0
]
basic.forever(function () {
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
})
