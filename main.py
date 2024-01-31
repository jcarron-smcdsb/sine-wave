def on_button_pressed_a():
    global reset
    reset = False
    basic.clear_screen()
    while not (reset):
        led.toggle(randint(0, 4), randint(0, 4))
        basic.pause(50)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global reset
    basic.clear_screen()
    reset = not (reset)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global reset, x, ys, y
    reset = False
    basic.clear_screen()
    x = 0
    ys = [0, 0, 0, 0, 0]
    while not (reset):
        y = Math.map(Math.sin(x), -1, 1, 0, 4)
        led.plot(x, y)
        basic.pause(200)
        x += 1
        if x >= 5:
            x = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

y = 0
ys: List[number] = []
x = 0
reset = False
reset = False