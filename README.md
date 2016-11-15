# myonic
Code for Myo hack at AngelHack 2015 hackathon

More information at http://www.hackathon.io/myonic_

Includes the following
- script that uses rpi-gpio for controlling Raspberry Pi GPIO pins to send IR signals
- lircd configuration file that lists IR codes for certain commands
- server script that uses express to listen for HTTP requests and execute `irsend` command
- client script that interfaces with Myo and sends HTTP requests to the server
