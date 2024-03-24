serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate9600)
serial.writeString("start")
basic.forever(function () {
    serial.writeString("" + (input.temperature()))
    serial.writeString("  ")
    basic.pause(500)
})
