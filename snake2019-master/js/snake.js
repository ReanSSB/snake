'use strict';
console.log('snake 2019 is alive');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var cellSize = 40;
var count = 0;
var snake;
var apple = createApple();
var startX, startY, distX, distY;

function createSnake(){
    var snek = {
        x: cellSize * 2,
        y: cellSize * 2,
        dx: cellSize,
        dy: 0,
        cells: [],
        maxCells = 2
    }

    snek.moveLeft = function(){

        if(this.dx == 0){
            this.dx = -cellSize;
            this.dy = 0;
        }

    }

    return snek;
}

function createApple(){
    var app = {
        x: cellSize * 4,
        y: cellSize * 4
    }
    return app;
}

//help function
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}