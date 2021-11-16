radio.onReceivedNumber(function (receivedNumber) {
    let received_number = 0
    if (received_number == 1) {
    	
    }
    if (received_number == 2) {
    	
    }
    if (received_number == 3) {
    	
    }
    if (received_number == 4) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
})
radio.setGroup(96)
