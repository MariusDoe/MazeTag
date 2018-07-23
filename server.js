let express = require("express");
let app = express();
app.use(express.static("public"));
let server = app.listen(80);

let io = require("socket.io")(server);

let Vec = require("./Vec");
let Maze = require("./Maze");

class Game {
    constructor() {
        this.players = [];
    }

    update() {

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