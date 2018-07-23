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

module.exports = Player;