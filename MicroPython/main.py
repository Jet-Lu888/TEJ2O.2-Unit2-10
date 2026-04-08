"""
Created by: Jet Lu
Created on: Apr 2026
This module is a Micro:bit MicroPython program that finds the light level.
"""

from microbit import *
import neopixel

# variables 
lightLevels = 0
myNeopixelStrip = neopixel.NeoPixel(pin16, 4)

# setup
display.show(Image.HAPPY)
myNeopixelStrip.clear()
myNeopixelStrip.show()

# a button
while True:
    if button_a.is_pressed():
        lightLevels = display.read_light_level()

        myNeopixelStrip.clear()

        if lightLevels > 52:
            myNeopixelStrip[0] = (255, 255, 255)

        if lightLevels > 104:
            myNeopixelStrip[1] = (255, 255, 255)

        if lightLevels > 156:
            myNeopixelStrip[2] = (255, 255, 255)

        if lightLevels > 208:
            myNeopixelStrip[3] = (255, 255, 255)

        myNeopixelStrip.show()

        display.scroll("Light level is " + (lightLevels))

    # reset
    if button_b.is_pressed():
        display.clear()
        myNeopixelStrip.clear()
        myNeopixelStrip.show()
        display.show(Image.HAPPY)
