const { application } = require("express");

const URL = `http://${window.location.hostname}:5050`;
let socket = io(URL, { path: '/real-time' });

let character = {
    x: 0,
    y: 0
};
let whiteMouse = {
    x: 50,
    y: 50
};
let speed = 10;

function setup() {
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    character.x = windowWidth / 2;
    character.y = windowHeight / 2;
}

function draw() {
    background(0, 50);
    textSize(64);
    text('🐍', character.x - 25, character.y);
    textSize(24);
    text('🐁', whiteMouse.x, whiteMouse.y);
    eatsMouse();
}


function eatsMouse() {
    if (dist(character.x, character.y, whiteMouse.x, whiteMouse.y) < 50) {
        putMouseRandomPosition();
    }
}

function putMouseRandomPosition() {
    whiteMouse.x = random(50, windowWidth - 50);
    whiteMouse.y = random(50, windowHeight - 50);
}


/*___________________________________________

1) Include the socket method to listen to events and change the character position.
You may want to use a Switch structure to listen for up, down, right and left cases.
_____________________________________________ */
ioServer.on('', (socket) => {
    //1. Se hace un if, si movementButton toca la funcion eatMouse, entonces putMouseRandomPosition cambia
    if(direction === eatsMouse){
        putMouseRandomPosition;
    }
    switch (direction) {
        case
        value: 'UP'
            whiteMouse.x;
            whiteMouse.y;
            break;
    
        case 
        value:'DOWN'
            whiteMouse.x;
            whiteMouse.y;
            break;

        case 
        value: 'RIGHT'
            whiteMouse.x;
            whiteMouse.y;
             break;

        case 
        value: 'LEFT'
            whiteMouse.x;
            whiteMouse.y;
            break;    
        }   
});

/*___________________________________________

2) Include the fetch method to post each time the snake eats a mouse
_____________________________________________ */
app.post ('Eat', (eatsMouse) => {
    // if (eatsMouse){
    console.log("EAT");
    //}
    //console.log(eatsMouse);
}); 
app.listen (5050);

