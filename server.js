let express = require("express");
let app = express();
app.use(express.static("public"));
let server = app.listen(80);

let io = require("socket.io")(server);

let Vec = require("./Vec");

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