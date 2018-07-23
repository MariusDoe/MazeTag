let express = require("express");
let app = express();
app.use(express.static("public"));
let server = app.listen(80, () => {
    console.log("Server listening on " + server.address())
});

let io = require("socket.io")(server);

let Vec = require("./Vec");
let Maze = require("./Maze");
let Game = require("./Game");
let Player = require("./Player");