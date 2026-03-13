/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jet Lu
 * Created on: Mar 2026
 * This program will detect light.
*/

// variables
let neopixelStrip: neopixel.Strip = null
let variableLight: number = 50

// setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// program
input.onButtonPressed(Button.A, function (){
  basic.clearScreen()
  variableLight = input.lightLevel()
  basic.showNumber(variableLight)

  // lower than 51
  if (variableLight <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    basic.showIcon(IconNames.Yes)
    neopixelStrip.show()
  }

  // greater than 52 lower than 104
  if (variableLight >= 52 && variableLight <= 104) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    basic.showIcon(IconNames.Yes)
    neopixelStrip.show()
  }

  // greater than 104
  if (variableLight > 104 && variableLight <= 156) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    basic.showIcon(IconNames.Yes)
    neopixelStrip.show()
  }

  // greater than 156
    if (variableLight > 156 && variableLight <= 208) {
     neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
     neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
     neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
     neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
     basic.showIcon(IconNames.Yes)
     neopixelStrip.show()
  }

  // greater than 208
  if (variableLight > 208) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    basic.showIcon(IconNames.Yes)
    neopixelStrip.show()
  }

  // reset
  pause(5000)
  basic.showIcon(IconNames.Happy)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
})
