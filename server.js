let express = require("express");
let app = express();
let io = require("socket.io");

/**
 * a 2D-Vector representation
 */
class Vec {
    /**
     *
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }

    sub(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }

    mul(other) {
        return new Vec(this.x * other.x, this.y * other.y);
    }

    div(other) {
        return new Vec(this.x / other.x, this.y / other.y);
    }
}

class Game {
    constructor() {
        this.players = [];
    }

    update() {

    }
}

const PATH = 0;
const WALL = 1;

class Maze {
    /**
     *
     * @param {Vec} size
     */
    constructor(size) {
        this.size = size;
        // generate...
    }

    getCell(pos) {
        // return PATH / WALL;
    }
}

class Player {
    /**
     * creates a Player associated with a Game and a Socket
     * @param {Game} game
     * @param {SocketIO.Socket} socket
     */
    constructor(game, socket) {
        this.game = game;
        this.socket = socket;
        this.initListeners();
    }

    initListeners() {

    }
}