for (let index = 0; index <= 2; index++) {
    music.playTone(262, music.beat(BeatFraction.Breve))
    basic.showNumber(3 - index)
}
music.playTone(392, music.beat(BeatFraction.Whole))
basic.showString("Go!")
basic.forever(function () {
	
})
