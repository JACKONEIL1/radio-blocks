input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("left")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
})
radio.setGroup(96)
