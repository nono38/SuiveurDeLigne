control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    dfht = 1
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    dfht = 0
})
let dfht = 0
dfht = 0
basic.forever(function () {
    if (dfht == 1) {
        if (turtleBit.LineTracking() == 7) {
            turtleBit.state(MotorState.stop)
            turtleBit.run(DIR.Run_forward, 47)
        } else if (turtleBit.LineTracking() == 3) {
            turtleBit.state(MotorState.stop)
            turtleBit.run(DIR.Turn_Right, 47)
        } else if (turtleBit.LineTracking() == 6) {
            turtleBit.state(MotorState.stop)
            turtleBit.run(DIR.Turn_Left, 47)
        } else if (turtleBit.LineTracking() == 0) {
            turtleBit.state(MotorState.stop)
        }
    } else {
        basic.showNumber(turtleBit.LineTracking())
    }
})
basic.forever(function () {
	
})
