let express = require("express");
let app = express();
app.use(express.static("public"));
let server = app.listen(8080, () => {
    console.log("Server listening on port " + server.address().port);
});

let io = require("socket.io")(server);

let Vec = require("./Vec");
let Maze = require("./Maze");
let Game = require("./Game");
let Player = require("./Player");