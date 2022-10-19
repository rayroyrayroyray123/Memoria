# MEMORIA📷 - Take a step back to live in the moment in old school style
Use Memoria to record audio memories with a click of a button.
Track your records on a map to look back on the moment.
Focus on the present, keep every bit of it! This product is
made for DECO7381 course by Team Mission: Possible.

## Technology Stack
| Name | Stack | Link |
| --- | ----------- | ----------- |
| React.js | Front-end | https://reactjs.org/ |
| Node.js | Back-end | https://nodejs.org/en/ |
| Express.js | Back-end | https://expressjs.com/ |
| MongoDB | Database | https://www.mongodb.com/ |
| Figma | UI/UX | https://www.figma.com/ |
| Google Map | API | https://developers.google.com/apis-explorer |
| Arduino IDE | Ardunio | https://www.arduino.cc/ |

## Hardware Components
- ELEGOO Nano V3.0 Compatible with Arduino IDE
- GPS Flight Controller Tracking Arduino GPS Module GY-GPS6MV2 NEO6M
- SanDisk 32GB Ultra microSDHC UHS-I Memory Card with Adapter - 120MB/s, C10, U1, Full HD, A1
- Micro SD Card Module SPI for Arduino PIC
- MAX9814 Microphone AGC Amplifier Board Module Auto Gain Control for Arduino
- SPDT Miniature Toggle Switch - Solder Tag
- Elegoo Multicolored Dupont Wire Male to Female, Male to Male, Female to Female Breadboard Jumper Wires Ribbon Cables for arduino
- Red 5mm LED 8mcd Round Diffused

## Running the device
- Turn the power source on: This should start the Arduino, and the sketch starts to run, tracking the GPS location through the GPS module
- When the switch is turned on, the GPS location and timestamp is written to a file in the SD card, and the Microphone starts recording the audio
- When the switch is turned off, the microphone stops recording the audio, and stores it on to the SD card.
- The data can be accessed via the SD card

## Rewriting the Arduino code
- Open the Ardunio (.ino) sketch on the Arduino IDE
- Connect the Arduino via USB
- On MacOS, it is automatically detected over the port
- On Windows, CH340 Driver must be installed: https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all for it to be detected on the port
- Upload the sketch to the Arduino, to run it
Our website: https://memoriaapp.herokuapp.com/

## Repositories
- [Front end](
https://github.com/rayroyrayroyray123/Memoria/tree/main/client) - Code base for Front-end on Github
- [Back end](https://github.com/rayroyrayroyray123/Memoria/tree/main/server) - Code base for Back-end on Github
## Features
### Post feature
- Create post
- Edit post
- Delete post
  
### Map Features
- See post location and post detail (Create from post feature)
  
### User profile Features
- Show user info
- Edit user info
  
## Development Guide
### Set Up
1. Clone the repository
```console
foo@bar:~$ git clone https://github.com/rayroyrayroyray123/Memoria.git
```
#### Back-End
1. change directory to back-end side
```console
foo@bar:~$ cd server
```
2. Install packages and dependencies
```console
foo@bar:~$ npm install
```
3. Run the project
```console
foo@bar:~$ npm start
```

#### Project Structure
- Index: The entrance of the back end side. Controlls the whole logic of back end. 
- Config: Contains configuration files for database(MongoDB_URL).
- Controllers: Contains the actuall logic of each function.
- Middlewares: Contains middlewares for routes.
- Models: Contains schema definition for models.
- Routes: Contains routes for API.
### Front-End
#### Setup
1. change directory to front-end side
```console
foo@bar:~$ cd client
```
2. Install packages and dependencies
```console
foo@bar:~$ npm install
```
3. Run the project
```console
foo@bar:~$ npm start
```
## The Team!
- JISOO CHOI
- KUSHAL VENUGOPAL
- KAVYA MENDA
- SAMATA CHAGANTI
- YI-NING HO
- PING-JUI LEE