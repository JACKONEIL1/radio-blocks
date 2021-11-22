radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    pins.servoWritePin(AnalogPin.P1, 120)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 60)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
	
})
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
radio.setGroup(69)
